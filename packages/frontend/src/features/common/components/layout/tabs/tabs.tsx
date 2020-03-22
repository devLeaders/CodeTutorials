import React, { Component,PropsWithChildren,ReactElement } from 'react';
import PropTypes from 'prop-types';
import Tab from './tab';

class Tabs extends Component<{children:Array<ReactElement>},{activeTab:string}> {

  constructor(props:any) {
    super(props);

    console.log(this.props.children[0].props)

    this.state = {
      activeTab: this.props.children[0].props['data-label'],
    };
  }

  onClickTabItem = (tab:any) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child:any) => {
            const label  = child.props['data-label'];

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child:any) => {
            if (child.props['data-label'] !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;