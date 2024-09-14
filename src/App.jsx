import { useState, useEffect } from "react"
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
  const [Mode, setMode] = useState(false)

  const handleClick = () => {
    setMode(!Mode)
  }

  useEffect(() => {
    if(Mode){
     
    } else {
      
    }
  }, [Mode])
  

  return (
    <body className='bg-lightTheme-veryLightGrayishBlue'>  
    <header>
    <img src={desktoplight} className='w-full relative bottom-24 mt-24 xs:hidden md:inline md:bottom-48 lg:bottom-24 md:mt-48 lg:mt-24 '/>
    
    <img src={mobilelight} className='w-full h-full mt-20 relative bottom-20  xs:inline md:hidden md:hidden lg:hidden md:bottom-48 '/>
    <div className=' lg:w-1/3 md:w-1/2 md:mx-auto  lg:mx-auto flex flex-row xs:justify-between h-10 relative bottom-84  lg:bottom-80 md:bottom-80 xs:bottom-60 '>
    <div><h1 className=" p-0 lg:m-0 md:m-0 text-white lg:text-4xl text-3xl font-bold  w-full xs:ml-4 tracking-widest">
    T O D O   
    </h1>
    </div>
    <div>
    <img src={iconmoon}  className='inline xs:pr-6 lg:p-0 md:p-0 '/>
    

    </div>
    </div>
    <div className='lg:bottom-72 md:bottom-64 bg-lightTheme-veryLightGray border w-1/3 mx-auto lg:mb-6 p-3 rounded md:w-1/2 lg:w-1/3 xs:w-11/12   z-10 relative bottom-52 mb-8'>
    <input type="radio" id="opt1" name="opt1" value="opt1"  className='ml-2' />
    <input placeholder=' Create a new todo...' className='lg:text-lg xs:text-xs bg-white ml-2 font-semibold'/> 
    </div>
    </header>

    <main className='z-10 relative bottom-56 lg:bottom-72 md:bottom-72'>
    <div className='bg-lightTheme-veryLightGray border-t border-l flex items-center h-16 border-r  w-1/3 mx-auto p-3 rounded-t md:w-1/2 lg:w-1/3 xs:w-11/12'>
    <input type="radio" id="opt2" name="opt2" value="opt2" className='ml-2'/>
    <label for="option2"  className='ml-2  lg:text-lg xs:text-xs text-gray-600 font-semibold'>Complete online JavaScript course</label>
    </div>
    <div className='bg-lightTheme-veryLightGray border-l border-t border-r flex items-center h-16 w-1/3 mx-auto p-3 md:w-1/2 lg:w-1/3 xs:w-11/12'>
    <input type="radio" id="opt3" name="opt3" value="opt3"  className='ml-2 '/>
    <label for="option3" className='ml-2 lg:text-lg xs:text-xs text-gray-600 font-semibold'>Jag around the park 3x</label>
    </div>
    <div className='bg-lightTheme-veryLightGray border-l border-r border-t flex items-center h-16 w-1/3 mx-auto p-3 md:w-1/2 lg:w-1/3 xs:w-11/12'>
    <input type="radio" id="opt4" name="opt4" value="opt4" className='ml-2 '/>
    <label for="option4" className='ml-2 lg:text-lg xs:text-xs text-gray-600 font-semibold' >10 minutes meditation</label>
    </div>
    <div className='bg-lightTheme-veryLightGray border-l border-r border-t flex items-center h-16 w-1/3 mx-auto p-3 md:w-1/2 lg:w-1/3 xs:w-11/12'>
    <input type="radio" id="opt5" name="opt5" value="opt5" className='ml-2 '/>
    <label for="option5" className='ml-2 lg:text-lg xs:text-xs text-gray-600 font-semibold'>Read for 1 hour </label>
    </div>
    <div className='bg-lightTheme-veryLightGray border-l border-r border-t flex items-center h-16  w-1/3 mx-auto p-3 md:w-1/2 lg:w-1/3 xs:w-11/12'>
    <input type="radio" id="opt6" name="opt6" value="opt6" className='ml-2 '/>
    <label for="option6" className='ml-2 lg:text-lg xs:text-xs text-gray-600 font-semibold'>Pick up groceries</label>
    </div>
    <div className='bg-lightTheme-veryLightGray border-l border-r border-t flex items-center  h-16  w-1/3 mx-auto p-3 md:w-1/2 lg:w-1/3 xs:w-11/12'>
    <input type="radio" id="opt7" name="opt7" value="opt7" className='ml-2 '/>
    <label for="option7" className='ml-2 lg:text-lg xs:text-xs text-gray-600 font-semibold' >Complete Todo App on Frontend Mentor</label>
    </div>
    <div className='bg-lightTheme-veryLightGray flex justify-between items-center h-10 flex-row  xs:text-xs lg:text-base border h-16  w-1/3 mx-auto p-3 rounded-b md:w-1/2 lg:w-1/3 xs:w-11/12 '>
        <div className='ml-1 text-gray-400 font-medium'>{/* Add dynamic number */} items left</div>
            <span className='xs:hidden md:inline lg:inline text-gray-500 '> All</span>
            <span className='xs:hidden md:inline lg:inline text-gray-500 '>Active </span>
            <span className='xs:hidden md:inline lg:inline text-gray-500 '>Completed</span>
        <div className='ml-1 text-gray-400 font-medium'>Clear Completed</div>
               
      </div>
    <div className='bg-lightTheme-veryLightGray border mt-4  w-1/3 mx-auto text-center p-3 rounded md:w-1/2 lg:w-1/3 xs:w-11/12 lg:hidden md:hidden'>
    
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
    </body>
  )
}

export default App
