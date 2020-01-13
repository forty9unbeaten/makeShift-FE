import React from "react";
import { getAllProducts } from "../../redux/actionCreators";
import { connect } from "react-redux";
import { store } from "../../index.js";
import { MenuBody } from "../components/index.js";

class Home extends React.Component {
  componentDidMount = () => {
    this.props.getAllProducts();
  };

  render() {
    return (
      <React.Fragment>
        <MenuBody />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => {
      dispatch(getAllProducts());
      console.log(store.getState());
    }
  };
};

export default connect(null, mapDispatchToProps)(Home);
