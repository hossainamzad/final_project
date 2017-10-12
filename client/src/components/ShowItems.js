import React, { Component } from 'react';
import OneItem from './OneItem';
class ShowItems extends Component {
  render(){
    return(
      <div className="ShowItems">
        <div className="items">
          { this.props.data.map( item => {
            {console.log(item)}
            return <OneItem item={item} key={item.id} />
          })}
        </div>
      </div>
    )
  }
}
export default ShowItems;
