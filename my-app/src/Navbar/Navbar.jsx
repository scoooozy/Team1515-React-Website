
import "./navbar.css"
import pic from "../images/MorTorq.png"

function ColorSchemesExample() {
  return (
    <header class="nav-header">
      <h3 class="name">Mor<span class="torq">Torq</span></h3>
      
<nav>
    <ul class="nav-links">
        <li class="li"><a href="http://" target="_blank" rel="noopener noreferrer">Home</a></li>
        <li class="li"><a href="http://" target="_blank" rel="noopener noreferrer">About</a></li>
        <li class="li"><a href="http://" target="_blank" rel="noopener noreferrer">Sponsors</a></li>
        <li class="li"><a href="http://" target="_blank" rel="noopener noreferrer">Donate</a></li>
    </ul>
</nav>
  <img src={pic} alt="logo" class="logo" />
</header>
  )
}

export default ColorSchemesExample;