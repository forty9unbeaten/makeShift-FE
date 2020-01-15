import React from "react";
import { SideBar, ProductCard } from "../components";
import { connect } from "react-redux";
import { getAllProducts } from "../../redux/actionCreators";
import "./Category.css";

class Category extends React.Component {
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

  getProducts = () => {
    const { products } = this.state;

    if (products.length > 0) {
      return products;
    }
    return [];
  };
  
  getFilters = () => {
    const { filters } = this.state;

    if (filters.length > 0) {
      return filters;
    }
    return [];
  };

  filterProducts = (categories, products) => {
    let output = []
    for (let i = 0; i < categories.length; i++){
      for (let k = 0; k < products.length; k++){
        if (categories[i] === products[k].productCategory) {
          output.push(products[k])
        }
      }
    }
    return output
  }




  render() {
    let products = this.getProducts();
    let categories = ['Hardware']
    let filtered = this.filterProducts(categories, products)
    console.log(products);
    if (products[0]) {
      return (
        <>
          <div className="catalog-grid">
            <SideBar />
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                gridColumnStart: "2",
                gridColumnEnd: "3",
                marginTop: "1em"
              }}
            >
              CATALOG
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                width: "100%",
                gridColumnStart: "2",
                gridColumnEnd: "3",
                marginBottom: "3em"
              }}
            >
              {products.map(product => (
                <ProductCard product={product} />
              ))}
            </div>
          </div>
        </>
      );
    } else {
      return <h1>loading</h1>;
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Category);
