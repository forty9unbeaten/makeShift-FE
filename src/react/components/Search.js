import React, { Component } from "react";
import { Search } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getSingleProduct } from "../../redux/actionCreators";
import "./Search.css";

class SearchBar extends Component {
  state = { input: "", matches: [] };

  handleChange = async event => {
    await this.setState({ input: event.target.value });
    let matchedProducts = [];
    this.props.products.forEach(product => {
      if (
        product.productName
          .toLowerCase()
          .includes(this.state.input.toLowerCase())
      ) {
        matchedProducts.push({
          title: product.productName,
          description: product.productDescription,
          image: product.productImgs[0],
          price: product.id
        });
      }
    });
    if (matchedProducts.length > 0) {
      this.setState({ matches: matchedProducts });
    } else {
      this.setState({ matches: [] });
    }
  };

  handleClick = event => {
    const productId = event.currentTarget.querySelectorAll(".price")[0]
      .innerHTML;
    this.props.getProduct(productId);
    this.props.history.push(`/details/${productId}`);
  };

  render() {
    return (
      <Search
        fluid
        placeholder="Search Catalog"
        onSearchChange={this.handleChange}
        value={this.state.input}
        results={this.state.matches}
        onResultSelect={this.handleClick}
        noResultsMessage="No Matches"
        noResultsDescription="There are no products in our catalog that match the search term"
      />
    );
  }
}
function mapStateToProps(state) {
  return {
    products: state.allProducts.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProduct: productId => {
      dispatch(getSingleProduct(productId));
    }
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchBar)
);
