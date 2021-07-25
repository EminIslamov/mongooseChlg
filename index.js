const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json())
app.use(require('./routes/students.route'))

mongoose
  .connect("mongodb+srv://into:code@cluster0.peqll.mongodb.net/students", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log("успех"))
  .catch(() => console.log("провал"));

app.listen(4000, () => {
  console.log("Сервер запущен успешно");
});
