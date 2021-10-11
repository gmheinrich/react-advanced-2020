import React, { useState } from 'react';

const UseStateBasics = () => {
  console.log(useState());

  const [text, setText] = useState('Random title');

  const handleClick = () => {
    if (text === "Random title") {
      setText('Hello world')
    }
    else {
      setText('Random title')
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>  
    </React.Fragment>
  );
};

export default UseStateBasics;
