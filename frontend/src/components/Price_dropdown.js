import React,{useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function BasicButtonExample() {
    const [value,setValue]=useState('');
    const handleSelect=(e)=>{
      console.log(e);
      setValue(e)
    }
  return (
    <div>
    <DropdownButton id="dropdown-basic-button" title="Price" onSelect={handleSelect}>
      <Dropdown.Item eventKey="Price-1"> Price-1 </Dropdown.Item>
      <Dropdown.Item eventKey="Price-2"> Price-2 </Dropdown.Item>
      <Dropdown.Item eventKey="Price-3"> Price-3 </Dropdown.Item>
    </DropdownButton>
    <h4>{value}</h4>
    </div>
  );
}

export default BasicButtonExample;