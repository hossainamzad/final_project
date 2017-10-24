import React, { Component }from 'react';
// import OneItem from './OneItem'
class ShoppingCart extends Component{
  componentDidMount(){
    console.log(this.props.shoppingCart)
  }
  render(){
    return (
        <div className="cartItem">
          {this.props.addToTheShoppingCart}
          {this.props.shoppingCart.map((item, index) => {
              return <div key={item}>
               <span>{item.name}</span>
               {item.price}
            </div>
          })}
        </div>
      )
  }
}
export default ShoppingCart;
