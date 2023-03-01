const express = require('express');
const sql = require('mssql');

const app = express();

const config = {
  user: 'sa',
  password: 'Tigersoft1998',
  server: '192.168.1.214',
  database: 'NBUHR',
  // options: {
  //   encrypt: true // for Azure
  // }
};

app.get('/api/data', function (req, res) {
  sql.connect(config, function (err) {
    if (err) console.log(err);
    const request = new sql.Request();
    request.query('SELECT * FROM dbo_ZFP_Person', function (err, recordset) {
        if (err) console.log(err)
        // const jsonResult = JSON.stringify(recordset);
        // res.send(jsonResult);
    });
  });
});

const server = app.listen(3000, function () {
    console.log('Server is running..');
});
