import React , {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class props extends Component {
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
  };

  render() {
    return (
      <div className="container">
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" className="text-primary" sm={2}>Name</Label>
          <Col sm={10}>
            <Input type="textarea" onChange={this.handleInputChange} name="Name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" className="text-primary" sm={2}>Team</Label>
          <Col sm={10}>
            <Input type="select" onChange={this.handleInputChange} name="Team" >
            <option>Mystic</option>
            <option>Valor</option>
            <option>Instinct</option>
            </Input>
          </Col>
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
            <Button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">Submit</Button>
          </Form>
      </div>
    );
  }
}