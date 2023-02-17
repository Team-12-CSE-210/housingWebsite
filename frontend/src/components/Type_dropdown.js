import React,{useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function TypeHouse() {
    const [value,setValue]=useState('');
    const handleSelect=(e)=>{
      console.log(e);
      setValue(e)
    }
  return (
    <div>
    <DropdownButton id="dropdown-basic-button" title="House Type" onSelect={handleSelect}>
      <Dropdown.Item eventKey="Houses"> Houses </Dropdown.Item>
      <Dropdown.Item eventKey="Townhomes"> Townhomes</Dropdown.Item>
      <Dropdown.Item eventKey="Multi-family"> Multi-family</Dropdown.Item>
      <Dropdown.Item eventKey="Plot"> Plot </Dropdown.Item>
      <Dropdown.Item eventKey="Apartment"> Apartment </Dropdown.Item>

    </DropdownButton>
    <h4>{value}</h4>
    </div>
  );
}

export default TypeHouse;