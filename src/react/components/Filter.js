import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { filterProducts, clearFilter } from "../../redux/actionCreators";
import "./Filter.css";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      filter: null,
      filterText: "Filter By Category"
    };
  }

  applyFilter = event => {
    const dropdownItems = document
      .getElementById("Filter__menu")
      .querySelectorAll(".text");
    const selectedItem = event.currentTarget.querySelector(".text");
    dropdownItems.forEach(item => {
      item.classList.remove("activeFilter");
    });
    selectedItem.classList.add("activeFilter");
    const filterText = selectedItem.innerHTML;
    this.setState({ filterText });
    this.props.applyFilter(filterText);
  };

  clearFilter = () => {
    const dropdownItems = document
      .getElementById("Filter__menu")
      .querySelectorAll(".text");
    dropdownItems.forEach(item => {
      item.classList.remove("activeFilter");
    });
    this.setState({ filterText: "Filter By Category" });
    this.props.clearFilter();
  };

  componentDidMount = () => {
    const { products, filter } = this.props;
    let categories = [];
    products.forEach(product => {
      if (!categories.includes(product.productCategory)) {
        categories.push(product.productCategory);
      }
    });
    this.setState({ categories, filter });
  };

  render() {
    const { categories } = this.state;
    return (
      <Dropdown
        icon="filter"
        text={this.state.filterText}
        button
        scrolling
        className="icon"
        id="Filter__button"
      >
        <Dropdown.Menu id="Filter__menu">
          <Dropdown.Header icon="tags" content="Categories" />
          <Dropdown.Divider />
          {categories.map(category => {
            return (
              <Dropdown.Item
                text={category}
                key={category}
                onClick={this.applyFilter}
              />
            );
          })}
          <Dropdown.Divider />
          <Dropdown.Item icon="x" text="Clear" onClick={this.clearFilter} />
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.allProducts.products,
    filter: state.productFilter.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    applyFilter: category => {
      dispatch(filterProducts(category));
    },
    clearFilter: () => {
      dispatch(clearFilter());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
