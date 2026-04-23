const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/salarios", (req, res) => {
  let salarios = req.query["salarios[]"];

  if (!Array.isArray(salarios)) {
    salarios = [salarios];
  }

  const numeros = salarios.map((s) => Number(s));

  if (numeros.some((n) => isNaN(n))) {
    return res.send("<h1>Erro: valores inválidos</h1>");
  }

  const maior = Math.max(...numeros);

  const lista = numeros.map((n) => `<li>${n}</li>`).join("");

  res.send(`
    <h1>Resultado</h1>
    <p><strong>Maior salário:</strong> ${maior}</p>
    <h2>Todos os salários:</h2>
    <ul>
      ${lista}
    </ul>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
