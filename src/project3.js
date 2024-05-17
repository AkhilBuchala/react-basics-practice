import React, { useState } from "react";

const Project3 = () => {
    const [inputValue, setInputValue] = useState(""); // State to track input value
    const [isDisabled, setIsDisabled] = useState(true); // State to track button disabled status

    // Function to handle input change
    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value); // Update input value state

        // Update button disabled state based on input value
        if (value.trim() !== "") {
            setIsDisabled(false); // Enable button if input is not empty
        } else {
            setIsDisabled(true); // Disable button if input is empty
        }
    };

  

    return (
        <div className="project">
            <h3>Project 3: Disable the button when input is empty</h3>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange} 
                style={{marginRight:"4px"}}
            />
            <button
                disabled={isDisabled} 
            >
                Submit
            </button>
        </div>
    );
}

export default Project3;
