
import axios from "axios";
// let [data,setData]=useState()

export default function persist(calc, result){
    axios.post('http://localhost:5000/persist', {Equation:calc,result:result})
    .then(response =>{
      console.log(response.data)
    })
    .catch(error=>{
      console.error(error)
    });
}



