import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
//import Login from './Components/Authentication/Login'
//import Header from './Components/Statistics/HeaderComponent';
import './App.css';

const App = () => {
    return(
      <div className='flex flex-col bg-red-600 w-full h-full items-center justify-items-start'>
        <div className='flex flex-row h-10 w-full bg-red-500 items-center justify-start'>
          Header
        </div>
       <div className='flex flex-row w-full h-screen bg-gray-500 items-start justify-start'>
        <div className='flex flex-col w-1/3 h-full bg-orange-500 '>
       <NavLink to="/Home">Go to Home page</NavLink>
       <br />
       <NavLink to="/Login">Go to Login page</NavLink>
       </div>
       <div className='flex flex-col w-5/6 h-full bg-amber-500'>
        Main Content
        <form className='flex flex-col'>
          <input type='text' placeholder='Enter something...'/>
          <input type='text' placeholder='Enter something else...'/>
          <input type='password'placeholder='Something'/>
          <input type='submit'/> 
        </form>
        </div>
       </div> 
       <div className='flex flex-row w-full h-20 bg-green-600' >Footer</div>       
      </div>
    );
  };

export default App;
