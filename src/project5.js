import React from "react";

const Project5 = () => {

    const [num1, setNum1] = React.useState(0);
    const [num2, setNum2] = React.useState(0);
    const [sum, setSum] = React.useState(0);
    const decimalRadix = 10;

    function calculateSum() {
        setSum(parseInt(num1, decimalRadix) + parseInt(num2, decimalRadix));
    }




    return (
        <div className="project">
            <h3>Project 5: create a page to calculate sum of two numbers</h3>
            <div style={{ paddingBottom: ".5rem" }}>
                <input type="number" onChange={(e) => setNum1(e.target.value)}></input>
            </div>
            <div className="mt1">
                <input type="number" onChange={(e) => setNum2(e.target.value)}></input>
            </div>
            <p>Total: {sum}</p>
            <button onClick={() => calculateSum()}>Calculate Sum</button>
        </div>
    )

}

export default Project5;