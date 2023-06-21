const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

// Configuração do servidor Express
const app = express();
app.use(cors()); 
app.use(express.json()); 


// Configurações de conexão com o banco de dados
const db = mysql.createConnection({
  host: 'containers-us-west-64.railway.app',
  user:  'root',
  password: '26IfCsi5IXU0WvDtdIEd',
  database: 'railway',
  port: '5564'
});

// Verifica se a conexão foi estabelecida com sucesso
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão bem-sucedida com o banco de dados!');
  }
});


// Rotas

// Inicia o servidor
app.listen(5564, () => {
  console.log('Servidor ouvindo na porta 5564');
});
