import React, { Component } from 'react';
import UpdateItem from './UpdateItem';
import ShoppingCart from './ShoppingCart';

class OneItem extends Component {
  constructor(props){
    super(props);
    this.state={
      isEditing: false
    }
    this.handleEditItem = this.handleEditItem.bind(this)
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.tweed.content !== this.props.tweed.content;
  // }
  componentDidMount() {
    console.log(this.props.item);
  }

  handleEditItem(itemID){
    this.setState({ isEditing: !this.state.isEditing });

    this.props.itemToUpdate(itemID);
  }

  renderTheEditForm(){
    if(this.state.isEditing){
      return(
        <UpdateItem
          handleItemUpdate={this.props.handleItemUpdate}
          handleTextChange={this.props.handleTextChange}
          handleChange={this.props.handleChange}
          itemName={this.props.itemName}
          description={this.props.description}
          expiration={this.props.expiration}
         />
        )
    }
    return (
      <div>
          <div><img src={this.props.item.url} alt='item pic' width="250"/>
            <div className="name">{this.props.item.name}</div>
            <div className="description">{this.props.item.description}</div>
            <div className="expiration">{this.props.item.expiration}</div>
            <div className="price">{this.props.item.price}</div>
          </div>
          <div className="button" onClick={() => this.handleEditItem(this.props.item.id)}>Update</div>
          <div className="button" onClick={() => this.props.addToTheShoppingCart(this.props.item)}>Add This Item</div>
          <div className="button" onClick={() => this.props.handleItemDelete(this.props.item.id)}>Delete</div>
      </div>
      )
  }
  render() {
    console.log('Q rendering');
    return (
      <div className="items">
        {this.renderTheEditForm()}
      </div>
    )
  }
}
export default OneItem;

// later on add this line back to after description
