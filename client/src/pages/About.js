import React from "react";
import Tron from "../component/Jumbotron";
import Stack from "../component/Stack";
import Words from "../component/Paragraph";
import Footer from "../component/Footer";

export default class About extends React.Component{
  render() {
    return (
      <div className="container">
      <Tron/>
      <Words/>
      <Stack/>
      <Footer/>
      </div>
    )
  }
}