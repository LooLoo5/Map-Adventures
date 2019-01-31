import React from "react";
import { Card, CardTitle, CardText, Row, CardImg } from 'reactstrap';




export default class Deck extends React.Component {
    render() {
        return (
            <Row>
    <div className="container">
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          
        </Card>

        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          
        </Card>

        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          
        </Card>
      
    </div>
    </Row>
        )
    }
}