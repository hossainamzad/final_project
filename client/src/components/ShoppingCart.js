import React, { Component }from 'react';
// import OneItem from './OneItem'
class ShoppingCart extends Component{
  componentDidMount(){
    console.log(this.props.shoppingCart)
  }
  render(){
    return (
        <div>
          {this.props.addToTheShoppingCart}
          {this.props.shoppingCart.map((item, index) => {
              return <div key={item}>
               {item.name}
               {item.price}
            </div>
          })}
        </div>
      )
  }
}
export default ShoppingCart;
//     {this.props.shoppingCart.map(item => {
            // return <OneItem item={item} key={item.id}/>
          // })}
