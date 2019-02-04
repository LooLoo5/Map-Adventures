import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';
import Valor from "../images/Valor.jpg";
import Mystic from "../images/Mystic.jpg";
import Instinct from "../images/Instinct.jpg";


export default class Stack extends React.Component {
  render() {
    return (

      <CardGroup className="teams">
        <Card>
          <CardImg className="Valor" src={Valor} alt="Card image cap" />
          <CardBody>
            <CardTitle>Valor</CardTitle>
          </CardBody>
        </Card>
        <Card>
          <CardImg className="Mystic" src={Mystic} alt="Card image cap" />
          <CardBody>
            <CardTitle>Mystic</CardTitle>
          </CardBody>
        </Card>
        <Card>
          <CardImg className="Instinct" src={Instinct} alt="Card image cap" />
          <CardBody>
            <CardTitle>Instinct</CardTitle>
          </CardBody>
        </Card>
      </CardGroup>
    )
  }
}