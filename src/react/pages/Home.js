import React from "react";
import { getAllProducts } from "../../redux/actionCreators";
import { connect } from "react-redux";
import { MenuBody, ProductCard } from "../components/index.js";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount = () => {
    this.props.getAllProducts();
  };

  componentDidUpdate = previousProps => {
    if (this.props.products && previousProps.products !== this.props.products) {
      this.setState({ products: this.props.products });
    }
  };

  getFourMostPopularProducts = () => {
    const { products } = this.state;

    if (products.length > 0) {
      let sortedProducts = products.sort((a, b) => {
        if (a.ratingsCount > b.ratingsCount) {
          return -1;
        }
        if (a.ratingsCount < b.ratingsCount) {
          return 1;
        }
        return 0;
      });

      return sortedProducts.filter(product => {
        if (sortedProducts.indexOf(product) < 4) {
          return product;
        }
      });
    }
    return [];
  };

  render() {
    const topFour = this.getFourMostPopularProducts();
    return (
      <React.Fragment>
        <MenuBody />
        <h3>Most Popular</h3>
        <div className="Home-mostPopular">
          {topFour.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.productName}
              description={product.productDescription}
              imgs={product.productImgs}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => {
      dispatch(getAllProducts());
    }
  };
};

export default connect(null, mapDispatchToProps)(Home);
