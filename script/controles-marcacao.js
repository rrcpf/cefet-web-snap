let desejaVisualizarEl = document.querySelector('#visibilidade-das-marcacoes');
let bodyEl = document.querySelector('body');
desejaVisualizarEl.addEventListener('change', (e) => {
    let estaMarcado = e.currentTarget.checked;
    console.log(estaMarcado);
    bodyEl.classList.toggle('marcacoes-ocultas', estaMarcado);
} )

/* Definição dos inputs dos controles*/
let heightInput = document.querySelector('#altura-da-marcacao');
let widthInput = document.querySelector('#largura-da-marcacao');
let xInput = document.querySelector('#x-da-marcacao');
let yInput = document.querySelector('#y-da-marcacao');
let titleInput = document.querySelector('#titulo-da-marcacao');
let contentInput = document.querySelector('#conteudo-da-marcacao');
let colorInput = document.querySelector('#cor-da-marcacao');
let ovalInput = document.querySelector('input[name=formato-da-marcacao][value="formato-oval"]');
let rectangleInput = document.querySelector('input[name=formato-da-marcacao][value="formato-retangular"]');
//let formato;



/* Exercício 2 preencher controles após selecionar marcação */
for (let marcacaoEl of marcacoes) {
    marcacaoEl.addEventListener('click', (e) => {
        let selecionadaEl = document.querySelector('.selecionada');
        selecionadaEl.classList.remove('selecionada');
        marcacaoEl.classList.toggle('selecionada',true);
        heightInput.value = parseInt(marcacaoEl.style.height);
        widthInput.value = parseInt(marcacaoEl.style.width);
        xInput.value = parseInt(marcacaoEl.style.left);
        yInput.value = parseInt(marcacaoEl.style.top);
        titleInput.value = marcacaoEl.dataset.titulo;
        contentInput.value = marcacaoEl.dataset.conteudo;
        colorInput.value = marcacaoEl.dataset.cor;
        
        if(marcacaoEl.classList.contains('formato-oval')){
            //formato = 'formato-oval';  
            ovalInput.checked = true;    
        } else {
            //formato = 'formato-retangular';
            rectangleInput.checked = true;
        }

        /* let formatInput = document.querySelector('input[value="${formato}"]');
        formatInput.checked = true; */

        /*marcacaoEl.style.width = 10 + 'px';
        marcacaoEl.style.height = 10 + 'px';
        marcacaoEl.style.top = 10 + 'px';
        marcacaoEl.style.left = 10 + 'px';*/
    })
}

heightInput.addEventListener('change', (e) => {
    let selecionadaEl = document.querySelector('.selecionada');
    selecionadaEl.style.height = heightInput.value + 'px';
})

widthInput.addEventListener('change', (e) => {
    let selecionadaEl = document.querySelector('.selecionada');
    selecionadaEl.style.width = widthInput.value + 'px';
})

xInput.addEventListener('change', (e) => {
    let selecionadaEl = document.querySelector('.selecionada');
    selecionadaEl.style.left = xInput.value + 'px';
})

yInput.addEventListener('change', (e) => {
    let selecionadaEl = document.querySelector('.selecionada');
    selecionadaEl.style.top = yInput.value + 'px';
})

titleInput.addEventListener('change', (e) => {
    let selecionadaEl = document.querySelector('.selecionada');
    selecionadaEl.dataset.titulo = titleInput.value;
})

contentInput.addEventListener('change', (e) => {
    let selecionadaEl = document.querySelector('.selecionada');
    selecionadaEl.dataset.conteudo = contentInput.value;
})

colorInput.addEventListener('change', (e) => {
    let selecionadaEl = document.querySelector('.selecionada');
    selecionadaEl.dataset.cor = colorInput.value;
})

ovalInput.addEventListener('change', (e) => {
    let selecionadaEl = document.querySelector('.selecionada');
    selecionadaEl.classList.toggle('formato-oval', ovalInput.checked);
    selecionadaEl.classList.toggle('formato-retangular', rectangleInput.checked);
})

rectangleInput.addEventListener('change', (e) => {
    let selecionadaEl = document.querySelector('.selecionada');
    selecionadaEl.classList.toggle('formato-oval', ovalInput.checked);
    selecionadaEl.classList.toggle('formato-retangular', rectangleInput.checked);
})
