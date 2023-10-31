import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
 

function Counter() {
  let [count, setCount] = useState(0)
 const addvalue=()=>{
  setCount(count++);
  
 }
 const decreaseValue =()=>{
 setCount(count--);
 }
  return (

    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
     
       <h1>Counter:{count}</h1>
       <button onClick={addvalue}>Increase</button>
       <button onClick={decreaseValue }>Decrease</button>
       
    </div>
  )
}

export default Counter
