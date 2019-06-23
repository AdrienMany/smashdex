import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TabModal from "../modal/TabModal";

export default class TabsModal extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const { onClickTabItem, props: {children},state: {activeTab} } = this;

    return (
        <div>
            <nav className="nav-fill">
              <div className="nav nav-pills">
                  {children.map((child) => {
                  const { label } = child.props;
      
                  return (
                      <TabModal
                      color={this.props.color}
                      activeTab={activeTab}
                      key={label}
                      label={label}
                      onClick={onClickTabItem}
                      />
                  );
                  })}
              </div>
            </nav>
            <div className="tab-content border container mt-4 py-4">
            {children.map((child) => {
                if (child.props.label !== activeTab) return undefined;
                return child.props.children;
            })}
            </div>
      </div>
    );
  }
}