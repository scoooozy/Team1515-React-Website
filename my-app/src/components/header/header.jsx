import "./header.css";

function Header(props) {
  return (
    <div>
      <header
        class="header"
        style={{
          backgroundImage: `url(${props.bg})`,
        }}
      >
        <div class="overlay"></div>
        <div class="header-content">
          <h1 class="header-title animate__animated animate__fadeIn">
            MOR
            <span style={{ color: "#FF5F00" }} class="">
              TORQ
            </span>
          </h1>

          {props.children}
        </div>
      </header>
    </div>
  );
}

export default Header;
