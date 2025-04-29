import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let books = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home", { books });
});

app.get("/books/new", (req, res) => {
  res.render("new");
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;
  const id = Date.now().toString();
  books.push({ id, title, author });
  res.redirect("/");
});

app.get("/books/edit/:id", (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  res.render("edit", { book });
});

app.post("/books/edit/:id", (req, res) => {
  const { title, author } = req.body;
  const book = books.find(b => b.id === req.params.id);
  if (book) {
    book.title = title;
    book.author = author;
  }
  res.redirect("/");
});

app.post("/books/delete/:id", (req, res) => {
  books = books.filter(b => b.id !== req.params.id);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server işläp dur: http://localhost:${PORT}`);
});
