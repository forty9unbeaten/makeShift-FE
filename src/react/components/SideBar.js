import React, { Component } from "react";
import { Sidebar, Menu, Checkbox, Divider } from "semantic-ui-react";
import "./SideBar.css";
import { connect } from "react-redux";
import { filterCategory } from "../../redux/actionCreators";

class SideBar extends Component {
  renderCheckboxes = () => {
    if (this.props.products) {
      let categories = [];
      this.props.products.forEach(product => {
        if (!categories.includes(product.productCategory)) {
          categories.push(product.productCategory);
        }
      });

      return categories.map(category => {
        return (
          <React.Fragment>
            <input
              type="checkbox"
              name={category}
              onChange={this.handleCheck}
            />
            <label for={category}>{category}</label>
            <br />
          </React.Fragment>
        );
      });
    }
  };

  handleCheck = () => {
    const boxes = document.querySelectorAll("input");
    let categories = [];
    boxes.forEach(box => {
      if (box.checked) {
        categories.push(box.name);
      }
    });
    this.props.applyFilters(categories);
  };

  render() {
    return (
      <div id="sidebar">
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible
          width="thin"
          style={{
            backgroundColor: "white",
            borderRight: "1px solid lightgray"
          }}
        >
          <div style={{ height: "73px" }} />
          <h3 className="filter">Filter By</h3>
          <Divider />
          {this.renderCheckboxes()}
        </Sidebar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.allProducts.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    applyFilters: categories => {
      dispatch(filterCategory(categories));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
