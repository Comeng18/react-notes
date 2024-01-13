import React, { Component } from "react";
import { Table } from "reactstrap";

export default class CartList extends Component {
  renderCart() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((c) => {
            <tr key={c.product.id}>
              <td>{c.product.id}</td>
              <td>{c.product.categoryId}</td>
              <td>{c.product.productName}</td>
              <td>{c.product.unitPrice}</td>
              <td>{c.product.unitsInStock}</td>
              <td>{c.product.quantityPerUnit}</td>
            </tr>;
          })}
        </tbody>
      </Table>
    );
  }

  render() {
    return this.renderCart();
  }
}
