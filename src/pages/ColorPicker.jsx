import { React, useState } from "react";
import { Header } from "../components";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

const ColorPicker = () => {
  const handleColorChange = (args) => {
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
  };

  return (
    <div className="bg-white flex-1 h-full p-[2vw]">
      <Header category="App" title="Color Picker" />

      <div className="mt-10">
        {/* Pencil Icon showing selected color */}
        <div className='flex justify-center'>

          <div id='preview'/>
        </div>

        <div className="flex gap-5 justify-evenly flex-wrap">
          {/* Inline Color Palette */}
          <div>
            <h3 className="mb-2 font-semibold text-gray-800">
              Inline Palette:
            </h3>
            <ColorPickerComponent
              mode="Palette"
              inline={true}
              showButtons={false}
              change={handleColorChange}
            />
          </div>

          {/* Inline Color Picker */}
          <div>
            <h3 className="mb-2 font-semibold text-gray-800">Inline Picker:</h3>
            <ColorPickerComponent
              mode="Picker"
              inline={true}
              showButtons={false}
              change={handleColorChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
