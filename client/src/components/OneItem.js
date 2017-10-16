import React, { Component } from 'react';
import UpdateItem from './UpdateItem';

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

  handleEditItem(){
    this.props.handleItemUpdate(this.props.item)
    this.setState({
      isEditing: true,
    })
  }
  renderTheEitForm(){
    if(this.state.isEditing){
      return(
        <UpdateItem />
        )
    }
    return (
      <div>
          <div><img src={this.props.item.url} alt='item pic' width="250"/>
          <div className="name">{this.props.item.name}</div>
          <div className="description">{this.props.item.description}</div>

          <div className="price">{this.props.item.price}</div>
          </div>
          <div className="button" onClick={() => this.handleEditItem()}>Update</div>
          <div className="button" onClick={() => this.props.addToTheShoppingCart(this.props.item)}>Add This Item</div>
          <div className="button" onClick={() => this.props.handleItemDelete(this.props.item.id)}>Delete</div>
      </div>
      )
  }
  render() {
    console.log('Q rendering');
    return (
      <div className="items">
        {this.renderTheEitForm()}
      </div>
    )
  }
}
export default OneItem;

// later on add this line back to after description
// <div className="expiration">{this.props.item.expiration}</div>
