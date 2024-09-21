import React from 'react';
import './Controlls.css';

export default function Controlls({ onColorChange }) {
  const colors = ['red', 'green', 'blue', 'pink', 'orange'];

  return (
    <div>
      {colors.map(color => (
        <button onClick={() => onColorChange(color)}
          key={color}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
