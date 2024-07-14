import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  const handleColor = (e) => {
    setColor(e.target.value);
  };
  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-select">
        <label>Select a Color :</label>
        <input type="color" value={color} onChange={handleColor} />
      </div>
     <div className="color-display" style={{ backgroundColor: color }}>
            <h3>Selected Color : {color} </h3>
          </div>
    </div>
  );
}

export default ColorPicker;
