import React, { forwardRef } from 'react'
import Row from "react-bootstrap/Row";

const Article = (props,ref) => {
  return (
    <main ref={ref}>
          <article>
            <Row>
              <h2 className="H2" id="history">
                {props.heading}
              </h2>

              <div className="hl"></div>

              <div className="col1">
                <h2 className="vheading " id="history">
                   {props.heading}
                </h2>
                <div className="vl"></div>
                <p className="text">
                 {props.text}

                </p>
              </div>
            </Row>
          </article>
        </main>
  )
}

export default forwardRef(Article)