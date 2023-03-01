const express = require('express');
const app = express();              
const router = express.Router()
const odbc = require('odbc');
const port = 5000;                  

router.get('/',(req,res)=>{
    res.send("<h1>AkkadateV2 อัครเดช</h1>")
})

router.get('/avs',(req,res)=>{
    const connectionString = "Driver=;";
    const sql = "SELECT * FROM VIEWOFFICER";
    async function connect() {
        try {
          const connection = await odbc.connect(connectionString);
          const result = await connection.query(sql);
          const resultJSON = JSON.stringify(result);
          console.log(result)
            // res.setHeader('Content-Type' , 'application/json; charset=UTF-8');
            res.end(resultJSON);
        } catch (error) {
          console.error(error);
        }
      }
      connect()
})

app.use(router)

app.listen(port, () => {           
    console.log(`Now listening on port ${port}`); 
});
