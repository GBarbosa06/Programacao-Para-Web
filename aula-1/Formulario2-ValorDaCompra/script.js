document.querySelector('form#Form').addEventListener('submit', (e) => {
    e.preventDefault();

    const valorCompra = document.querySelector('#valorCompra').value;
    const numeroParcelas = document.querySelector('#numeroParcelas').value;
    const taxaJuros = document.querySelector('#taxaJuros').value;

    const valorComJuros = valorCompra * (1 + taxaJuros / 100);
    const parcela = valorComJuros / numeroParcelas;

    document.querySelector('#resultadoParcela').textContent = parcela;
    document.querySelector('#resultadoFinal').textContent = valorComJuros;

    mudarVisibilidade('block')
});


const mudarVisibilidade = (display) => {
    const resultado = document.querySelectorAll('p.resultado');
    [...resultado].forEach(result => {
        result.style.display = display;
    });
}
mudarVisibilidade('none');