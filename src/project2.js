import react, { useState } from "react";

const Project2 = () => {

const[isVisible, SetIsVisible] = react.useState(true);

   return (
    <div className="project">
         <h3>Project 2: Show/Hide element on button click</h3>
         {isVisible && <p>This Paragraph should toggle hidden on button click</p>}
         <button onClick={()=> SetIsVisible(!isVisible)}>Show/Hide</button>
    </div>

   );
}



export default Project2;