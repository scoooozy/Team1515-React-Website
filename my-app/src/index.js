import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar/Navbar.jsx"
import Maincontent from "./Maincontent/Maincontent.jsx"
import "../src/Maincontent/Maincontent.css"
import Footer from './Footer/Footer';
import Header from './header/header';

function App(){
  return(
    <div className='wrapper '>
        <Navbar />
        <Header/>
        <Maincontent/>  
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



