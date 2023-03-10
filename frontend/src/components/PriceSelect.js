import React, { useState, useEffect } from "react";
import { Stack, Typography, Slider, TextField } from "@mui/material";

function PriceSelect({onSelect}) {
    const minmin = 0;
    const maxmax = 100000;
    const [priceRangeValue, setPriceRangeValue] = useState([0, 100000]);
  
    const handlePriceRangeChange = (event, newValue) => {
      setPriceRangeValue(newValue);
    };
  
    console.log(priceRangeValue);
    return (
        <div>
          <Stack direction="row" justifyContent="space-evenly" alignItems="center">
            <TextField
              label="min Price"
              type="number"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              sx={{ width: "90px",m: 1}}
              defaultValue = {minmin}
            //   value={priceRangeValue[0]}
              onChange={(e) => {
                onSelect([Number(e.target.value), priceRangeValue[1]])
                setPriceRangeValue([Number(e.target.value), priceRangeValue[1]]);
              }}
            />
            <Typography>-</Typography>
            <TextField
          label="max Price"
          type="number"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          sx={{ width: "90px" }}
          defaultValue = {maxmax}
        //   value={priceRangeValue[1]}
          onChange={(e) => {
            onSelect([priceRangeValue[0], Number(e.target.value)])
            setPriceRangeValue([priceRangeValue[0], Number(e.target.value)]);
          }}
        />
      </Stack>
    </div>
  );
}

export default PriceSelect;