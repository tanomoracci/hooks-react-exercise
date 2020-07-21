import React, { useState } from "react";

function Counter() {
  // Declares a new state variable, which we will call "count"
  // Declares a setCount function that allows you to modify the count value
  const[count, setCount] = useState(0);

  function HandleChange(e){
    setCount(e.target.value);

  }

  return (
    <div>
      <p>The counter is at : {count} </p>
      <br></br>
      <label>
      Set start value of the counter 
    
      <input type="number" onChange={HandleChange}/>
      
      </label>
      <br></br>
      <br></br>
      <button onClick={() => setCount(count + 1)}>>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>>
        -1
      </button>
    </div>
  );
}

export default Counter;
