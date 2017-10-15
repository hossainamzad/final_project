import React, { Component } from 'react';
import OneItem from './OneItem';
class ShowItems extends Component {
  render(){
    return(
      <div className="ShowItems">
        <div>
          { this.props.data.map( item => {
            {console.log(item)}
            return <OneItem handleItemDelete = {this.props.handleItemDelete}
                            handleItemUpdate = {this.props.handleItemUpdate}
                            addToTheShoppingCart = {this.props.addToTheShoppingCart}
                            item={item} key={item.id} />
          })}
        </div>
      </div>
    )
  }
}
export default ShowItems;
