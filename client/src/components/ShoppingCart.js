import React, { Component }from 'react';
class ShoppingCart extends Component{
  componentDidMount(){
    console.log(this.props.shoppingCart)
  }
  render(){
    return (

        <div>{this.props.addToTheShoppingCart}</div>
      )
  }
}
export default ShoppingCart;
