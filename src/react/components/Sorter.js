import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import "./Sorter.css";
import { sortProducts, clearSort } from "../../redux/actionCreators";
import { connect } from "react-redux";

class Sorter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortText: "Most Popular"
    };
  }

  applySort = event => {
    const dropdownItems = document
      .getElementById("Sorter__menu")
      .querySelectorAll(".text");
    const selectedItem = event.currentTarget.querySelector(".text");
    dropdownItems.forEach(item => {
      item.classList.remove("activeFilter");
    });
    selectedItem.classList.add("activeFilter");
    const sortText = selectedItem.innerHTML;
    this.setState({ sortText });
    this.props.changeSort(sortText);
  };

  clearSort = () => {
    const dropdownItems = document
      .getElementById("Sorter__menu")
      .querySelectorAll(".text");
    dropdownItems.forEach(item => {
      item.classList.remove("activeFilter");
    });
    this.setState({ sortText: "Sort By" });
    this.props.clearSort();
  };

  componentDidMount = () => {
    const activeItem = document
      .getElementById("Sorter__menu")
      .getElementsByTagName("span")[0];
    activeItem.classList.add("activeFilter");
  };

  render() {
    return (
      <Dropdown text={this.state.sortText} button id="Sorter__button">
        <Dropdown.Menu id="Sorter__menu">
          <Dropdown.Item text="Most Popular" onClick={this.applySort} />
          <Dropdown.Item text="Highest Rated" onClick={this.applySort} />
          <Dropdown.Divider />
          <Dropdown.Item text="Clear" icon="x" onClick={this.clearSort} />
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

const mapStateToProps = state => {
  return {
    sorting: state.productSort.sort
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSort: sort => {
      dispatch(sortProducts(sort));
    },
    clearSort: () => {
      dispatch(clearSort());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sorter);
