import React from "react";
import { Media } from 'reactstrap';

export default class Words extends React.Component {
    render() {
        return (
            <Media className="words">
            <Media body outline color="primary">
              <Media heading>
                Media heading
              </Media>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            </Media>
            </Media>
        )
    }
}