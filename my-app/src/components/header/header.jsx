import "./header.css";

function Header(props) {
  return (
    <div>
      <header
        class="header"
        style={{
          backgroundImage: `url(${props.bg})`,
          minHeight: `${props.min}px`,
        }}
      >
        <div class="overlay"></div>
        <div class="header-content">
          <h1 class="header-title animate__animated animate__fadeIn">
            {props.wText}<span style={{ color: "#FF5F00" }} class="">{props.oText}</span>
          </h1>

          {props.children}
        </div>
      </header>
    </div>
  );
}

export default Header;
