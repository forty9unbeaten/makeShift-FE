import React from "react";
import { ProductCard, Filter, Sorter } from "../components";
import { Dimmer, Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import { getAllProducts, filterCategory } from "../../redux/actionCreators";
import "./Catalog.css";

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filter: null,
      sort: null
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

  render() {
    return (
      <div className="Catalog__container">
        {this.state.products.length > 0 ? (
          <div className="Catalog__controls">
            <Filter />
            <Sorter />
          </div>
        ) : (
          <Dimmer active inverted>
            <Loader inverted>Loading...</Loader>
          </Dimmer>
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
