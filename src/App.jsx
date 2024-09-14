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

  let arr=['a','b','c']; //arreglo de frases del todo

  const [Mode, setMode] = useState(false)

  const handleClick = () => {
    setMode(!Mode)
  }

  useEffect(() => {
    if(Mode){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [Mode])
  
  const [texto, setTexto] = useState('')

  function cambioTexto(e) {
    setTexto(e.target.value)
  }

  function handleKeyPress(e){
    if (e.keyCode === 13) {
      handleEnter();
    }
  }

  function  handleEnter(){
    arr.push(texto)
  }

  return (
    <body className='bg-gray-100 text-lightTheme-darkGrayishBlue dark:bg-darkTheme-veryDarkBlue dark:text-darkTheme-lightGrayishBlue  transition-colors duration-300'>  
    <header>
    <img src={desktoplight} className='w-full relative bottom-24 mt-24 xs:hidden md:inline md:bottom-48 lg:bottom-24 md:mt-48 lg:mt-24 '/>
    
    <img src={mobilelight} className='w-full h-full mt-20 relative bottom-20  xs:inline md:hidden md:hidden lg:hidden md:bottom-48 '/>
    <div className=' lg:w-1/3 md:w-1/2 md:mx-auto  lg:mx-auto flex flex-row xs:justify-between h-10 relative bottom-84  lg:bottom-80 md:bottom-80 xs:bottom-60 '>
    <div><h1 className=" p-0 lg:m-0 md:m-0 text-white lg:text-4xl text-3xl font-bold  w-full xs:ml-4 tracking-widest">
    T O D O   
    </h1>
    </div>
    <div>
    <img src={iconmoon}  className='inline xs:pr-6 lg:p-0 md:p-0 ' onClick={handleClick}/>
    

    </div>
    </div>
    <div className='bg-white dark:bg-darkTheme-veryDarkDesaturatedBlue border-none lg:bottom-72 md:bottom-64 bg-lightTheme-veryLightGray  w-1/3 mx-auto lg:mb-6 p-3 rounded md:w-1/2 lg:w-1/3 xs:w-11/12 z-10 relative bottom-52 mb-8'>
    <div className='ml-2 border rounded-full h-5 w-5 dark:border-gray-700' ></div>
    <input type='text' placeholder=' Create a new todo...' value={texto} onChange={cambioTexto} className='dark:bg-darkTheme-veryDarkDesaturatedBlue lg:text-lg xs:text-xs bg-white ml-2 font-semibold lg:ml-8 relative bottom-5 '/> 
    
    </div>
    </header>

    <main className='dark:bg-darkTheme-veryDarkBlue border-none z-10 relative bottom-56 lg:bottom-72 md:bottom-72'>
  
  {
    arr.map( (lista,indice)=>{
    return(
      <div className=' bg-white dark:bg-darkTheme-veryDarkDesaturatedBlue  border-b border-lightGrayishBlue dark:border-gray-600 bg-lightTheme-veryLightGray  flex items-center h-16   w-1/3 mx-auto p-3 rounded-t md:w-1/2 lg:w-1/3 xs:w-11/12'>
      <div className='ml-2 border rounded-full h-5 w-5 dark:border-gray-700 bg-check-gradient' ><img src={iconcheck} className='mx-auto relative top-1.5 w-1/2 '/></div>  
      <ul className="list-none">
    <li key={indice} className=' text-darkTheme-darkGrayishBlue  dark:text-lightTheme-darkGrayishBlue ml-2  lg:text-lg xs:text-xs  font-semibold lg:ml-4  relative top-1'>
    {lista}</li>
    </ul>
    </div>
    );
})
}
    

    

    <div className='bg-white dark:bg-darkTheme-veryDarkDesaturatedBlue border-none   border-lightGrayishBlue bg-lightTheme-veryLightGray flex justify-between items-center h-10 flex-row  xs:text-xs lg:text-base h-16  w-1/3 mx-auto p-3 rounded-b md:w-1/2 lg:w-1/3 xs:w-11/12 '>
        <div className='ml-1 text-gray-400 font-medium'>{/* Add dynamic number */} items left</div>
            <span className='xs:hidden md:inline lg:inline text-gray-500 '> All</span>
            <span className='xs:hidden md:inline lg:inline text-gray-500 '>Active </span>
            <span className='xs:hidden md:inline lg:inline text-gray-500 '>Completed</span>
        <div className='ml-1 text-gray-400 font-medium mr-2'>Clear Completed</div>
               
      </div>
    <div className='bg-white dark:bg-darkTheme-veryDarkDesaturatedBlue bg-lightTheme-veryLightGray border  w-1/3 mx-auto text-center p-3 rounded md:w-1/2 lg:w-1/3 relative xs:top-6 border-none xs:w-11/12 lg:hidden md:hidden'>
    
    <label  className=' font-semibold text-lightTheme-darkGrayishBlue' >
             
    <span className='m-4 text-base'>All</span>
    <span className='m-4 text-base'>Active</span>
    <span className='m-4 text-base'>Completed</span>
    </label>
      </div>
    

    
    <p className="dark:bg-darkTheme-veryDarkBlue dark:text-gray-600  text-gray-400 text-center relative top-14 mb-4 text-base font-semibold">
             Drag and drop to reorder list
    </p>
    </main>
      
 <footer className="dark:bg-darkTheme-veryDarkBlue">
<div class="attribution dark:bg-darkTheme-veryDarkBlue">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="nofollow noopener noreferrer">Frontend Mentor</a>. 
  Coded by <a href="https://github.com/hectrhcc" target='_blank' rel="nofollow noopener noreferrer" >Hectrhcc</a>.
</div>
</footer>
    </body>
  )
}

export default App

