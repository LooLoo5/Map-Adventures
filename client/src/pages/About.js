import React from "react";
import Deck from "../component/Deck";
import Footer from "../component/Footer";


export default class About extends React.Component{
  render() {
    return (
      <div className="container">
      <Deck/>
      <Footer/>
      </div>
    )
  }
}