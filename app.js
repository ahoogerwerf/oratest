    // app.js  
      
    var oracledb = require('oracledb');  
      

    oracledb.getConnection({  
         user: "plyfin",  
         password: "basketball",  
         connectString: "pprd_plyfin"  
    }, function(err, connection) {  
         if (err) {  
              console.error(err.message);  
              return;  
         }  
         connection.execute( "SELECT PRODUCT_GROUP FROM PRODUCT_GROUPS",  
         [],  
         function(err, result) {  
              if (err) {  
                   console.error(err.message);  
                   doRelease(connection);  
                   return;  
              }  
              console.log(result.metaData);  
              console.log(result.rows);  
              doRelease(connection);  
         });  
    });  
      
    function doRelease(connection) {  
         connection.release(  
              function(err) {  
                   if (err) {console.error(err.message);}  
              }  
         );  
    }  

 