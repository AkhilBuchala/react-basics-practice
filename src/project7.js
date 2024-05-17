import React from "react";

const Project7 = () => {

    const [clicks, setClicks] = React.useState(0);

    function Clicks () {
        setClicks(value=>value+1)

    }

    return(
        <div className="project">
            <h3>Project 7: Counter - The Higher Order Component</h3>
            <button onClick={Clicks}>This button was tapped by the user {clicks} times</button>
        </div>
    )

}

export default Project7;