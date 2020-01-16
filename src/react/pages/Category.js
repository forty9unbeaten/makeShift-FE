import React from "react";
import { SideBar, ProductCard } from "../components";
import { connect } from "react-redux";
import { getAllProducts, filterCategory } from "../../redux/actionCreators";
import "./Category.css";

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      filters: []
    };
  }

  componentDidMount = () => {
    this.props.getAllProducts();
    this.props.filterCategory();
  };

  componentDidUpdate = previousProps => {
    if (this.props.products && previousProps.products !== this.props.products) {
      this.setState({ products: this.props.products });
    }
    if (this.props.filters && previousProps.filters !== this.props.filters) {
      this.setState({ filters: this.props.filters });
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
    let output = [];
    for (let i = 0; i < categories.length; i++) {
      for (let k = 0; k < products.length; k++) {
        if (categories[i] === products[k].productCategory) {
          output.push(products[k]);
        }
      }
    }
    if (!categories[0]) {
      output = products;
    }
    return output;
  };

  render() {
    let products = this.getProducts();
    let categories = this.getFilters();

    let filtered = this.filterProducts(categories, products);
    if (products[0]) {
      return (
        <>
          <div className="catalog-grid">
            <div className="sidebar-wrapper">
              <SideBar />
            </div>
            <div className="catalog-wrapper">
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
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
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
    },

    filterCategory: () => {
      dispatch(filterCategory());
    }
  };
};

const mapStateToProps = state => {
  return {
    products: state.allProducts.products,
    filters: state.filters.categories
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
