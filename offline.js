const status = document.querySelector('#offline-status');
const installButton = document.querySelector('#install-app');
let ready = false;
let installPrompt;
function showStatus() {
 status.textContent = ready
  ? (navigator.onLine ? 'Ready offline — all study materials are saved on this device.' : 'You’re offline — all study tools and saved progress still work.')
  : 'Preparing offline access… Keep this page open while connected.';
}
function checkCache(worker) {
 return new Promise((resolve, reject) => {
  const channel = new MessageChannel();
  const timer = setTimeout(() => {channel.port1.close();reject(new Error('Offline check timed out'));}, 10000);
  channel.port1.onmessage = event => {clearTimeout(timer);channel.port1.close();resolve(event.data.ready === true);};
  worker.postMessage({type:'OFFLINE_STATUS'}, [channel.port2]);
 });
}
async function prepare() {
 if (!('serviceWorker' in navigator)) {
  status.textContent = 'Offline saving is unavailable in this browser. Open this site in Safari, Chrome, or Edge to prepare it for offline use.';
  return;
 }
 showStatus();
 try {
  const registration = await navigator.serviceWorker.register('./sw.js', {updateViaCache:'none'});
  const active = await new Promise((resolve, reject) => {
   const timer = setTimeout(() => reject(new Error('Offline installation timed out')), 30000);
   navigator.serviceWorker.ready.then(value => {clearTimeout(timer);resolve(value);}, error => {clearTimeout(timer);reject(error);});
  });
  ready = await checkCache(active.active);
  if (!ready) throw new Error('Incomplete cache');
  showStatus();
  const announceUpdate = () => {
   if (registration.waiting) document.querySelector('#offline-update').textContent = 'An update is downloaded. Close all Wordcraft tabs and reopen to use it.';
  };
  announceUpdate();
  registration.addEventListener('updatefound', () => {
   registration.installing?.addEventListener('statechange', announceUpdate);
  });
 } catch {
  status.textContent = 'Offline download did not finish. Reconnect and reload before studying without data.';
 }
}
window.addEventListener('online', () => {if (ready) showStatus(); else prepare();});
window.addEventListener('offline', () => {
 if (ready) showStatus();
 else status.textContent = 'Offline materials are not ready yet. Reconnect and reload to finish downloading.';
});
window.addEventListener('beforeinstallprompt', event => {
 event.preventDefault();installPrompt=event;installButton.hidden=false;
});
installButton.addEventListener('click', async () => {
 if (!installPrompt) return;
 await installPrompt.prompt();await installPrompt.userChoice;
 installPrompt=null;installButton.hidden=true;
});
window.addEventListener('appinstalled', () => {installPrompt=null;installButton.hidden=true;});
prepare();
