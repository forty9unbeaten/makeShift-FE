import React from "react"
import { SideBar,ExampleCard} from '../components'

class Category extends React.Component {
  render() {
    return (
      <>
     <SideBar/>
     {/* <div style = {{float: 'left', width: '200px', height: '200px', backgroundColor: 'blue'}}></div> */}
     <h1 style = {{width: '75%', margin: 'auto', marginLeft: '160px'}}>Catalog</h1>
     <div style ={{display: 'flex', flexWrap:'wrap', width: '75%', margin: 'auto', marginLeft: '160px'}}>
     <ExampleCard/>
     <ExampleCard/>
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

export default Category
