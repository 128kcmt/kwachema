import react from 'react';
import './home page.css';


 const Greet=() => {
    return(
        
      <body>  
        <header>
        <link rel="stylesheet" href="home page.css"></link>
        <input type="search" id="init" placeholder='Search bar...'></input>
        </header>
    
        <div class="navbar">
        <nav>
                <ul>
                <li><a href="#" id="home">Home</a></li>
                <li><a href="#" id="inbox">Inbox</a></li>
                <li><a href="#" id="listing">Listing</a></li>
                <li><a href="#" id="publish">Publish</a></li>
                </ul>         
            </nav>
        </div>
        
    
    <p>my name is cyrus and im a full stack developer</p>
    

</body>
    
    )

}
export default Greet