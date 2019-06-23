import React from "react";
import Youtube from "../assets/youtube";

class ReplayModal extends React.Component {

  render() {

    return (
      <div>
        <Youtube fighter={this.props.fighter}/>
      </div>
    )
  }
}

export default ReplayModal;
