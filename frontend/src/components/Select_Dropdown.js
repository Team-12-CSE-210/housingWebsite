import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

class SelectDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: [],Name: props.Name, types: props.types, InputLabel: props.InputLabel};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        const {
            target: { value },
          } = event;
        console.log(value);
        this.setState({count : value});
    };   
//   const [Bedrooms, setBedrooms] = React.useState('');
//   const [Bathrooms, setBathrooms] = React.useState('');
//   const handleChange = (event) => {
//     setBedrooms(event.target.value);
//   };
//   const handleChange2 = (event) => {
//     setBathrooms(event.target.value);
//   };
    render() {

        return (
            <div>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="select-dropbox">{this.state.InputLabel}</InputLabel>
                <Select
                labelId="select-dropbox-label"
                id="select-dropbox"
                value={this.state.count}
                onChange={this.handleChange}
                label={this.state.InputLabel}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {this.state.types.map((type) => (
                    <MenuItem value={type}>{type}</MenuItem>
                ))}
                </Select>
            </FormControl>
            </div>
        );
    }
}

export default SelectDropdown;