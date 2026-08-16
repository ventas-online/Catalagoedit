(() => {
  const button = document.getElementById('generateDescription');
  if (!button) return;

  const field = document.getElementById('pDescription');
  const read = id => (document.getElementById(id)?.value || '').trim();
  const normalize = value => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const variants = [
    ({name, brand, category, benefit}) => `${name}${brand ? ` de ${brand}` : ''} es una excelente opción de ${category || 'uso diario'}. ${benefit}. Su presentación práctica facilita elegirlo y añadirlo a tu pedido.`,
    ({name, brand, category, benefit}) => `Descubre ${name}${brand ? ` de ${brand}` : ''}, pensado para quienes buscan calidad y practicidad en ${category || 'su día a día'}. ${benefit}. Ideal para complementar tu compra con confianza.`,
    ({name, brand, category, benefit}) => `${name}${brand ? ` · ${brand}` : ''}. Una alternativa versátil para ${category || 'tu rutina'}. ${benefit}. Consulta disponibilidad, variantes y detalles al realizar tu pedido.`,
    ({name, brand, category, benefit}) => `Haz de ${name}${brand ? ` de ${brand}` : ''} parte de tu selección. ${benefit}, con una propuesta ideal para ${category || 'uso cotidiano'}. Disponible para pedido según existencias.`,
    ({name, brand, category, benefit}) => `Una elección práctica: ${name}${brand ? ` de ${brand}` : ''}. ${benefit}. Perfecto para quienes valoran una presentación cuidada y una compra sencilla.`,
    ({name, brand, category, benefit}) => `${name}${brand ? ` — ${brand}` : ''} destaca dentro de ${category || 'nuestros productos'} por su enfoque práctico. ${benefit}. Agrégalo a tu catálogo y consulta sus opciones disponibles.`,
    ({name, brand, category, benefit}) => `Conoce ${name}${brand ? ` de ${brand}` : ''}. ${benefit}. Una propuesta pensada para integrarse fácilmente en ${category || 'tu día a día'} y hacer más simple tu elección.`,
    ({name, brand, category, benefit}) => `Si buscas una opción confiable para ${category || 'uso diario'}, ${name}${brand ? ` de ${brand}` : ''} puede ser una gran elección. ${benefit}. Solicita información y disponibilidad al realizar tu pedido.`
  ];

  function getBenefit(text) {
    if (/serum|suero|crema|hidrat|facial|skincare|maquillaje|cosmet/.test(text)) return 'Su enfoque está pensado para acompañar una rutina de cuidado y belleza de forma cómoda y sencilla';
    if (/shampoo|cabello|pelo|mascarilla|acondicionador|capilar/.test(text)) return 'Su propuesta está orientada al cuidado capilar y a una rutina agradable de uso diario';
    if (/celular|phone|cargador|cable|audif|audífono|gadg|tecnolog|usb|bluetooth|smart/.test(text)) return 'Ofrece una solución práctica para acompañar tus dispositivos y mantener tu día conectado';
    if (/ferreter|herramienta|taladro|tornillo|constru|electric|plomer/.test(text)) return 'Está pensado para facilitar trabajos, reparaciones y proyectos cotidianos';
    if (/ropa|camisa|vestido|pantalon|zapato|moda|blusa|falda|jean/.test(text)) return 'Aporta una opción versátil para completar tu estilo y adaptarse a diferentes ocasiones';
    if (/hogar|cocina|mueble|decor|organizador|limpieza/.test(text)) return 'Combina practicidad y utilidad para resolver necesidades del hogar de manera sencilla';
    if (/alimento|comida|snack|bebida|cafe|dulce|chocolate/.test(text)) return 'Es una alternativa pensada para disfrutar con facilidad y convertir una compra cotidiana en una buena elección';
    return 'Su propuesta combina practicidad, buena presentación y una experiencia de compra sencilla';
  }

  function chooseVariant(key, previous) {
    let index = Math.abs(hash(key)) % variants.length;
    const previousIndex = variants.findIndex(fn => previous && previous === fn);
    if (index === previousIndex) index = (index + 1) % variants.length;
    return index;
  }

  function hash(value) {
    let h = 2166136261;
    for (let i = 0; i < value.length; i++) h = Math.imul(h ^ value.charCodeAt(i), 16777619);
    return h >>> 0;
  }

  function generate() {
    const name = read('pName') || 'Este producto';
    const brand = read('pBrand');
    const category = read('pCategory') || 'uso diario';
    const text = normalize(`${name} ${brand} ${category}`);
    const benefit = getBenefit(text);
    const previous = field.value.trim();
    const seed = `${name}|${brand}|${category}|${Date.now()}|${Math.random()}`;
    let index = Math.abs(hash(seed)) % variants.length;
    let description = variants[index]({name, brand, category, benefit});

    // Evita repetir literalmente la última descripción, incluso si el usuario genera varias veces.
    if (description === previous) {
      index = (index + 1) % variants.length;
      description = variants[index]({name, brand, category, benefit});
    }

    field.value = description;
    field.dispatchEvent(new Event('input', {bubbles: true}));
    const toast = document.getElementById('toast');
    if (toast) {
      toast.textContent = 'Nueva descripción generada';
      toast.classList.add('show');
      clearTimeout(window.catalogoDescriptionToast);
      window.catalogoDescriptionToast = setTimeout(() => toast.classList.remove('show'), 2200);
    }
  }

  // Captura antes del listener antiguo de admin.js para reemplazar el generador repetitivo sin romper el resto del editor.
  button.addEventListener('click', event => {
    event.preventDefault();
    event.stopImmediatePropagation();
    generate();
  }, true);
})();
