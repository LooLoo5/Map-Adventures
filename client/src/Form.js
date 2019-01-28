import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

const Form = (props) => {
  return (
    <div className="container">
      <InputGroup>
        <InputGroupAddon addonType="prepend">Normal</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">Normal</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">Normal</InputGroupAddon>
        <Input />
      </InputGroup>
    </div>
  );
};

export default Form;