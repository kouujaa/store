import React, { Component } from "react";

class CartItem extends Component {
  state = {};

  //displaycart Items

  //   <tr>
  //   <th scope="row">1</th>
  //   <td>cloth</td>
  //   <td>M</td>
  //   <td>3000</td>
  // </tr>
  render() {
    let { quantity, productID, description, size, price } = this.props.item;
    price = price * quantity;
    return (
      <tr>
        <th scope="row">{quantity}</th>
        <td>{description}</td>
        <td>{size}</td>
        <td>{price}</td>
        <td>
          <span
            onClick={() => {
              this.props.inc(productID, price);
            }}
            className="btn btn-sm btn-primary"
          >
            +
          </span>
        </td>
        <td>
          <span
            onClick={() => {
              this.props.dec(productID);
            }}
            className="btn btn-sm btn-primary"
          >
            -
          </span>
        </td>
        <td>
          <span
            onClick={() => {
              this.props.remove(productID);
            }}
            className="btn btn-sm btn-primary"
          >
            Out
          </span>
        </td>
      </tr>
    );
  }
}

export default CartItem;
