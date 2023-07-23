const mongoose = require('mongoose');
mongoose.Promise = global.Promise

main().catch(error => console.log(error));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todo-list');
  try {
    console.log("Conectado ao banco de dados MongoDB")
  } catch (error) {
    console.log("Falha ao se conectar ao banco de dados MongoDB")
  }
}

module.exports = mongoose