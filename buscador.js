
document.addEventListener("keyup", e => {
  if (e.target.matches("#buscador")) {
    const buscarTermino = e.target.value.replace(/[^\w-]/g, "").toLowerCase();
    let busqueda = false;

    document.querySelectorAll("#main .fondo-img").forEach(imagen => {
      const imagenId = imagen.id.replace(/[^\w-]/g, "").toLowerCase();

      if (imagenId.includes(buscarTermino)) {
        imagen.classList.remove("filtro");
        busqueda = true;
      } else {
        imagen.classList.add("filtro");
      }
    });
    const resultado = document.querySelector('#main');
    const oculto = 
    document.querySelector('.mensaje_sin_coincidencias');
    if (!busqueda) {
   resultado.style.display = "none";
  oculto.style.display = "grid";
 } else {
    resultado.style.display = "flex";
    oculto.style.display = "none";
}
  }
});

const btn_lupa = document.querySelector('#icon-lupa');
const buscador_input = document.querySelector('#buscador');
const titleApp = document.querySelector('#title-app');

btn_lupa.addEventListener('click', () => {
  if (buscador_input.style.display == 'none') {
    buscador_input.style.display = "block";
    btn_lupa.src = "https://i.postimg.cc/K85Bvdcn/circulo-cruzado.png";
    btn_lupa.style.width = "25px";
    btn_lupa.style.height = "25px";
    titleApp.style.display = "none";
  } else {
    buscador_input.style.display = "none";
    btn_lupa.src = "https://i.postimg.cc/RZp7MS8t/IMG-9056.png"
    titleApp.style.display = "inline";
    btn_lupa.style.width = "25px";
    btn_lupa.style.height = "25px";
  }
});
const botonesDescargar = document.querySelectorAll('.svg-download');
const botonesVer = document.querySelectorAll('.svg-view');

function restartAnimation(element) {
  element.style.animation = 'none';
  element.offsetHeight;
  element.style.animation = null;
}

botonesDescargar.forEach((botonDescargar) => {
  botonDescargar.addEventListener('click', () => {
    restartAnimation(botonDescargar);
    botonDescargar.style.animationName = 'escalar';
    botonDescargar.style.animationDuration = '1s';
  });
});

botonesVer.forEach((botonVer) => {
  botonVer.addEventListener('click', () => {
    restartAnimation(botonVer);
    botonVer.style.animationName = 'escalar';
    botonVer.style.animationDuration = '1s';
  });
});

