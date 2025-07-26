require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const express = require('express'); // Importa o Express
const app = express(); // Cria uma instância do Express
const db = require('./Config/ConnectionDB'); // Importa o pool de conexões do banco de dados
const port = process.env.PORT || 3000; // Define a porta do servidor, padrão é 3000


app.use(express.json()); //  Middleware para analisar JSON no corpo das requisições


// Testa a conexão com o banco de dados ao iniciar o servidor
(async () => {
  try {
    await db.query('SELECT 1'); // <--- use query()
    console.log('✅ Conexão com o banco bem-sucedida');
  } catch (err) {
    console.error('❌ Erro ao conectar com o banco:', err);
  }
})();


// Rota de teste para verificar se o servidor está funcionando
app.get('/teste', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM teste_conexao');
    res.json(rows); // Retorna os dados da tabela
  } catch (err) {
    console.error('Erro ao buscar dados da tabela:', err);
    res.status(500).send('Erro no servidor');
  }
});

app.get('/ping', (req, res) => {
  res.send('pong');
});



app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`); // Log para indicar que o servidor está rodando
}); // Inicia o servidor na porta definida
