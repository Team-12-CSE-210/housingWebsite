import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
    console.log(data);
    return (
        <Autocomplete
            disablePortal
            id="searchBar"
            options={data}
            sx={{ width: 300 }}
            renderInput={(params) =><TextField {...params} placeholder={placeholder} />}
            getOptionLabel={(option) => option.Address}
        />
    );
}

export default SearchBar;