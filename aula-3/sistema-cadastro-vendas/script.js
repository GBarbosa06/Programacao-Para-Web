var id = 1;

const listaVendas = document.getElementById('listaVendas');
const adicionarElemento = (nomeVendedor, valorVenda) => {
        const item = document.createElement('tr');
        item.className = 'item-lista';

        let desconto = valorVenda * 0.1;
        let valorFinal = valorVenda - desconto;

        const data = new Date();
        const dataFormatada = data.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
        });

        
        item.innerHTML = `
        <td>${id}</td>
        <td>${nomeVendedor}</td>
        <td>R% ${valorVenda}</td>
        <td>R% ${desconto.toFixed(2)}</td>
        <td>R$ ${valorFinal.toFixed(2)}</td>
        <td>${dataFormatada}</td>
        <td><button class="removeBtn">Remover</button></td>
        `;
        
        listaVendas.appendChild(item);
    id++;
}

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const nomeInput = document.getElementById('nomeVendedor');
    const valorInput = document.getElementById('valorVenda');

    const nomeVendedor = nomeInput?.value;
    const valorVenda = parseFloat(valorInput?.value);

    if (nomeVendedor.trim() === '' || nomeVendedor.trim() === null || isNaN(valorVenda)) {
        alert("Existem campos vazios...");
        nomeInput?.focus();
        return;
    }
    adicionarElemento(nomeVendedor, valorVenda);
    if (nomeInput) nomeInput.value = '';
    if (valorInput) valorInput.value = '';
    nomeInput?.focus();
    return;


});


listaVendas.addEventListener('click', (e) => {
    if (e.target.classList.contains('removeBtn')) {
        e.target.closest('tr').remove();
    }
});