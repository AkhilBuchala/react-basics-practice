// Lazy search on input field - Debounce
import React from "react";

const Project8 = () => {
  const [value, setValue] = React.useState("");

  const debounce = (callback, delay) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer); 
      timer = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  const handleChange = debounce((v) => {
    setValue(v);
  }, 2000);

  return (
    <div className="project">
      <h3>Project 13: Lazy search on input field - Debounce</h3>
      <p>
        Debounce is useful when we have to trigger something after set Interval
        - When user stops typing.
      </p>
      <p>
        Enter some text below, you will see a console log after a delay for 2
        seconds
      </p>
      <p>Output: {value}</p>
      <input type="text" onChange={(e) => handleChange(e.target.value)}></input>
    </div>
  );
};

export default Project8;