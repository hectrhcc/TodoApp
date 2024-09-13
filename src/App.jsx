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
    <header  >
    <img src={desktopdark} className='w-full relative bottom-24 xs:hidden md:inline md:bottom-48 lg:bottom-24'/>
    <img src={mobilelight} className='w-full h-full mt-10 relative bottom-20  xs:inline md:hidden md:hidden lg:hidden md:bottom-48'/>
    <div className='flex flex-row justify-between h-10 relative bottom-32 xs:bottom-60  '>
    <div><h1 className="text-white text-3xl font-bold  w-full xs:ml-4 tracking-widest">
    T O D O   
    </h1>
    </div>
    <div>
    <img src={iconmoon}  className='inline pr-6'/>
    </div>
    </div>
    <div className='bg-white border w-1/3 mx-auto mb-6 p-3 rounded md:w-1/2 lg:w-1/3 xs:w-11/12   z-10 relative bottom-52 mb-8'>
    <input type="radio" id="opt1" name="opt1" value="opt1"  className='ml-2' />
    <input placeholder=' Create a new todo...' className='xs:text-xs bg-white ml-2 font-semibold'/> 
    </div>
    </header>

    <main className='z-10 relative bottom-56 '>
    <div className='bg-white border-t border-l flex items-center h-16 border-r  w-1/3 mx-auto p-3 rounded-t md:w-1/2 lg:w-1/3 xs:w-11/12'>
    <input type="radio" id="opt2" name="opt2" value="opt2" className='ml-2'/>
    <label for="option2"  className='ml-2  xs:text-xs text-gray-600 font-semibold'>Complete online JavaScript course</label>
    </div>
    <div className='border-l border-t border-r flex items-center  h-16 w-1/3 mx-auto p-3 md:w-1/2 lg:w-1/3 xs:w-11/12'>
    <input type="radio" id="opt3" name="opt3" value="opt3"  className='ml-2 '/>
    <label for="option3" className='ml-2 xs:text-xs text-gray-600 font-semibold'>Jag around the park 3x</label>
    </div>
    <div className='border-l border-r border-t flex items-center  h-16 w-1/3 mx-auto p-3 md:w-1/2 lg:w-1/3 xs:w-11/12'>
    <input type="radio" id="opt4" name="opt4" value="opt4" className='ml-2 '/>
    <label for="option4" className='ml-2 xs:text-xs text-gray-600 font-semibold' >10 minutes meditation</label>
    </div>
    <div className='border-l border-r border-t flex items-center  h-16 w-1/3 mx-auto p-3 md:w-1/2 lg:w-1/3 xs:w-11/12'>
    <input type="radio" id="opt5" name="opt5" value="opt5" className='ml-2 '/>
    <label for="option5" className='ml-2 xs:text-xs text-gray-600 font-semibold'>Read for 1 hour </label>
    </div>
    <div className='border-l border-r border-t flex items-center  h-16   w-1/3 mx-auto p-3 md:w-1/2 lg:w-1/3 xs:w-11/12'>
    <input type="radio" id="opt6" name="opt6" value="opt6" className='ml-2 '/>
    <label for="option6" className='ml-2 xs:text-xs text-gray-600 font-semibold'>Pick up groceries</label>
    </div>
    <div className='border-l border-r border-t flex items-center  h-16  w-1/3 mx-auto p-3 md:w-1/2 lg:w-1/3 xs:w-11/12'>
    <input type="radio" id="opt7" name="opt7" value="opt7" className='ml-2 '/>
    <label for="option7" className='ml-2 xs:text-xs text-gray-600 font-semibold' >Complete Todo App on Frontend Mentor</label>
    </div>
    <div className='flex justify-between items-center h-10 flex-row  xs:text-xs border h-16  w-1/3 mx-auto p-3 rounded-b md:w-1/2 lg:w-1/3 xs:w-11/12 '>
        <div className='ml-1 text-gray-400 font-medium'>{/* Add dynamic number */} items left</div>
            <span className='xs:hidden md:inline lg:inline text-gray-500 '> All</span>
            <span className='xs:hidden md:inline lg:inline text-gray-500 '>Active </span>
            <span className='xs:hidden md:inline lg:inline text-gray-500 '>Completed</span>
        <div className='ml-1 text-gray-400 font-medium'>Clear Completed</div>
           
        
      </div>
    <div className='border mt-4  w-1/3 mx-auto text-center p-3 rounded md:w-1/2 lg:w-1/3 xs:w-11/12 lg:hidden md:hidden'>
    
    <label  className=' font-semibold text-gray-500' >
             
    <span className='m-4 text-base'>All</span>
    <span className='m-4 text-base'>Active</span>
    <span className='m-4 text-base'>Completed</span>
    </label>
      </div>
    

    
    <p className="text-center relative top-14 mb-4 text-base text-gray-400 font-semibold">
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
