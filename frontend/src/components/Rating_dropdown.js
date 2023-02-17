import React,{useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Rating from '@mui/material/Rating';
function RatingDrop() {
    const [value,setValue]=useState('');
    const handleSelect=(e)=>{
      console.log(e);
      setValue(e)
    }
  return (
    <div>
    <DropdownButton id="dropdown-basic-button" title="Rating" onSelect={handleSelect}>
      <Dropdown.Item eventKey="1*"> <Rating name="read-only" value="1" readOnly /> </Dropdown.Item>
      <Dropdown.Item eventKey="2*"> <Rating name="read-only" value="2" readOnly /> </Dropdown.Item>
      <Dropdown.Item eventKey="3*"> <Rating name="read-only" value="3" readOnly /> </Dropdown.Item>
      <Dropdown.Item eventKey="4*"> <Rating name="read-only" value="4" readOnly /> </Dropdown.Item>
      <Dropdown.Item eventKey="5*"> <Rating name="read-only" value="5" readOnly /> </Dropdown.Item>

    </DropdownButton>
    <h4>{value}</h4>
    </div>
  );
}

export default RatingDrop;