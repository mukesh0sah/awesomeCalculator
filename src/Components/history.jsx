import React, { useEffect, useState } from 'react';
import { BiHistory } from "react-icons/bi";
import axios from 'axios';
// import {history} from './persist'

function History() {
  const [showDescription, setShowDescription] = useState(false);
  let [data,setData]=useState()
  let [show,setShow]=useState(0)

  
  const history=async()=>{
    await axios.get('http://localhost:5000/history')
    .then((res)=>{console.log(res.data)
    setData(res.data)
    })
    .catch((err)=>{console.log(err)})
}


  const toggleDescription = () => {
    setShowDescription(!showDescription);
    setShow(true)
  };

  useEffect(()=>{
    history()
    if(data){
      console.log(data[0].Equation)
    }
  
  },[show])


  return (
    <div className='history'>
      <button onClick={toggleDescription} className="icon-button">
        <BiHistory className="historyIcon" /> 
      </button>
      {showDescription && show && (
       <>
        <div id = 'div2'>
        <table>
          <thead>
            <tr>
              <th><h2>Equation</h2></th>
              <th><h2>Result</h2></th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr key={data.serialNumber}>
                <td>{data.Equation}</td>
                <td>{data.result}</td>
              </tr>
  ))
  }
</tbody>
</table>
</div>
       </>
      )}
    </div>
  );
}

export default History;
