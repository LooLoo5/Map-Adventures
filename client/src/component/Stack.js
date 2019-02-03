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
     <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
     </CardBody>
     </Card>
     <Card>
     <CardImg className="Mystic" src={Mystic} alt="Card image cap" />
     <CardBody>
     <CardTitle>Mystic</CardTitle>
     <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
     </CardBody>
     </Card>
     <Card>
     <CardImg className="Instinct" src={Instinct} alt="Card image cap" />
     <CardBody>
     <CardTitle>Instinct</CardTitle>
     <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
     </CardBody>
     </Card>
     </CardGroup>
        )
    }
}