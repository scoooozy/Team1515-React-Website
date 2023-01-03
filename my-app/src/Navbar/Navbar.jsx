
import "./navbar.css"

function ColorSchemesExample() {
  return (
    <nav className="page-navbar" data-spy="affix" data-offset-top="10">
    <ul class="nav-navbar container">
        <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
        <li class="nav-item"><a href="index.html" class="nav-link"><img src="./images/logo.png" alt="lol" className='logo'/> </a></li>
        <li class="nav-item"><a href="sponsors.html" class="nav-link">Sponsors</a></li>
        <li class="nav-item search">
            <a href="https://www.bhef.org/apps/form/bhhsrobotics" target="_blank" class="nav-link search-toggle"><i class="ti-search"></i> Donate</a>
            
        </li>
    </ul>
  </nav>
  );
}

export default ColorSchemesExample;