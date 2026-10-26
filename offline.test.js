import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile, access} from 'node:fs/promises';
import vm from 'node:vm';
const source=await readFile(new URL('./sw.js',import.meta.url),'utf8');
function worker({failInstall=false}={}) {
 const scope='https://example.test/quarter-one-vocab-practice/';
 const handlers={},stores=new Map();let claimed=false,network=0;
 const caches={
  async open(key){if(!stores.has(key))stores.set(key,new Map());const store=stores.get(key);return {
   async addAll(requests){if(failInstall)throw new Error('network unavailable');for(const r of requests)store.set(r.url,{url:r.url});},
   async match(url){return store.get(url);}
  };},
  async keys(){return [...stores.keys()];},async delete(key){return stores.delete(key);}
 };
 vm.runInNewContext(source,{URL,Request,caches,fetch:async()=>{network++;throw new Error('offline');},self:{registration:{scope},clients:{claim:async()=>{claimed=true;}},addEventListener:(type,fn)=>{handlers[type]=fn;}}});
 return {scope,handlers,stores,caches,get claimed(){return claimed;},get network(){return network;},async dispatch(type,fields={}){let pending;handlers[type]({...fields,waitUntil:p=>{pending=p;}});await pending;},request(url,method='GET'){let response;handlers.fetch({request:{url,method},respondWith:p=>{response=p;}});return response;}};
}
test('offline cache contains every runtime file and reports ready only when complete',async()=>{
 const w=worker();let reply;
 await w.dispatch('install');
 const store=[...w.stores.values()][0];
 for(const file of ['index.html','style.css','app.js','engine.js','data.js','extra-questions.js','offline.js','manifest.webmanifest','icon.svg']){
  assert.ok(store.has(w.scope+file));await access(new URL(file,import.meta.url));
 }
 await w.dispatch('message',{data:{type:'OFFLINE_STATUS'},ports:[{postMessage:r=>{reply=r;}}]});assert.equal(reply.ready,true);
 store.delete(w.scope+'extra-questions.js');
 await w.dispatch('message',{data:{type:'OFFLINE_STATUS'},ports:[{postMessage:r=>{reply=r;}}]});assert.equal(reply.ready,false);
});
test('failed downloads reject installation; activation removes only this app’s old caches',async()=>{
 await assert.rejects(worker({failInstall:true}).dispatch('install'),/network unavailable/);
 const w=worker();await w.caches.open(`wordcraft:${w.scope}:old`);await w.caches.open('another-app');await w.dispatch('install');await w.dispatch('activate');
 assert.ok(w.claimed);assert.ok(w.stores.has('another-app'));assert.equal(w.stores.has(`wordcraft:${w.scope}:old`),false);
});
test('offline navigation and modules use cache; unrelated URLs are untouched',async()=>{
 const w=worker();await w.dispatch('install');
 for(const path of ['', 'index.html', 'engine.js', 'extra-questions.js'])assert.ok(await w.request(w.scope+path+'?example=1'));
 assert.equal(w.network,0);
 assert.equal(w.request('https://example.test/other-app/'),undefined);
 assert.equal(w.request(w.scope+'unknown-file'),undefined);
 assert.equal(w.request(w.scope+'app.js','POST'),undefined);
});
