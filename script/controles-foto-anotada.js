let imgEl = document.querySelector('.foto-anotada img');
let filtroEl = document.querySelector('#filtro-da-foto');

filtroEl.addEventListener('click', (e) => {
    let valorFiltro = filtroEl.value;
    imgEl.style.filter = valorFiltro;
})