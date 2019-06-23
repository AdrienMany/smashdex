import React, { Component } from "react";
import SmashCard from "../display/SmashCard";

class SmashList extends Component {

  render() {

    return (
      <div>
            <SmashCard 
            data-toggle="modal"
            data-target="#fighterModalCenter"
            openModal={this.openModal}/>
      </div>
    );
  }
}

export default SmashList;
