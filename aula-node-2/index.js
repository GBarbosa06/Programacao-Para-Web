const express = require('express');
const path = require('path');

const app = express();

let contasAReceber = [];
let contasAPagar = [];
let saldo = 0;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/receber', (req, res) => {
  const valor = parseFloat(req.query.valor);

  if (isNaN(valor) || valor <= 0) {
    return res.send('Valor inválido!');
  }

  contasAReceber.push(valor);
  saldo += valor;

  const totalReceber = contasAReceber.reduce((acc, v) => acc + v, 0);
  const totalPagar = contasAPagar.reduce((acc, v) => acc + v, 0);

  res.send(`
    <h2>Resultado</h2>
    <p><strong>Contas a Receber:</strong> ${contasAReceber.map(valor => 'R$ ' + valor.toFixed(2)).join(', ')}</p>
    <p><strong>Total a Receber:</strong> R$ ${totalReceber.toFixed(2)}</p>
    <br>
    <p><strong>Contas a Pagar:</strong> ${contasAPagar.length > 0 ? contasAPagar.map(valor => 'R$ ' + valor.toFixed(2)).join(', ') : 'Nenhuma'}</p>
    <p><strong>Total a Pagar:</strong> R$ ${totalPagar.toFixed(2)}</p>
    <br>
    <p><strong>Saldo Atual:</strong> R$ ${saldo.toFixed(2)}</p>
    <br>
    <a href="/">Voltar</a>
  `);
});

app.get('/pagar', (req, res) => {
  const valor = parseFloat(req.query.valor);

  if (isNaN(valor) || valor <= 0) {
    return res.send('Valor inválido!');
  }

  contasAPagar.push(valor);
  saldo -= valor;

  const totalReceber = contasAReceber.reduce((acc, v) => acc + v, 0);
  const totalPagar = contasAPagar.reduce((acc, v) => acc + v, 0);

  res.send(`
    <h2>Resultado</h2>
    <p><strong>Contas a Receber:</strong> ${contasAReceber.length > 0 ? contasAReceber.map(valor => 'R$ ' + valor.toFixed(2)).join(', ') : 'Nenhuma'}</p>
    <p><strong>Total a Receber:</strong> R$ ${totalReceber.toFixed(2)}</p>
    <br>
    <p><strong>Contas a Pagar:</strong> ${contasAPagar.map(valor => 'R$ ' + valor.toFixed(2)).join(', ')}</p>
    <p><strong>Total a Pagar:</strong> R$ ${totalPagar.toFixed(2)}</p>
    <br>
    <p><strong>Saldo Atual:</strong> R$ ${saldo.toFixed(2)}</p>
    <br>
    <a href="/">Voltar</a>
  `);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));