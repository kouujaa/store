import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Link, Route } from "react-router-dom";
import UploadProductImage from "./UploadProductImage";

class UploadProduct extends Component {
  state = {
    itemDescription: "",
    sizes: "",
    colors: [],
    numberInStock: 1,
    price: 0,
    material: "",
    category: ""
  };

  onChangeHandler = input => e => {
    const userInfo = { ...this.state };
    userInfo[input] = e.target.value;
    this.setState(userInfo);
  };

  render() {
    return (
      <div className="container">
        <h1>Upload Product</h1>
        <hr />
        <div className="container">
          <Form onSubmit={this.onSubmitHandler}>
            <FormGroup>
              <Label for="itemDescription">Item Description</Label>
              <Input
                name="itemDescription"
                bsSize="lg"
                required
                onChange={this.onChangeHandler("itemDescription")}
              ></Input>
            </FormGroup>

            <FormGroup>
              <Label for="sizes">size</Label>
              <Input
                type="select"
                name="sizes"
                id="sizes"
                required
                onChange={this.onChangeHandler("sizes")}
              >
                <option>Select size</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="colors">Select Main Color</Label>
              <Input
                type="select"
                name="colors"
                id="colors"
                required
                onChange={this.onChangeHandler("colors")}
              >
                <option>Select Color</option>
                <option>Beige</option>
                <option>Black</option>
                <option>Blue</option>
                <option>Brown</option>
                <option>Green</option>
                <option>Grey</option>
                <option>Indigo</option>
                <option>Orange</option>
                <option>Pink</option>
                <option>Purple</option>
                <option>Red</option>
                <option>Violet</option>
                <option>White</option>
                <option>Yellow</option>
                <option>Multi-Color</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="numberInStock">Number Of Item In stock</Label>
              <Input
                type="number"
                name="numberInStock"
                bsSize="lg"
                required
                onChange={this.onChangeHandler("numberInStock")}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input
                type="number"
                name="price"
                bsSize="lg"
                required
                onChange={this.onChangeHandler("price")}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="material">Material</Label>
              <Input
                type="select"
                name="material"
                id="material"
                required
                onChange={this.onChangeHandler("material")}
              >
                <option>Select Material</option>
                <option>Cotton</option>
                <option>Faux Fur</option>
                <option>Fur</option>
                <option>Leather</option>
                <option>Linen</option>
                <option>Nylon</option>
                <option>Polyester</option>
                <option>Rayon</option>
                <option>Silk</option>
                <option>Spandex</option>
                <option>Synthetic Leather</option>
                <option>Wool</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="category">Category</Label>
              <Input
                type="select"
                name="category"
                id="category"
                required
                onChange={this.onChangeHandler("category")}
              >
                <option>Select Category</option>
                <option>Blouses</option>
                <option>Bodysuits</option>
                <option>Bottoms</option>
                <option>Capris</option>
                <option>Coats</option>
                <option>Dresses</option>
                <option>Hoodies</option>
                <option>Jackets</option>
                <option>Jeans</option>
                <option>Jeggings</option>
                <option>Jumpsuits</option>
                <option>Lingerie</option>
                <option>Pants</option>
                <option>Playsuits</option>
                <option>Rompers</option>
                <option>Sets</option>
                <option>Shirts</option>
                <option>Skirts</option>
                <option>Suits</option>
                <option>Sweaters</option>
                <option>SweatShirts</option>
                <option>Swimsuit</option>
                <option>Tees</option>
                <option>Tops</option>
              </Input>
            </FormGroup>
            <span className="btn mt-4 mb-4">
              <Link to="/sellerDashBoard/uploadProduct/uploadProductImage">
                proceed to image upload
              </Link>
            </span>

            <Route path="/sellerDashBoard/uploadProduct/uploadProductImage">
              <UploadProductImage uploadinfo={this.state} />
            </Route>
          </Form>
        </div>
      </div>
    );
  }
}

export default UploadProduct;
