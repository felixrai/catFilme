const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'viaduct.proxy.rlwy.net',
  user: 'root',
  password: 'gyChuckdNTFedTmWIDPVCLfXsKhOrHXK',
  database: 'railway',
  port: 25937
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ', err);
    return;
  }
  console.log('Conexão com o banco de dados MySQL estabelecida.');
});

module.exports = connection;