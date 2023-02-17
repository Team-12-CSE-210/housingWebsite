import React,{useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DefaultExample from './Listgroup';

function B1() {
    return (
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    );
}
function BasicButtonExample() {
    const [value,setValue]=useState('');
    const handleSelect=(e)=>{
      console.log(e);
      setValue(e)
    }
  return (
    <div>
    <DropdownButton id="dropdown-basic-button" title="Price" onSelect={handleSelect}>
      <Dropdown.Item eventKey="Price-1"> <DefaultExample /> </Dropdown.Item>
      <Dropdown.Item eventKey="Price-2"> <B1/> </Dropdown.Item>
      <Dropdown.Item eventKey="Price-3">Price 3</Dropdown.Item>
    </DropdownButton>
    <h4>{value}</h4>
    </div>
  );
}

export default BasicButtonExample;