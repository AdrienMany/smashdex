import React, { Component } from "react";
import fighterData from "../assets/fighterData.json";
import FighterModal from "../modal/FighterModal";

class FighterInfo extends Component {

  state = { 
    modalShow: false,
    fighterName: '',
    color: '',
    image: '',
    serie: '',
  };

  openModal = () => {
    this.setState({ modalShow: true });
  };

  closeModal = () => {
    this.setState({ modalClose: false });
  };

  render() {
    const fighters = Object.values({ fighterData })[0]["fighters"];

    let modalClose = () => this.setState({ modalShow: false });
    
    return (
      <div>
        {fighters.map(fighter => (
          <div
          className="fighterCard card mb-4 mr-2"
          style={{ backgroundColor: fighter.color }}
          key={fighter.id}
          onClick={() => this.setState({ 
            modalShow: true, 
            fighterName: fighter.displayName["en_US"], 
            color: fighter.color,
            image: fighter.file})}>
            <div
              className="fighterCard-body card-body overflow-hidden">
              <img
                src={"https://www.smashbros.com/assets_v2/img/fighter/" + fighter.file + "/main.png"}
                alt={fighter.displayName["en_US"].replace("<br>", "")}
                className="fighterImg"
                />
              <div className="fighterName">
                {fighter.displayName["en_US"].replace("<br>", "")}
              </div>
            </div>
          </div>
        ))}
        <FighterModal 
          show={this.state.modalShow} 
          onHide={modalClose} 
          fighter={this.state.fighterName} 
          color={this.state.color}
          image={this.state.image}/>
      </div>
    );
  }
}

export default FighterInfo;
