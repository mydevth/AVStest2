const odbc = require('odbc');


const connectionString = 'Driver={SQL Server};Server=192.168.1.214;Database=NBUHR;Uid=sa;Pwd=Tigersoft1998;';

odbc.connect(connectionString, (error, connection) => {
    if (error) {
      console.error(error);
      return;
    }
  
    connection.query('SELECT * FROM dbo_ZFP_Person', (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
      
        // Display the results
        console.log(results);
      });
      connection.close((error) => {
        if (error) {
          console.error(error);
          return;
        }
      
        console.log('Connection closed');
      });
      
  });
  


  