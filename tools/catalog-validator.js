#!/usr/bin/env node
/**
 * Validador sin dependencias para datos de catálogo.
 * Uso: node tools/catalog-validator.js products.json
 */
const fs = require('fs');
const path = process.argv[2];
if (!path) { console.error('Uso: node tools/catalog-validator.js <products.json>'); process.exit(2); }
let data;
try { data = JSON.parse(fs.readFileSync(path, 'utf8')); } catch (e) { console.error(`JSON inválido: ${e.message}`); process.exit(2); }
const products = Array.isArray(data) ? data : data.products;
if (!Array.isArray(products)) { console.error('Se esperaba un array o {"products": [...]}'); process.exit(2); }
const errors=[]; const warnings=[];
products.forEach((p,i)=>{
  const label=`Producto ${i+1}`;
  if (!p || typeof p !== 'object') return errors.push(`${label}: registro inválido`);
  if (!String(p.nombre ?? p.name ?? '').trim()) errors.push(`${label}: falta nombre`);
  const raw=p.precio ?? p.price;
  const price=typeof raw==='number' ? raw : Number(String(raw ?? '').replace(',','.').replace(/[^0-9.-]/g,''));
  if (!Number.isFinite(price) || price < 0) errors.push(`${label}: precio inválido`);
  if (!String(p.categoria ?? p.category ?? '').trim()) warnings.push(`${label}: falta categoría`);
  if (!String(p.imagen ?? p.image ?? '').trim()) warnings.push(`${label}: falta imagen`);
});
console.log(JSON.stringify({ok:errors.length===0, total:products.length, errors, warnings},null,2));
process.exit(errors.length ? 1 : 0);
