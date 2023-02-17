import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const types = [
  'Houses',
  'TownHomes',
  'Apartments',
  'Condos',
  'Multi Family',
  'Lots',
];

export default function MultipleSelectCheckmarks() {
  const [houseType, sethouseType] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    sethouseType(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-multiple-checkbox-label">Type of House</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={houseType}
          onChange={handleChange}
          input={<OutlinedInput label="Type" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {types.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={houseType.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
