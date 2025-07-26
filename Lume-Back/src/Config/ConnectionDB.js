const mysql = require('mysql2'); // importa a blibioteca mysql2
require('dotenv').config(); // carrega as variáveis de ambiente do arquivo .env

const pool = mysql.createPool({ // cria um pool de conexões com o banco de dados
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise(); // exporta o pool de conexões como uma promessa para uso em outras partes do aplicativo