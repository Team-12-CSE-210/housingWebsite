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


class MultipleCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: [],Name: props.Name, types: props.types};
    this.handleChange = this.handleChange.bind(this);
  }   
  handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    this.props.onSelect(value);
    this.setState({count : value});
  };
  render() {
    return (
        <div>
        <FormControl variant="filled" sx={{ m: 1, width: 250 }}>
            <InputLabel id="demo-multiple-checkbox-label">{this.state.Name}</InputLabel>
            <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={this.state.count}
            onChange={this.handleChange}
            input={<OutlinedInput label={this.state.Name} />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
            >
            {this.state.types.map((name) => (
                <MenuItem key={name} value={name}>
                <Checkbox checked={this.state.count.indexOf(name) > -1} />
                <ListItemText primary={name} />
                </MenuItem>
            ))}
            </Select>
        </FormControl>
        </div>
    )
  }
}

export default MultipleCheckbox;