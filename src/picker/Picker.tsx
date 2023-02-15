import { log } from "console";
import React, { useState } from "react";
import "./Picker.css";
let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
const allowedLatters = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "#",
];
const Picker = () => {
  const [value, setValue] = useState("#e66465");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    if (allowedLatters.includes(value[value.length - 1])) {
      if (value.length < 1) {
        setValue("#");
        return;
      }
      if (value.length < 7) {
        setValue(e.target.value);
      } else {
        if (value.match(regex)) {
          setValue(e.target.value);
        }
      }
    }
  };
  return (
    <div className="ColorPickerContainer">
      <input id="ColorPickerInput" value={value} onChange={handleChange} />
      <input
        type="color"
        name="picker"
        id="ColorPicker"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Picker;
