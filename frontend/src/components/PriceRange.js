import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


function valuetext(value) {
    return `$ ${value}`;
  }
export default function PriceRange() {
  const [priceVal, setpriceVal] = React.useState('');
  const handleChange = (event) => {
    setpriceVal(event.target.value);
  };
  const [value, setValue] =  React.useState([0,500000]);
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-standard-label">Price Range</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={priceVal}
          onChange={handleChange}
          label="Price Range"
        >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            <MenuItem value={"Price set"}>
                <Box sx={{ width: 150 }}>
                    <Slider
                        getAriaLabel={() => 'Price range'}
                        value={value}
                        onChange={rangeSelector}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                </Box>
            </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
