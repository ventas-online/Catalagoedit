(() => {
  try {
    const d=JSON.parse(localStorage.getItem('catalogoeditAdminData')); const c=d?.config; if(!c)return;
    const presets={
      blush:'linear-gradient(135deg,#fff7f8 0%,#efd9df 48%,#f9f1ee 100%)',
      champagne:'linear-gradient(135deg,#fffdf7 0%,#eadfc8 52%,#f7f1e5 100%)',
      botanical:'radial-gradient(circle at 20% 20%,#e5f1e8 0,transparent 35%),radial-gradient(circle at 80% 70%,#d6e4d2 0,transparent 35%),#f7faf6',
      ocean:'linear-gradient(135deg,#eef7fb 0%,#cfe5ed 52%,#f7fbfc 100%)',
      night:'radial-gradient(circle at 75% 20%,#4b4650 0,transparent 28%),linear-gradient(135deg,#111116,#25232a)',
      paper:'radial-gradient(#d9d2ca 0.7px,transparent 0.7px),#faf8f3',
      mesh:'linear-gradient(135deg,#f5efff,#e9f7f5 45%,#fff4e9)',
      solid:c.backgroundColor||'#f7f2f4'
    };
    const bg=c.backgroundType==='image'&&c.backgroundImage?`url("${c.backgroundImage}")`:presets[c.backgroundType]||presets.solid;
    document.body.style.backgroundImage=bg;
    document.body.style.backgroundPosition=c.backgroundPosition||'center';
    document.body.style.backgroundSize=c.backgroundType==='image'?'cover':'auto';
    document.body.style.backgroundAttachment='fixed';
    if(c.backgroundType==='night')document.body.classList.add('dark-background');
  } catch(e) {}
})();
