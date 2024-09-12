import { useState } from 'react'
import iconcheck from './assets/icon-check.svg'
import iconcross from './assets/icon-cross.svg'
import iconmoon from './assets/icon-moon.svg'
import iconsun from './assets/icon-sun.svg'
import desktopdark from '../images/bg-desktop-dark.jpg'
import desktoplight from '../images/bg-desktop-light.jpg'
import mobiledark from '../images/bg-mobile-dark.jpg'
import mobilelight from '../images/bg-mobile-light.jpg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <header >
    <img src={desktopdark} className='w-full'/>
    <div className='flex flex-row border relative bottom-20'>
    <h1 className="text-white text-3xl font-bold  ">
    TODO   
    <img src={iconsun}  className='inline'/>
    </h1>
    </div>
    <div className='border w-1/3 mx-auto mb-6 p-2 rounded '>
    <input type="radio" id="opt1" name="opt1" value="opt1"/>
    <label for="option1" className='ml-2'> Currently typing</label>
    </div>
    </header>

    <main>
    
    <div className='border  w-1/3 mx-auto p-2 rounded-t'>
    <input type="radio" id="opt2" name="opt2" value="opt2" />
    <label for="option2"  className='ml-4'>Complete online JavaScript course</label>
    </div>
    <div className='border-l border-t border-r w-1/3 mx-auto p-2'>
    <input type="radio" id="opt3" name="opt3" value="opt3"/>
    <label for="option3" className='ml-4'>Jag around the park 3x</label>
    </div>
    <div className='border-l border-r border-t w-1/3 mx-auto p-2 '>
    <input type="radio" id="opt4" name="opt4" value="opt4"/>
    <label for="option4" className='ml-4' >10 minutes meditation</label>
    </div>
    <div className='border w-1/3 mx-auto p-2 '>
    <input type="radio" id="opt5" name="opt5" value="opt5"/>
    <label for="option5" className='ml-4'>Read for 1 hour </label>
    </div>
    <div className='border w-1/3 mx-auto p-2 '>
    <input type="radio" id="opt6" name="opt6" value="opt6"/>
    <label for="option6" className='ml-4'>Pick up groceries</label>
    </div>
    <div className='border  w-1/3 mx-auto p-2 '>
    <input type="radio" id="opt7" name="opt7" value="opt7"/>
    <label for="option7" className='ml-4' >Complete Todo App on Frontend Mentor</label>
    </div>
    <div className='border  w-1/3 mx-auto p-2 rounded-b'>
    
    <label  className='ml-1' >{/* Add dynamic number */} items left
             
             All
             Active 
             Completed
             
             Clear Completed
             </label>
             </div>

    

    
    <p className="text-center mt-8 mb-4 text-sm">
             
  

             
             
             Drag and drop to reorder list
             
                   </p>
    </main>
      
 <footer>
<div class="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="nofollow noopener noreferrer">Frontend Mentor</a>. 
  Coded by <a href="https://github.com/hectrhcc" target='_blank' rel="nofollow noopener noreferrer" >Hectrhcc</a>.
</div>
</footer>
    </>
  )
}

export default App
