import React, { Component } from 'react';

class OneItem extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.tweed.content !== this.props.tweed.content;
  // }
  componentDidMount() {
    console.log(this.props.item);
  }
  render() {
    console.log('Q rendering');
    return (
      <div className="items">
          <div><img src={this.props.item.url} alt='item pic' width="250"/>
          <div className="name">{this.props.item.name}</div>
          <div className="description">{this.props.item.description}</div>
          <div className="expiration">{this.props.item.expiration}</div>
          <div className="price">{this.props.item.price}</div>
          </div>
          <div className="button" onClick={() => this.props.handleItemUpdate(this.props.item)}>Update</div>
          <div className="button" onClick={() => this.props.addToTheShoppingCart(this.props.item)}>Add This Item</div>
          <div className="button" onClick={() => this.props.handleItemDelete(this.props.item.id)}>Delete</div>
      </div>
    )
  }
}
export default OneItem;

