import * as React from 'react';
import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment  from '@material-ui/core/InputAdornment';
import SearchIcon from "@material-ui/icons/Search";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from "@material-ui/icons/Close";
import { margin } from '@mui/system';

function SearchBar({ placeholder, onSelect, handleSearch }) {
    console.log("In SearchBar");
    const handleChange = (event, value) => {
        value = event.target.value;
        console.log(value);
        onSelect(value);
    };
    return (
        <>
        <TextField 
            id = "searchBar"
            style={{maxWidth: '275px', maxHeight: '70px', minWidth: '275px', minHeight: '50px'}}
            sx = {{m:1}}
            placeholder = {placeholder}
            margin = "normal"
            onChange = {handleChange}
        />
            <Button
                variant="contained"
                color="primary"
                style = {{maxWidth: '100px', maxHeight: '70px', minWidth: '100px', minHeight: '50px'}}
                sx = {{m:1}}
                onClick={handleSearch}
                endIcon = {<SearchIcon/>}>
                Search
            </Button>
        </>
    );
}

export default SearchBar;