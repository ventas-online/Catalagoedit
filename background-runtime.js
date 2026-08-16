const KEY='catalogoeditAdminData';
const presets={
 solid:c=>c.backgroundColor||'#f7f2f4',
 blush:()=> 'linear-gradient(135deg,#fff8f8 0%,#f3dce4 48%,#ead0da 100%)',
 champagne:()=> 'radial-gradient(circle at 15% 20%,rgba(255,255,255,.95),transparent 35%),linear-gradient(135deg,#f7efe6,#ead9c8 55%,#f4e8dc)',
 botanical:()=> 'radial-gradient(circle at 85% 15%,rgba(139,171,143,.25),transparent 28%),radial-gradient(circle at 15% 80%,rgba(114,150,120,.18),transparent 30%),linear-gradient(135deg,#f8f7f0,#e6eee5)',
 ocean:()=> 'radial-gradient(circle at 80% 10%,rgba(255,255,255,.28),transparent 28%),linear-gradient(135deg,#eef5f7,#d7e7ec 50%,#c6dce3)',
 night:()=> 'radial-gradient(circle at 80% 15%,rgba(190,160,120,.18),transparent 30%),linear-gradient(135deg,#17151a,#29232b 55%,#3b3038)',
 paper:()=> 'repeating-linear-gradient(0deg,rgba(90,70,50,.025) 0,rgba(90,70,50,.025) 1px,transparent 1px,transparent 5px),linear-gradient(135deg,#faf7f1,#f1ece4)',
 mesh:()=> 'radial-gradient(circle at 20% 20%,rgba(190,126,153,.22),transparent 24%),radial-gradient(circle at 80% 70%,rgba(120,150,190,.16),transparent 26%),linear-gradient(135deg,#fbf7f8,#f1edf5)'
};
try{const d=JSON.parse(localStorage.getItem(KEY));if(d?.config){const c=d.config,t=c.backgroundType||'solid';const bg=t==='custom'&&c.backgroundImage?`url("${c.backgroundImage}")`:presets[t]?.(c)||c.backgroundColor||'#f7f2f4';document.documentElement.style.setProperty('--studio-background',bg);document.body.style.background=bg;document.body.style.backgroundAttachment='fixed';document.body.style.backgroundSize=t==='custom'?'cover':'auto';}}catch{}