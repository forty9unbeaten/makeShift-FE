import React from "react";
import { getAllProducts } from "../../redux/actionCreators";
import { connect } from "react-redux";
import { Hero, ProductCard } from "../components/";
import "./Home.css";

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

      return sortedProducts.filter(
        product => sortedProducts.indexOf(product) < 4
      );
    }
    return [];
  };

  render() {
    const topFour = this.getFourMostPopularProducts();
    return (
      <React.Fragment>
        <Hero />
        <div className="Home__popularWrapper">
          <h3 className="Home__popularHead">POPULAR DESIGNS</h3>
          <div className="Home__popularCards">
            {topFour.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
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

const mapStateToProps = state => {
  return {
    products: state.allProducts.products
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
