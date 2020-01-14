import React from "react"
import { SideBar,ExampleCard, ProductCard} from '../components'
import { store } from "../../index.js";
import { connect } from "react-redux";
import { getAllProducts } from "../../redux/actionCreators";

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



  render() {
    let products = this.getProducts()
    console.log(products)
    if (products[0]){
      console.log('sadness')
    return (
      <>
     <SideBar/>
     <h1 style = {{width: '100%', margin: 'auto', marginLeft: '160px'}}>Catalog</h1>
     <div style ={{display: 'flex', flexWrap:'wrap', width: '75%', margin: 'auto', marginLeft: '160px'}}>
     <ExampleCard/>
     <ExampleCard/>
     <ProductCard product = {products[0]}/>
     <ProductCard product = {products[1]}/>
     <ProductCard product = {products[2]}/>
     <ProductCard product = {products[3]}/>
     <ProductCard product = {products[4]}/>
     <ProductCard product = {products[5]}/>
     <ProductCard product = {products[6]}/>
     <ProductCard product = {products[7]}/>
     </div>
     </>
    );
  }
  else{return (<h1>loading</h1>)}
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

// export default Category
// import React from "react";
// import { getAllProducts } from "../../redux/actionCreators";
// import { connect } from "react-redux";
// import { MenuBody, ProductCard } from "../components/index.js";

// class Home extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       products: []
//     };
//   }

//   componentDidMount = () => {
//     this.props.getAllProducts();
//   };

// //   componentDidUpdate = previousProps => {
// //     if (this.props.products && previousProps.products !== this.props.products) {
// //       this.setState({ products: this.props.products });
// //     }
// //   };

//   getFourMostPopularProducts = () => {
//     const { products } = this.state;

//     if (products.length > 0) {
//       let sortedProducts = products.sort((a, b) => {
//         if (a.ratingsCount > b.ratingsCount) {
//           return -1;
//         }
//         if (a.ratingsCount < b.ratingsCount) {
//           return 1;
//         }
//         return 0;
//       });

//       return sortedProducts.filter(product => {
//         if (sortedProducts.indexOf(product) < 4) {
//           return product;
//         }
//       });
//     }
//     return [];
//   };

//   render() {
//     const topFour = this.getFourMostPopularProducts();
//     return (
//       <React.Fragment>
//         <MenuBody />
//         <h3>Most Popular</h3>
//         <div className="Home-mostPopular">
//           {topFour.map(product => (
//             <ProductCard
//               key={product.id}
//               id={product.id}
//               name={product.productName}
//               description={product.productDescription}
//               imgs={product.productImgs}
//             />
//           ))}
//         </div>
//       </React.Fragment>
// //     );
// //   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllProducts: () => {
//       dispatch(getAllProducts());
//     }
//   };
// };

// const mapStateToProps = state => {
//   return {
//     products: state.allProducts.products
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
