import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export class ProductCard extends Component {
  render() {
    return (
      <Card style={{ width: "225px" }}>
        <Image
          style={{
            height: "225px",
            width: "225px",
            overflow: "hidden",
            margin: "auto"
          }}
          src={this.props.imgs[0]}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>
            <Link to={`/details/${this.props.id}`}>{this.props.name}</Link>
          </Card.Header>
          <Card.Meta>
            <span className="category">{this.props.category}</span>
          </Card.Meta>
          <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default ProductCard;
