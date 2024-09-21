import React from 'react';
import './Controlls.css';

export default function Controlls() {
  const colors = ['red', 'green', 'blue', 'pink', 'orange'];

  return (
    <div>
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
