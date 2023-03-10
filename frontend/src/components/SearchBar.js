import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data, onSelect}) {
    console.log("In SearchBar");
    const handleChange = (event, value) => {
        // value = event.target.value;
        onSelect(value);
        console.log(value);
    };
    return (
        <Autocomplete
            disablePortal
            id="searchBar"
            options={data}
            sx={{ width: 300 }}
            renderInput={(params) =><TextField {...params} placeholder={placeholder} />}
            getOptionLabel={(option) => option.Address}
            onChange={handleChange}
        />
    );
}

export default SearchBar;