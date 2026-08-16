(() => {
  const KEY='catalogoeditAdminData';
  const presets=[
    ['blush','Blush','linear-gradient(135deg,#fff7f8 0%,#efd9df 48%,#f9f1ee 100%)'],
    ['champagne','Champagne','linear-gradient(135deg,#fffdf7 0%,#eadfc8 52%,#f7f1e5 100%)'],
    ['botanical','Botánico','radial-gradient(circle at 20% 20%,#e5f1e8 0,transparent 35%),radial-gradient(circle at 80% 70%,#d6e4d2 0,transparent 35%),#f7faf6'],
    ['ocean','Azul editorial','linear-gradient(135deg,#eef7fb 0%,#cfe5ed 52%,#f7fbfc 100%)'],
    ['night','Negro premium','radial-gradient(circle at 75% 20%,#4b4650 0,transparent 28%),linear-gradient(135deg,#111116,#25232a)'],
    ['paper','Papel','radial-gradient(#d9d2ca 0.7px,transparent 0.7px),#faf8f3'],
    ['mesh','Malla moderna','linear-gradient(135deg,#f5efff,#e9f7f5 45%,#fff4e9)'],
    ['solid','Color sólido','var(--catalog-bg,#f7f2f4)']
  ];
  const $=s=>document.querySelector(s);
  function load(){try{return JSON.parse(localStorage.getItem(KEY))||null}catch{return null}}
  function save(d){localStorage.setItem(KEY,JSON.stringify(d));const t=$('#toast');if(t){t.textContent='Fondo guardado';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}}
  function inject(){
    const tab=$('#tab-design'); if(!tab || $('#backgroundStudio')) return;
    const panel=document.createElement('div'); panel.className='panel form-panel'; panel.id='backgroundStudio';
    panel.innerHTML=`<div><span class="eyebrow">ATMÓSFERA</span><h3>Fondos profesionales</h3><p>Elige una atmósfera, úsala como base o sube una imagen propia.</p></div><div class="bg-grid">${presets.map(p=>`<button type="button" class="bg-choice" data-bg="${p[0]}" style="--bg:${p[2]}"><span></span><strong>${p[1]}</strong></button>`).join('')}</div><div class="grid2"><label>Imagen de fondo propia<input id="backgroundFile" type="file" accept="image/*"></label><label>Posición<select id="backgroundPosition"><option value="center">Centro</option><option value="top">Arriba</option><option value="bottom">Abajo</option></select></label></div><button type="button" id="clearBackground">Quitar imagen de fondo</button>`;
    tab.appendChild(panel);
    panel.querySelectorAll('[data-bg]').forEach(b=>b.addEventListener('click',()=>setPreset(b.dataset.bg)));
    $('#backgroundFile').addEventListener('change',upload);
    $('#backgroundPosition').addEventListener('change',()=>{const d=load();d.config.backgroundPosition=$('#backgroundPosition').value;save(d);preview(d)});
    $('#clearBackground').addEventListener('click',()=>{const d=load();d.config.backgroundImage='';d.config.backgroundType='preset';save(d);preview(d)});
    restore();
  }
  function setPreset(type){const d=load();if(!d)return;d.config.backgroundType=type;d.config.backgroundImage='';save(d);preview(d)}
  function upload(e){const f=e.target.files[0];if(!f)return;if(!f.type.startsWith('image/'))return alert('Selecciona una imagen.');if(f.size>5*1024*1024)return alert('La imagen de fondo debe pesar 5 MB o menos.');const r=new FileReader();r.onload=()=>{const d=load();d.config.backgroundType='image';d.config.backgroundImage=r.result;d.config.backgroundPosition=$('#backgroundPosition').value;save(d);preview(d)};r.readAsDataURL(f)}
  function backgroundFor(c){const p=presets.find(x=>x[0]===(c.backgroundType||'solid'));return p?p[2]:(c.backgroundColor||'#f7f2f4')}
  function preview(d){const c=d?.config;if(!c)return;const el=$('#stylePreviewCard');if(el){el.style.background=c.backgroundType==='image'&&c.backgroundImage?`url("${c.backgroundImage}") center/${c.backgroundSize||'cover'} no-repeat`:backgroundFor(c);el.style.color=c.backgroundType==='night'?'#fff':'';el.style.backgroundPosition=c.backgroundPosition||'center'};window.dispatchEvent(new CustomEvent('catalogoedit:background',{detail:c}))}
  function restore(){const d=load();if(!d)return;$('#backgroundPosition').value=d.config.backgroundPosition||'center';preview(d)}
  document.addEventListener('DOMContentLoaded',inject);
  if(document.readyState!=='loading')inject();
})();
