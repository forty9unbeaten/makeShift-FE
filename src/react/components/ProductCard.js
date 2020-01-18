import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Rating } from "semantic-ui-react";
import "./ProductCard.css";

class ProductCard extends Component {
  getAverageRating = () => {
    const { ratings } = this.props.product;
    let total = ratings.reduce((accum, value) => accum + value, 0);
    return Math.floor(total / ratings.length);
  };

  render() {
    const {
      productName,
      productImgs,
      id,
      productCategory,
      productDescription,
      ratingsCount
    } = this.props.product;
    return (
      <div className="PC__card">
        <Link className="PC__linkWrapper" to={`details/${id}`}>
          <div
            className="PC__image"
            style={{ backgroundImage: `url(${productImgs[0]})` }}
          />
        </Link>
        <div className="PC__detailContainer">
          <Link to={`details/${id}`} className="PC__name">
            {productName}
          </Link>
          <div className="PC__category">{productCategory}</div>
          <div className="PC__description">{productDescription}</div>
        </div>
        <div className="PC__ratingsContainer">
          <Rating
            className="PC__ratings"
            disabled={true}
            rating={this.getAverageRating()}
            maxRating={5}
          />
          <div className="PC__ratingsCount">{ratingsCount} Ratings</div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
