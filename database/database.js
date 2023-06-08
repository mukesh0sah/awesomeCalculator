const mysql= require('mysql')

const pool=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'calculator'
})
pool.connect(function(err)
{
    if(err) throw err;
    console.log("connected")
    pool.query('select result from finalResult',(err, res)=>{
        return console.log(res)
    })

    pool.query('insert into calc(Equation) values("2-2+2")')
})


