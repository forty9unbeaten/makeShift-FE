import _ from "lodash";
import faker from "faker";
import React, { Component } from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import { getAllProducts } from '../../redux/index';
import { connect } from "react-redux";


const data = getAllProducts()

class SearchBar extends Component {

  state = { input: "", matches: null};

  handleChange = async (event) => {
    await this.setState({ input: event.target.value })
    let matchedProducts = []
    this.props.products.forEach(product => {
        if (product.productName.toLowerCase().includes(this.state.input.toLowerCase())) {
           matchedProducts.push({
            title: product.productName,
            description: product.productDescription,
            image: product.productImgs[0]
          })
        }
    });
    console.log(matchedProducts)
    if (matchedProducts.length > 0) {
      this.setState({ matches: matchedProducts })
    }
  };


  render() {

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            placeholder="Search products"
            onSearchChange={this.handleChange}
            value = {this.state.input}
            results = {this.state.matches}
          />
          
        </Grid.Column>
      </Grid>


    );



  }

}
function mapStateToProps(state) {
  return {
    products: state.allProducts.products
  };
}

export default connect(mapStateToProps)(SearchBar);