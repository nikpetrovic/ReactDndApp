import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';

const ShoppingCartSpec = {
  drop() {
    return {name: 'ShoppingCart'}
  }
}

let collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
};

class ShoppingCart extends Component {
  render() {
    const {canDrop, isOver, connectDropTarget} = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = '#FFFFFF';
    if (isActive) {
      backgroundColor = '#F7F7BD';
    } else if (canDrop) {
      backgroundColor = '#F7F7F7';
    }

    const style = {
      backgroundColor: backgroundColor
    };

    return connectDropTarget(
      <div className='shopping-cart' style={style}>
        {isActive ? 'Hummm, snack!' : 'Drag here to order!'}
      </div>
    );
  }
}

export default DropTarget("snack", ShoppingCartSpec, collect)(ShoppingCart);
