import React, { useState } from 'react';
import './ColorBox.scss';

ColorBox.propTypes = {

};
const getRandomColor = () => {
  const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function ColorBox(props) {
  const [color, setCorlor] = useState(localStorage.getItem('box_color') || 'black')

  const handleBoxClick = () => {
    const newColor = getRandomColor();
    setCorlor(newColor);
    localStorage.setItem('box_color', newColor)
  }
  return (
    <div className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}>
      color box
    </div>
  );
}

export default ColorBox;