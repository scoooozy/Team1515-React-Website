import React, { useState, useEffect } from "react";

function Reveal(props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      let windowHeight = window.innerHeight;
      let elementTop = ref.current.getBoundingClientRect().top;
      let elementVisible = props.viewprop;

      if (elementTop < windowHeight - elementVisible) {
        setIsVisible(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ref = React.useRef(null);

  return (
    <div ref={ref} className={`reveal ${isVisible ? "active" : ""}`}>
      {props.children}
    </div>
  );
}

export default Reveal;
