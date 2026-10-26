import {matchingExtras} from './extra-questions.js';
import {words, passages} from './data.js';
export const shuffle = xs => {const a=[...xs]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a;};
export function question(word, mode, pool=words) {
 const others=shuffle(words.filter(w=>w.id!==word.id));
 let prompt, answer, choices, passage, ids=[word.id];
 if(mode==='pairs') {
  const second=shuffle(pool.filter(w=>w.id!==word.id))[0] || others[0]; ids.push(second.id);
  prompt=word.sentence+' '+second.sentence;
  answer=word.word+' / '+second.word;
  choices=[answer,word.word+' / '+others.find(w=>w.id!==second.id).word,others.find(w=>w.id!==second.id).word+' / '+second.word,second.word+' / '+word.word];
 } else if(mode==='antonyms') {prompt=`In this context, which expression most closely opposes “${word.word}”?\n${word.sentence.replace('___',word.word.toLowerCase())}`;answer=word.opposite;choices=[answer,...others.filter(w=>w.opposite!==answer).slice(0,3).map(w=>w.opposite)];}
 else if(mode==='associations') {prompt=`Which word is suggested by this meaning?\n${word.definition}`;answer=word.word;choices=[answer,...others.slice(0,3).map(w=>w.word)];}
 else if(mode==='reading') {
  const eligible=passages.filter(p=>p.ids.some(id=>pool.some(w=>w.id===id)));
  const p=shuffle(eligible)[0];
  if(!p) return question(word,'meaning',pool);
  const target=shuffle(p.ids.filter(id=>pool.some(w=>w.id===id)))[0]; word=words[target]; ids=[target];passage=p.text;
  prompt=`What does “${word.word}” mean as used in this passage?`;answer=word.definition;choices=[answer,...shuffle(words.filter(w=>w.id!==target)).slice(0,3).map(w=>w.definition)];
 } else {prompt=`What does “${word.word}” mean in this sentence?\n${word.sentence.replace('___',word.word.toLowerCase())}`;answer=word.definition;choices=[answer,...others.slice(0,3).map(w=>w.definition)];}
 return {prompt,answer,choices:shuffle(choices),passage,ids,explanation:ids.map(id=>`${words[id].word}: ${words[id].definition}.`).join(' ')};
}
export function makeQuiz(pool,mode,count=10){if(mode==='extra')return shuffle(matchingExtras(pool)).map(q=>({...q,ids:[...q.ids],choices:shuffle(q.choices)}));return shuffle(pool).slice(0,count).map((w,i)=>question(w,mode==='mixed'?['pairs','meaning','antonyms','associations','reading'][i%5]:mode,pool));}
