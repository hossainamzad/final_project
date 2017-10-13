import React, { Component } from 'react';

class OneItem extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.tweed.content !== this.props.tweed.content;
  // }

  render() {
    console.log('Q rendering');
    return (
      <div className="items">
          <div><img src={this.props.item.url} alt='Item pic' width="250"/>
          <div className="name">{this.props.item.name}</div>
          <div className="description">{this.props.item.description}</div>
          <div className="expiration">{this.props.item.expiration}</div>
          <div className="price">{this.props.item.price}</div>
          </div>
          <button onClick={this.props.handleItemDelete}>Delete</button>
      </div>
    )
  }
}
export default OneItem;

