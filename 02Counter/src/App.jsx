import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)


  let addButtonDisabled = false
  let removeButtonDisabled = false


  if(counter === 20 )   
    addButtonDisabled = true
  
  else if(counter === 0)  
    removeButtonDisabled = true
  
  else{
    addButtonDisabled = false
    removeButtonDisabled = false
  }
  
  const inc_counter = () => {
    setCounter(counter+1)
  }

  const dec_counter = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter : {counter}</h2>
      <button
       onClick={inc_counter}  disabled = {addButtonDisabled}

      >
        Increase Counter: {counter} 
      </button>
      
      <button  
      onClick={dec_counter}   disabled = {removeButtonDisabled}
      >
        Decrease Counter: {counter}
      </button>
    </>
  )
}

export default App
