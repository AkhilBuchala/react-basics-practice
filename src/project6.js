import React from "react";

const Project6 = () => {

    const [value,setValue] = React.useState(0);

   function Increment() {
    setValue(value => value +1)
   }

   function Decrement() {
    setValue(value => value -1)
   }

    return(
        <div className="project">
            <h3>
            Project 6: Create a counter
            </h3>
            <p>Counter:{value}</p>
            <button onClick={Increment} style={{marginRight:"4px"}}>Increment </button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )

}

export default Project6;