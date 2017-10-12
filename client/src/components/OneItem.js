import React, { Component } from 'react';

class OneItem extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.tweed.content !== this.props.tweed.content;
  // }

  render() {
    console.log('Q rendering');
    return (
      <div className="items">
        {this.props.item.name}
          <div className="name">{this.props.item.name}</div>
          <div><img src={this.props.item.url} alt='Item pic' />
          <div className="name">{this.props.item.description}</div>
          <div className="name">{this.props.item.expiration}</div>
          <div className="name">{this.props.item.price}</div>
          <div className="name">{this.props.item.user_id}</div>
          </div>
      </div>
    )
  }
}
export default OneItem;

