
import "./navbar.css"
import pic from "../images/MorTorq.png"

let hamburger = document.querySelector(".hamburger")
hamburger.onclick = ()=>{
    navBar = document.querySelector(".nav-bar")
    navBar.classList.toggle("active")
}
function ColorSchemesExample() {
  return (
    <header>
    <div class="logo"><img src={pic} alt=""></div>
    <div class="hamburger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
    <nav class="nav-bar">
        <ul>
            <li><a href="#" class="active">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Sponsors</a></li>
            <li><a href="#">Donate</a></li>

        </ul>
    </nav>
</header>
  )
}

export default ColorSchemesExample;