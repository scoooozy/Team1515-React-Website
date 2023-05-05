import { useRef } from "react";
import "./header.css";




function Header(props) {

  return (
    <hero>
      <header class="header">
        <div class="overlay"></div>
        <div class="header-content">
          <h1 class="header-title animate__animated animate__fadeIn">
            MOR
            <span style={{ color: "#FF5F00" }} class="">
              TORQ
            </span>
          </h1>
          <p class="header-subtitle fade-in">
            Striving to inspire future generations to pursue careers in STEM and
            Entrepreneurship by encouraging inclusion, leadership, ingenuity and
            teamwork.
          </p>
            {props.children}
        </div>
      </header>
    </hero>
  );
}

export default Header;
