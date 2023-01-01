import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { GrClose } from "react-icons/gr";
import { IoMdColorPalette } from "react-icons/io";

const ColorPicker = ({ color, setColor }) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div
      className="fixed flex flex-row justify-end items-start z-20"
      style={{ right: "0px", top: "0px" }}
    >
      {showPicker ? (
        <div className="w-fit flex flex-col space-y-2 items-end">
          <GrClose
            className={`cursor-pointer`}
            onClick={() => setShowPicker(!showPicker)}
            fill={color}
            fontSize={"2rem"}
          />
          <ChromePicker
            color={color}
            onChangeComplete={(color) => setColor(color.hex)}
          />
        </div>
      ) : (
        <IoMdColorPalette
          className={`cursor-pointer`}
          onClick={() => setShowPicker(!showPicker)}
          fill={color}
          fontSize={"2rem"}
        />
      )}
    </div>
  );
};

export default ColorPicker;
