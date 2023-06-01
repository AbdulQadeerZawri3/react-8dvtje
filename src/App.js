import React, {useState} from "react";
import "./style.css";

export default function App() {
  const [temp, controllTemp] = useState(0)
  


  const getBackgroundColour = () => {
    if( temp<=0 ) {
      return 'lightblue';
    }else if( temp <= 15){
      return 'lightgreen';
    }else {
      return 'red';
    }
  } 
  
  
  
  
  
  
  return (
    <div className="temCont">
     <div className= "numBox" style= {{backgroundColor: getBackgroundColour() }}> <span className= "tempValue" >{temp} °C </span> </div>
    <div className= "boxes"> 
     <button className= "box1" onClick= {() => controllTemp(temp + 1)}> + </button>
     <button className= "box2" onClick = {() => controllTemp(temp - 1)}> - </button>
     </div>
    </div>

  );
}
