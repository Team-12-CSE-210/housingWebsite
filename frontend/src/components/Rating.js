import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';

export default function RatingSelectVariants() {
  const [RatingVal, setRatingVal] = React.useState('');
  const handleChange = (event) => {
    setRatingVal(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-standard-label">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={RatingVal}
          onChange={handleChange}
          label="Rating"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {/* <MenuItem value={"Varying"}>
          <Rating
                name="simple-controlled"
                value={RatingVal}
                onChange={(event, newValue) => {
                setRatingVal(newValue);
                }}
            />
            </MenuItem> */}
          <MenuItem value={"1*"}><Rating name="read-only" value="1" readOnly /></MenuItem>
          <MenuItem value={"2*"}><Rating name="read-only" value="2" readOnly /></MenuItem>
          <MenuItem value={"3*"}><Rating name="read-only" value="3" readOnly /></MenuItem>
          <MenuItem value={"4*"}><Rating name="read-only" value="4" readOnly /></MenuItem>
          <MenuItem value={"5*"}><Rating name="read-only" value="5" readOnly /></MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
