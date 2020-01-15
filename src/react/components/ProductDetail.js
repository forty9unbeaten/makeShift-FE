import React from "react";
import "./ProductDetail.css";
import { Carousel } from "antd";
import { Rating } from "semantic-ui-react";

class ProductDetail extends React.Component {
  averageRating = arr => {
    console.log(arr);
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return Math.ceil(total / arr.length);
  };

  onChange = (a, b, c) => {
    console.log(a, b, c);
  };

  render() {
    const avgRating = this.averageRating(this.props.ratings);
    return (
      <div id="wholeThing">
        <div id="pictureBox">
          <Carousel afterChange={this.onChange}>
            <div className="slide">
              <img alt="Primary" src={this.props.imgs[0]}></img>
            </div>
            <div className="slide">
              <img alt="secondary" src={this.props.imgs[1]}></img>
            </div>
          </Carousel>
        </div>
        <div id="description">
          <h2>{this.props.name}</h2>
          <p>{this.props.description}</p>
          <Rating
            icon="star"
            defaultRating={avgRating}
            maxRating={5}
            disabled
          />
          <span>{this.props.ratingsCount} ratings</span>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
