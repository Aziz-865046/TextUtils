import React, {useState} from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white"
    })
    const [btnText, setBtnText] = useState("Enable Dark Mode")
    const toggleStyle = () => {
        if (myStyle.color === "black") {
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white",
            })
            setBtnText("Enable Light Mode")
        } else {
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            })
            setBtnText("Enable Dark Mode")
        }
    }
  return (
    <>
    <div className="contaier" style={myStyle}>
        <div className="accordion" id="accordionExample" style={myStyle}>
      <h1>About Us</h1>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" style={myStyle} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" style={myStyle} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Some placeholder content for the second accordion panel. This panel is hidden by default and shown when triggered.
                </div>
                </div>
                </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" style={myStyle} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
                </div>
                </div>
            </div>
        </div>
        <div className="container my-3" style={myStyle}>
            <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
        </div>
    </div>
    </>
  )
}
