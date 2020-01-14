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
     {products.map(product => (
              <ProductCard
                product = {product}
              />
            ))}
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
