import React, { useState } from "react";

const Project4 = () => {

    const [Updated, setUpdated] = React.useState(false); 

    
    const handleClick = () => {
        setUpdated(true); 
    };

    return (
        <div className="project">
            <h3>Project 4: Update the state from button click </h3>
            <p>Update the below element from clicking the button</p>
            {Updated ? <p> I'm Updated</p> : <p>Click the below buttom to updated me</p>}
            <button onClick={ handleClick }>Click to update the data</button>
        </div>
    );
}

export default Project4;
