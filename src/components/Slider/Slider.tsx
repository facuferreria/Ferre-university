import { Slider as SliderMUI } from "@mui/material"
import { useState } from "react";
import { useFilters } from "../../context/FilterContext";
import './Slider.scss'

const marks = [
    {
      value: 4000,
      label: '$4000',
    },
    {
      value: 7000,
    },
    {
      value: 8000,
       
    },
    {
        value: 9000,
    },
    {
        value: 10000,
    },
    {
      value: 12000,
    },
    {
      value: 18000,
      label: '$18000',
    }
];
  
function valueText(value: number) {
  return `$${value}`;
}

function valueLabelFormat(value: number) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

function Slider() {
  const [price, setPrice] = useState([4000, 18000]);
  const {filterByPrice} = useFilters();

  const handlePriceChange = (event: any, newValue: number | number[]) => {
    setPrice(newValue as number[]);
    filterByPrice(newValue as number[]);
  };
  
  return (
    <SliderMUI
        defaultValue={18000}
        value={price}
        getAriaValueText={valueText}
        onChange={handlePriceChange}
        min={4000}
        max={18000}
        step={null}
        valueLabelFormat={valueLabelFormat}
        valueLabelDisplay="off"
        marks={marks}
    />
  )
}

export default Slider