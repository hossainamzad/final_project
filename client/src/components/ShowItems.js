import React, { Component } from 'react';
import OneItem from './OneItem';
class ShowItems extends Component {
  render(){
    return(
      <div className="columns">
        <div>
          { this.props.data.map( item => {
            {console.log(item)}
            return <OneItem handleItemDelete = {this.props.handleItemDelete}
                            addToTheShoppingCart = {this.props.addToTheShoppingCart}
                            itemToUpdate={this.props.itemToUpdate}
                            item={item} key={item.id}

                            handleItemUpdate={this.props.handleItemUpdate}
                            handleTextChange={this.props.handleTextChange}
                            handleChange={this.props.handleChange}
                            itemName={this.props.itemName}
                            description={this.props.description}
                            expiration={this.props.expiration}
                            />
          })}
        </div>
      </div>
    )
  }
}
export default ShowItems;
