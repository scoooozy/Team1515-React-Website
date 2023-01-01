import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
function Header(){
  return(
    <header>
      <nav>
        <img src='images/logo512.png' alt='logo'/>
        <h2 className='htext'>Scoozy's website</h2>
      </nav>
    </header>
  )
}
function Footer(){
  return(
    <footer> 
      <h3>2022 Scoozy development, All rights reserved </h3>
    </footer>
  )
}

function Ex(){
  return(
    <h1>Really Good content </h1>
  )
}
function App(){
  return(
    <div>
      <Header/>
        {/* <img src="images/logo512.png" width="40px" alt='hi' />
        <h1>Fun facts about React</h1> */}
        <Ex/>
        {/* <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul> */}
        <Footer/>
    </div>
    
  )
}
const page = (
  
  <App/>
  
  )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  page
);



