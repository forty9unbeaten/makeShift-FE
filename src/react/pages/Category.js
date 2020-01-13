import React from "react"
import { SideBar,ExampleCard, ProductCard} from '../components'
import { store } from "../../index.js";
import { connect } from "react-redux";
import { getAllProducts } from "../../redux/actionCreators";

class Category extends React.Component {
  componentDidMount = () => {
    this.props.getAllProducts();
  };

  render() {
    let products = store.getState().allProducts.products
    console.log(products)
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
     <ExampleCard/>
     <ExampleCard/>
     <ExampleCard/>
     <ExampleCard/>
     <ExampleCard/>
     <ExampleCard/>
     <ExampleCard/>
     <ExampleCard/>
     
     </div>
     </>
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

export default connect(null, mapDispatchToProps)(Category);

// export default Category
