import { Slider as SliderMUI } from "@mui/material"
import { useState } from "react";
import './Slider.scss'

const marks = [
    {
      value: 7000,
      label: '$7000',
    },
    {
        value: 10500,
        label: '$10500',
    },
    {
        value: 14000,
        label: '$14000',
    },
    {
        value: 21000,
        label: '$21000',
    },
    {
      value: 28000,
      label: '$28000',
    }
  ];
  
  function valueText(value: number) {
    return `$${value}`;
  }

  function valueLabelFormat(value: number) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

function Slider() {
    const [price, setPrice] = useState([7000, 28000]);

    const handlePriceChange = (event: any, newValue: number | number[]) => {
        setPrice(newValue as number[]);
    };

  return (
    <SliderMUI
        defaultValue={28000}
        value={price}
        getAriaValueText={valueText}
        onChange={handlePriceChange}
        min={7000}
        max={28000}
        step={null}
        valueLabelFormat={valueLabelFormat}
        valueLabelDisplay="off"
        marks={marks}
    />
  )
}

export default Slider