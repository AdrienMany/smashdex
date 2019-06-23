import React from "react";
import Modal from "react-bootstrap/Modal";
import ContentModal from "../modal/ContentModal";

class FighterModal extends React.Component {
  
  render() {

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{backgroundColor: this.props.color}} closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="text-white font-weight-bold">
            {this.props.fighter.replace("<br>", "")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContentModal 
            fighter={this.props.fighter}
            color={this.props.color}
            image={this.props.image} />
        </Modal.Body>
      </Modal>
    );
  }
}

export default FighterModal;
