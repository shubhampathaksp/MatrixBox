

import React, {useState} from "react";
// import './App.css';

const MatrixBox =() =>{
    const [clickOrder, setClickOrder] = useState([]);
    const [boxes, setBoxes] = useState(Array(9).fill(''));
  
    const handleClick = (index) => {
      if (boxes[index] === '') {
        const newBoxes = [...boxes];
        newBoxes[index] = 'green';
        setBoxes(newBoxes);
        setClickOrder([...clickOrder, index]);
      }
  
      if (index === 8) {
        clickOrder.forEach((boxIndex, i) => {
          setTimeout(() => {
            const newBoxes = [...boxes];
            newBoxes[boxIndex] = 'orange';
            setBoxes(newBoxes);
          }, i * 300); 
        });
      }
    };
    return(
    <div className="grid">
      {boxes.map((color, index) => (
        <div
          key={index}
          className={`box ${color}`}
          onClick={() => handleClick(index)}
        ></div>
      ))}

            </div>
    )
}
export default MatrixBox;