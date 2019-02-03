import React, { Component } from 'react';
import { Col, Button, ButtonGroup, Form, FormGroup, Label, Input } from 'reactstrap';


export default class FormClass extends Component {

  state = {
    Name: "",
    Team: "",
    Message: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.submitHandler(this.state);
  };

  handleTeam = event => {
    event.preventDefault();
    this.setState({Team: event.target.name});
    
  };

  render() {
    return (
      <div className="container" id="Form">
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" className="text-primary" sm={2}>Name</Label>
            <Col sm={10}>
              <Input type="textarea" onChange={this.handleInputChange} name="Name" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <ButtonGroup>
              <Button color="primary" onClick={this.handleTeam} name="Mystic" >Mystic</Button>
              <Button color="danger"  onClick={this.handleTeam} name="Valor" >Valor</Button>
              <Button color="warning" onClick={this.handleTeam} name="Instinct" >Instinct</Button>
            </ButtonGroup>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" className="text-primary" sm={2}>Text Area</Label>
            <Col sm={10}>
              <Input type="textarea" onChange={this.handleInputChange} name="Message" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleFile" className="text-primary" sm={2}>File</Label>
            <Col sm={10}>
              <Input type="file" name="file" id="exampleFile" />
            </Col>
          </FormGroup>
          <Button onClick={this.handleFormSubmit} className="btn btn-primary mt-3">Submit</Button>
        </Form>
      </div>
    );
  }
}