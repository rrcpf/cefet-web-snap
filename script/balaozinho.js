let balaozinhoEl = document.querySelector('#balaozinho');
let marcacoes = document.querySelectorAll('.marcacao');

for (let marcacaoEl of marcacoes) {
    marcacaoEl.addEventListener('mouseover', (e) => {
        let tituloEl = e.currentTarget.dataset.titulo;
        let conteudoEl = e.currentTarget.dataset.conteudo;
        balaozinhoEl.innerHTML = `<h2>${tituloEl}</h2> <p>${conteudoEl}</p>`;
        balaozinhoEl.style.color = e.currentTarget.dataset.cor;
    })
    marcacaoEl.addEventListener('mouseout', (e) => {
        balaozinhoEl.innerHTML='';
    })
    marcacaoEl.addEventListener('mousemove', (e) => {
        balaozinhoEl.style.left = e.pageX + 'px';
        balaozinhoEl.style.top = e.pageY + 'px';
    })
}