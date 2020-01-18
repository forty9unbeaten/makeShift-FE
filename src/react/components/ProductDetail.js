import React from "react";
import "./ProductDetail.css";
import { Rating } from "semantic-ui-react";

class ProductDetail extends React.Component {
  getAverageRating = () => {
    const { ratings } = this.props;
    const reducer = (accum, value) => accum + value;
    return Math.floor(ratings.reduce(reducer, 0) / ratings.length);
  };

  changeMainPicture = event => {
    const mainImage = document.getElementsByClassName("Detail__mainImg")[0];
    const subImages = Array.from(
      document.getElementsByClassName("Detail__subImg")
    );
    subImages.forEach(image => {
      image.classList.remove("activeImg");
    });
    event.target.classList.add("activeImg");
    mainImage.style.backgroundImage = event.target.style.backgroundImage;
  };

  render() {
    const { name, description, imgs, ratingsCount } = this.props;
    const avgRating = this.getAverageRating();
    return (
      <div className="Detail__container">
        <div className="Detail__imgContainer">
          <div
            className="Detail__mainImg"
            style={{ backgroundImage: `url(${imgs[0]})` }}
          />
          <div className="Detail__subImgContainer">
            {imgs.map(img => {
              return (
                <div
                  className={
                    imgs.indexOf(img) === 0
                      ? "Detail__subImg activeImg"
                      : "Detail__subImg"
                  }
                  key={imgs.indexOf(img)}
                  style={{ backgroundImage: `url(${img})` }}
                  onMouseOver={this.changeMainPicture}
                />
              );
            })}
          </div>
        </div>
        <div className="Detail__descContainer">
          <h1 className="Detail__name">{name}</h1>
          <div className="Detail__ratingsContainer">
            <Rating defaultRating={avgRating} maxRating={5} disabled />
            <text className="Detail__ratingsCount">{ratingsCount} Ratings</text>
          </div>
          <p className="Detail__descHeader">Description</p>
          <p className="Detail__desc">{description}</p>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
