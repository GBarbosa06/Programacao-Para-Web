var id = 1;
var venda = {

}

const listaVendas = document.getElementById('listaVendas');
const adicionarElemento = (nomeVendedor, valorVenda) => {
        const item = document.createElement('tr');
        item.className = 'item-lista';

        let desconto = valorVenda * 0.1;
        let valorFinal = valorVenda - desconto;
        
        item.innerHTML = `
        <td>${id}</td>
        <td>${nomeVendedor}</td>
        <td>${valorVenda}</td>
        <td>${desconto}</td>
        <td>${valorFinal}</td>
        <td>${Date.now}</td>
        <td><button className="removeBtn">Remover</button></td>
        `;
        
        listaDiv.appendChild(item);
    id++;
}

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const nomeVendedor = document.getElementById('nomeVendedor').value;
    const valorVenda = document.getElementById('valorVenda').value;

    if (nomeVendedor.trim() === '' || nomeVendedor.trim() === null || isNaN(valorVenda)) {
        alert("Existem campos vazios...");
        document.getElementById('nomeVendedor').focus();
        return;
    }
    adicionarElemento(nomeVendedor, valorVenda);

});


const remover = () => {

}