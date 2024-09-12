import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-red-500 text-3xl font-bold underline">
      Hello world!
    </h1>
      <p className="read-the-docs">
             
  Todo

{/* Add dynamic number */} items left

All
Active 
Completed

Clear Completed

Drag and drop to reorder list

      </p>
 
<div class="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="nofollow noopener noreferrer">Frontend Mentor</a>. 
  Coded by <a href="https://github.com/hectrhcc" target='_blank' rel="nofollow noopener noreferrer" >Hectrhcc</a>.
</div>
    </>
  )
}

export default App
