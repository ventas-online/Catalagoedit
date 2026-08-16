const niches=[
['💄','Belleza y cosmética','Maquillaje, skincare y cuidado personal',['Base profesional','$6.00'],['Gloss hidratante','$5.80']],
['👗','Ropa y moda','Ropa, zapatos y accesorios',['Vestido casual','$24.00'],['Bolso urbano','$19.00']],
['📱','Accesorios para celulares','Fundas, cables, cargadores y soportes',['Funda premium','$8.00'],['Cable USB-C','$6.50']],
['💻','Gadgets y tecnología','Audio, periféricos y accesorios',['Audífonos Bluetooth','$18.00'],['Soporte escritorio','$12.00']],
['🏠','Hogar y decoración','Organización, cocina y decoración',['Organizador multiuso','$11.00'],['Lámpara decorativa','$22.00']],
['🔨','Ferretería','Herramientas, electricidad y plomería',['Kit de destornilladores','$15.00'],['Taladro compacto','$48.00']],
['🍰','Repostería y alimentos','Postres, productos y pedidos',['Caja de cupcakes','$14.00'],['Torta personalizada','$25.00']],
['🎁','Regalos y detalles','Regalos, personalizados y fechas especiales',['Caja sorpresa','$20.00'],['Set personalizado','$16.00']],
['💎','Joyería y bisutería','Piezas, accesorios y regalos',['Collar delicado','$14.00'],['Pulsera minimalista','$9.00']],
['🌸','Perfumería','Perfumes, body mist y cuidado',['Fragancia floral','$28.00'],['Body mist','$12.00']],
['🐶','Mascotas','Accesorios, higiene y bienestar',['Collar para mascota','$10.00'],['Juguete interactivo','$13.00']],
['📚','Papelería y oficina','Útiles, organización y artículos de oficina',['Planner semanal','$8.00'],['Set de marcadores','$7.00']],
['🏋️','Deportes y fitness','Accesorios y entrenamiento',['Banda de resistencia','$9.00'],['Botella deportiva','$11.00']],
['🚗','Automotriz','Accesorios y cuidado del vehículo',['Soporte para móvil','$12.00'],['Kit de limpieza','$18.00']],
['👶','Bebé y maternidad','Accesorios y productos para bebé',['Manta suave','$17.00'],['Set de baberos','$10.00']],
['🧵','Artesanía','Productos hechos a mano y personalizados',['Vela artesanal','$12.00'],['Decoración tejida','$18.00']],
['📖','Librería','Libros, cuadernos y lectura',['Cuaderno premium','$9.00'],['Agenda anual','$13.00']],
['🌱','Plantas y jardinería','Plantas, macetas y herramientas',['Maceta decorativa','$14.00'],['Kit de jardinería','$16.00']],
['💇','Salones y barberías','Productos de belleza profesional',['Aceite capilar','$11.00'],['Cera modeladora','$9.00']],
['🏍️','Motos y bicicletas','Accesorios y repuestos',['Guantes deportivos','$16.00'],['Luz LED','$10.00']]
];
const nichesEl=document.querySelector('#niches');const grid=document.querySelector('#miniGrid');let current=0;
function renderNiches(){nichesEl.innerHTML=niches.map((n,i)=>`<button class="niche ${i===current?'active':''}" data-i="${i}"><b>${n[0]}</b><strong>${n[1]}</strong><small>${n[2]}</small></button>`).join('')}
function renderPreview(i){current=i;const n=niches[i];document.querySelector('#previewIcon').textContent=n[0];document.querySelector('#previewName').textContent=n[1];grid.innerHTML=n.slice(3).map(p=>`<div class="mini-card"><div class="mini-photo">${n[0]}</div><small>${p[0]}</small><b>${p[1]}</b></div>`).join('');document.querySelector('#previewTotal').textContent='$0.00';document.querySelectorAll('.niche').forEach((el,j)=>el.classList.toggle('active',j===i))}
nichesEl.addEventListener('click',e=>{const b=e.target.closest('[data-i]');if(b)renderPreview(Number(b.dataset.i))});renderNiches();renderPreview(0);