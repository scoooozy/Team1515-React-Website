import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar/Navbar.jsx"
import Maincontent from "./Maincontent/Maincontent.jsx"
import "../src/Maincontent/Maincontent.css"

function Footer(){
  return(
    <footer> 
      <h3>2022 Scoozy development, All rights reserved </h3>
    </footer>
  )
}
function App(){
  return(
    <div className='wrapper '>
      <section className='bg'>
      <Navbar/>
        <Maincontent/>
      </section>


        <Footer/>
    </div>
    
  )
}
const page = (
  <body>
      <App/>
  </body>
  
  )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  page
);



