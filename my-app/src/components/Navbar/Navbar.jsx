

import "./navbar.css"
import pic from "../images/MorTorq.png"

function Navbar() {
    
  return (
    <header className="nav-header">
          <div class="logo">
              <img src={pic} alt="logo" className="img"/>
    </div>
    <nav class="nav-bar">
        <ul>
            <li><a href="http://localhost:3000/" class="active">Home</a></li>
            <li><a href="http://localhost:3000/">About</a></li>
            <li><a href="http://localhost:3000/">Sponsors</a></li>
            <li><a href="http://localhost:3000/">Donate</a></li>

        </ul>
          </nav>
      </header>
      
  )
}

export default Navbar;