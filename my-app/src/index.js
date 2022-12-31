import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
function Navbar() {
  return(
      <nav>
          <h1>Pukan production</h1>
          <ul>
              <li>About</li>
              <li>Pricing</li>
              <li>Contact</li>
          </ul>
      </nav>
  )
}
function Container(){
  return(
      <div className="container">
          <div className="row">
              <div className="col">
              Hi Pukan
              </div>
              <div className="col">
              Hey segey
              </div>
          </div>
      </div>
  )
}
let page = (
  <div>
      <Navbar/>
      <Container/>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  page
);

