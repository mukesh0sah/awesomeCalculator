import React from "react";
import { useState } from "react";
import Custom from "./Customize";
import History from "./history";


import persist from "./persist.jsx";



const ops = ["+", "-", "*", "/", "."];

const digit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const sceintific = ["%", "√", "x²", "1/x"];



export default function Calculator() {
  const [calc, setCalc] = useState("");
  var result;

  const updateCalc = (value) => {
    setCalc(calc + value);
  };
 
  const calculate = () => {
    if (ops.includes(calc.slice(-1))) {
      return;
    }
    const calc1 = eval(calc)
    setCalc(calc1)
    // setCalc(eval(calc).toString());
    result=calc1
    console.log(calc)
    console.log(result)
    persist(calc, result);
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const clearScreen = () => {
    setCalc("");
  
  };

  const percentage = (calc, i) => {
    let d;
    let arr;
    let a;
    let b;
    switch (i) {
      case "%":
        arr = calc.split("*");
        a = arr[0];
        b = arr[1];
        let c = b / 100;
        d = a * c;
        break;
      case "√":
        arr = calc.split("√");
        a = arr[0];
        d = Math.sqrt(a);
        break;
      case "x²":
        arr = calc.split("*");
        a = arr[0];
        d = a * a;
        break;
      case "1/x":
        arr = calc.split("1/x");
        a = arr[0];
        d = 1 / a;
        break;
      default:
        break;
    }
    setCalc(d);
    result =d;
    persist(calc,result)
 
  };

  return (
    <>
      <div className="App">
        <div className="calculator" >
        <History></History>
          <img
            src="https://www.msg-global.com/images/msg-global/og_image.png" alt="Logo"
            width="80px"
          />

          
          <Custom></Custom> 
          
       
          
         
        
          
          <div className="display">
            <button id="clear" onClick={clearScreen}>
              CE
            </button>         
            {calc || "0"}
          </div>
          <div className="button">
            <div className="operator">
              {ops.map((i) => (
                <button onClick={() => updateCalc(i)}>{i}</button>
              ))}
              
              <button onClick={deleteLast}>DEL</button>
            </div>
            <div className="digit">
              {digit.map((i) => (
                <button onClick={() => updateCalc(i)}>{i}</button>
              ))}

              <button onClick={() => updateCalc(".")}>.</button>
              <button onClick={calculate}>=</button>
            </div>
            <div className="sceintific">
              {sceintific.map((i) => (
                <button
                  onClick={() => {
                    percentage(calc, i);
                  }}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>
          <h6>Project by Rayyan & Mukesh</h6>
        </div>
      </div>
 

    </>
  );
}
