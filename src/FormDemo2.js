import alertify from "alertifyjs";
import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db");
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
          <FormGroup>
            <Label for="email">email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email gir"
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password gir"
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="description gir"
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="city">city</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.onChangeHandler}
            >
              <option>Ankara</option>
              <option>Çankırı</option>
              <option>Istanbul</option>
            </Input>
          </FormGroup>
          <Button type="submit"> Save</Button>
        </Form>
      </div>
    );
  }
}
