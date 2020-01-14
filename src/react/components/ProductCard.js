import React from "react";
import { Card, Image } from "semantic-ui-react";
import { store } from "../../index.js";
// const product = props.product;
// allProducts.products
const ProductCard = props => {
  return (
    <Card style={{ width: "225px", margin: '10px' }}>
      <Image
        style={{
          height: "225px",
          width: "225px",
          overflow: "hidden",
          margin: "auto"
        }}
        src={props.product.productImgs[0]}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{props.product.productName}</Card.Header>
        <Card.Meta>
          <span className="category">{props.product.productCategory}</span>
        </Card.Meta>
        <Card.Description>{props.product.productDescription}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span class="left floated like">
          <i class="like icon"></i>
          Like
        </span>
        <span class="right floated star">
          <i class="star icon"></i>
          Favorite
        </span>
      </Card.Content>
    </Card>
  );
};

export default ProductCard;


