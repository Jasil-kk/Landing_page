import React, { useState } from 'react'
import "./Counter.css"

const Counter = () => {
    const [count,setCount] = useState(0);
    console.log("count:",count);
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        if(count > 0) {
        setCount(count-1)
        }
    }
    function reset(){
        setCount(0)
    }
  return (
    <div className='main-body'>
     <div className="content">
     <h1>Counter</h1>
     <h2>{count}</h2>
     <button onClick={decrement} className="btn decrease">decrease</button>
     <button onClick={reset} className='btn'>Reset</button>
     <button onClick={increment} className="btn increase">increase</button>
   </div>
   </div>
  )
}

export default Counter