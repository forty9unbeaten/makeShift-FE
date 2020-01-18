import React from "react";
import { ProductCard, Filter, Sorter, Loading } from "../components";
import { connect } from "react-redux";
import { getAllProducts } from "../../redux/actionCreators";
import "./Catalog.css";

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filter: "All",
      sort: "Most Popular"
    };
  }

  componentDidMount = () => {
    this.props.getAllProducts();
  };

  componentDidUpdate = previousProps => {
    if (this.props.products && previousProps.products !== this.props.products) {
      this.setState({ products: this.props.products });
    }
    if (previousProps.filter !== this.props.filter) {
      this.setState({ filter: this.props.filter });
    }
    if (previousProps.sort !== this.props.sort) {
      this.setState({ sort: this.props.sort });
    }
  };

  getFilteredProducts = () => {
    const { products, filter, sort } = this.state;
    if (products.length === 0) {
      return products;
    }
    let filteredProducts = products;
    if (filter !== "All") {
      filteredProducts = products.filter(
        product => product.productCategory === filter
      );
    }
    if (sort === "Most Popular") {
      filteredProducts = filteredProducts.sort((a, b) => {
        if (a.ratingsCount > b.ratingsCount) {
          return -1;
        }
        if (a.ratingsCount < b.ratingsCount) {
          return 1;
        }
        return 0;
      });
    } else if (sort === "Highest Rated") {
      const reducer = (accum, value) => accum + value;
      const getAverage = product => {
        return Math.floor(
          product.ratings.reduce(reducer, 0) / product.ratings.length
        );
      };
      filteredProducts = filteredProducts.sort((a, b) => {
        if (getAverage(a) > getAverage(b)) {
          return -1;
        }
        if (getAverage(a) < getAverage(b)) {
          return 1;
        }
        return 0;
      });
    }
    return filteredProducts;
  };

  render() {
    const filteredProducts = this.getFilteredProducts();
    return (
      <div className="Catalog__container">
        {this.state.products.length > 0 ? (
          <React.Fragment>
            <div className="Catalog__controls">
              <Filter />
              <Sorter />
            </div>
            <div className="Catalog__productContainer">
              {filteredProducts.map(product => {
                return <ProductCard key={product.id} product={product} />;
              })}
            </div>
          </React.Fragment>
        ) : (
          <Loading />
        )}
      </div>
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
    products: state.allProducts.products,
    filter: state.productFilter.category,
    sort: state.productSort.sort
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
