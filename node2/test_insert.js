var db_connect = require(__dirname+'/db/db_connect');
var db_sql = require(__dirname+'/db/db_sql');


conn = db_connect.getConnection();

let id = 'id04';
let pwd = 'pwd04';
let name = '이말숙';
let acc = '1231312312313131';

let values = [id,pwd,name,acc];

conn.query(db_sql.cust_insert, values, (e, result, fields) => {
    if(e){
        console.log('Insert Error');
        console.log('Error Message:')+e;
    }else{
        console.log('Insert OK !');
    }
    db_connect.close(conn);
});