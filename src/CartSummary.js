import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

export default class extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cart) => (
            <DropdownItem key={cart.product.id}>
              <Badge
                onClick={() => this.props.removeFromCart(cart.product)}
                color="danger"
              >
                X
              </Badge>
              {cart.product.productName}
              <Badge color="success">{cart.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem>{<Link to="/cart">Cart</Link>}</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  renderEmptyCart() {
    return <div></div>;
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderEmptyCart()}
      </div>
    );
  }
}
