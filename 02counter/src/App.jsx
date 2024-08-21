import { useState } from 'react'
import './App.css'

function App() {
  let[counter,setCounter]= useState(15)


  // let counter=5
  const addValue=()=>{
    console.log("clicked",counter)
    //counter=counter+1  //in UI the value is not updated so we use hooks
    setCounter(counter+1)
  }

  const removeValue=()=>{
    setCounter(counter-1)
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value : {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button><br />
    <button onClick={removeValue}>Remove Valuee {counter}</button>
    <p> Footer: {counter}</p>
    </>
  )
}

export default App
