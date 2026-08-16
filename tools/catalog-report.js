#!/usr/bin/env node
/** Genera un informe legible a partir del validador de catálogo. */
const fs=require('fs');
const path=process.argv[2];
if(!path){console.error('Uso: node tools/catalog-report.js <products.json>');process.exit(2)}
let data;try{data=JSON.parse(fs.readFileSync(path,'utf8'))}catch(e){console.error(e.message);process.exit(2)}
const products=Array.isArray(data)?data:data.products;
if(!Array.isArray(products)){console.error('Formato inválido');process.exit(2)}
const errors=[],warnings=[];let total=0;
products.forEach((p,i)=>{const n=i+1;const name=String(p?.nombre??p?.name??'').trim();const raw=p?.precio??p?.price;const price=typeof raw==='number'?raw:Number(String(raw??'').replace(',','.').replace(/[^0-9.-]/g,''));if(!name)errors.push(`Producto ${n}: falta nombre`);if(!Number.isFinite(price)||price<0)errors.push(`Producto ${n}: precio inválido`);else total+=price;if(!String(p?.categoria??p?.category??'').trim())warnings.push(`Producto ${n}: falta categoría`);if(!String(p?.imagen??p?.image??'').trim())warnings.push(`Producto ${n}: falta imagen`)});
console.log(`Productos: ${products.length}`);console.log(`Suma de precios unitarios: $${total.toFixed(2)}`);console.log(`Errores bloqueantes: ${errors.length}`);errors.forEach(x=>console.log(`  ❌ ${x}`));console.log(`Advertencias: ${warnings.length}`);warnings.forEach(x=>console.log(`  ⚠️ ${x}`));console.log(errors.length?'RESULTADO: NO LISTO PARA PUBLICAR':'RESULTADO: APTO PARA SIGUIENTE ETAPA');process.exit(errors.length?1:0);
