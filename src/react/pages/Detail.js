import React from "react";
import { connect } from "react-redux";
import { ProductDetail, Loading } from "../components";
import { getSingleProduct, getAllProducts } from "../../redux/actionCreators";

class Detail extends React.Component {
  state = {
    product: null
  };

  componentDidMount = () => {
    this.props.getSingleProduct(this.props.match.params.id);
    if (!this.props.allProducts) {
      this.props.getAllProducts();
    }
  };

  componentDidUpdate = previousProps => {
    if (this.props.product && previousProps.product !== this.props.product) {
      this.setState({ product: this.props.product });
    }
  };

  render() {
    const { product } = this.state;

    return (
      <React.Fragment>
        {product ? (
          <ProductDetail
            name={product.productName}
            description={product.productDescription}
            imgs={product.productImgs}
            ratings={product.ratings}
            ratingsCount={product.ratingsCount}
          />
        ) : (
          <Loading />
        )}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSingleProduct: productId => {
      dispatch(getSingleProduct(productId));
    },
    getAllProducts: () => {
      dispatch(getAllProducts());
    }
  };
};

const mapStateToProps = state => {
  return {
    product: state.singleProduct.product,
    allProducts: state.allProducts.products
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

// export default Detail

// this.props.match.params.id
