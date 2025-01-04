import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]  = useState(15) //this is a hook use to update UI in react here
  //counter default value will be 15 and we can update the value of counter by using setCounter 

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    setCounter(prevCounter => prevCounter + 1) // this will get the value of prevoius updated state
    setCounter(prevCounter => prevCounter + 1) // this will get the value of prevoius updated state
    setCounter(prevCounter => prevCounter + 1) // this will get the value of prevoius updated state
    setCounter(prevCounter => prevCounter + 1) // this will get the value of prevoius updated state
    
  } 

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  //in return we will only return 1 tag but here we have return so many this possible because we have
  //used fragment i.e <> </> this is one tag and in this we can pass any number of tags
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App