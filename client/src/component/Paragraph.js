import React from "react";
import { Media } from 'reactstrap';

export default class Words extends React.Component {
    render() {
        return (
            <Media className="words">
            <Media body outline color="primary">
              <Media heading>
                What is Map Adventures?
              </Media>
              <p>Map Adventures is a web application designed to function 
                  as a guide for Pokemon Go! users. A challenge that users have run into is creating 
                  a group for raiding gyms and pokemon hunting because the raids are at random! There is no true map feature
                  for poke-stops or gyms. With that in mind, we have designed this web page to be exactly that! Map Adventures
                  is your very own Pokemon Go! buddy and physical guide!</p>
            </Media>
            </Media>
        )
    }
}