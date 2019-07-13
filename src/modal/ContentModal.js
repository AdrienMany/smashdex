import React from "react";
import TabsModal from "../modal/TabsModal";
import ReplayModal from "../modal/ReplayModal";
import OverviewModal from "../modal/OverviewModal";

class ContentModal extends React.Component {

  render() {
    return (
      <div className="container">
          <TabsModal color={this.props.color}>
              <div label="Overview" className="tab-content">
                  <OverviewModal image={this.props.image} color={this.props.color} />
              </div>
              <div label="Frame Data" className="tab-content">
                  Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim sit magna Lorem id et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit adipisicing ut in id occaecat pariatur ut ullamco ea tempor duis.
              </div>
              {/* <div label="Replay" className="tab-content">
                  <ReplayModal fighter={this.props.fighter}/>
              </div> */}
          </TabsModal>
      </div>
    );
  }

}

export default ContentModal;
