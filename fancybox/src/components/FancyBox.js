import React, { useState } from 'react';

import FancyBoxDisplay from './FancyBoxDisplay'
import FancyColorSelectBox from './FancyColorSelectBox'

import '../App.css';

const FancyBox = (props) => {

  const [colorState, setColorState] = useState('White');

  const handleColorChange = (color) => {
    setColorState(color)
  }

  return (
    <div className="App">
      <FancyBoxDisplay color={colorState} />

      <div className="fancyColorSelectBoxContainer">
        {
          props.availableColors.map((color, index) => {
            return <FancyColorSelectBox color={color} key={index} onColorChange={() => handleColorChange(color)} />
          })
        }
        
      </div>

    </div>
  );
}

export default FancyBox;
