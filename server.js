const express =require('express')
const app = express();
const bodyParser = require('body-parser');
const cors=require('cors')


app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
const mysql= require('mysql')


const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database: 'calculator',
    connectionLimit:5
});


app.get('/',(req,res)=>{
    res.send('hello backend')
})

app.post('/persist',(req,res)=>{
    const {Equation, result}=req.body    
    pool.query('insert into calc(Equation, result) values(?,?)',[Equation,result],(error)=>{
        if(error){
            console.error(error)
            return
        }
    })
})


app.get('/history', (req, res) => {
    let query=`SELECT * FROM calc order by serialNumber desc limit 5`   
    pool.query(query,(err,answer)=>{ 
        if(err){
            console.log(err)
        } 
        else if(answer){ 
            console.log(answer)
            res.status(200).send(answer)
        }
    })
    });



app.listen(5000,()=>{
    console.log('server is running on port 5000')
})