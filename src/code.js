import React from 'react';
import { NavLink } from 'react-router-dom';


 const App = () => {
  return (
    <div className='flex flex-col w-full h-screen items-center'>
      <div>MY APP</div>
      <div>
     <NavLink to="/Home">Go to Home page</NavLink>
     <NavLink to="/Login">Go to Login page</NavLink>
     </div>
    </div>
  );
};

export default App