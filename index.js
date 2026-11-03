// Servidor simples, somente para exibir o site (sem banco de dados, login ou cadastro)
import express from "express";
import membros from "./data/membros.js";
import posts from "./data/posts.js";

const app = express();

// Define o EJS como renderizador de páginas
app.set("view engine", "ejs");
// Arquivos estáticos (css, js, imagens)
app.use(express.static("public"));

// ROTA PRINCIPAL (LANDING PAGE)
app.get("/", (req, res) => {
  res.render("index", { membros, posts });
});

const PORTA = process.env.PORT || 8080;
app.listen(PORTA, () => {
  console.log(`Servidor iniciado com sucesso: http://localhost:${PORTA}`);
});
