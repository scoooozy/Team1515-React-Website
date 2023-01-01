import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';




function App(){
  return (
    
    
    <div>
      <img src='images/react-logo.png' alt="BigCo Inc. logo" className='logo'/>
      <h1>Hello World</h1>
      <h3>Fun Facts about React</h3>
      <ul>
        <li>Was First released in 2013</li>
        <li>Was orginally created by Jordan Walke </li>
        <li>Has well over 100k stars on github</li>
        <li>is maintained by Facebook</li>
        <li>Powers thousands of enteprise apps; including apps</li>

      </ul>
    </div>
      

  )
}
let page = (
  <div>

    <App/>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  page
);

