import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo from "./FormDemo";
import FormDemo2 from "./FormDemo2";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    alertify.success(product.productName + " added to cart!", 2);
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(
      (cart) => cart.product.id !== product.id
    );
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed from cart!", 2);
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3001/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };
    return (
      <div>
        <Container>
          <Row>
            <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <ProductList
                      addToCart={this.addToCart}
                      products={this.state.products}
                      info={productInfo}
                    />
                  }
                ></Route>
                <Route
                  exact
                  path="/cart"
                  element={
                    <CartList
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  }
                ></Route>
                <Route exact path="*" element={<NotFound />}></Route>
                <Route path="/form" element={<FormDemo />}></Route>
                <Route path="/form2" element={<FormDemo2 />}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
