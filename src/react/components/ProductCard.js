<<<<<<< HEAD
import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const product = props.product
export const ProductCard = () => (
  <Card style={{width: '225px'}}>
    <Image style={{height:'225px', width:'225px', overflow: 'hidden', margin: 'auto'}} src={product.productImgs[0]} wrapped ui={false} />
    <Card.Content>
<Card.Header>{product.productName}</Card.Header>
      <Card.Meta>
<span className='category'>{product.productCategory}</span>
      </Card.Meta>
      <Card.Description>
        {product.productDescription}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <span class="left floated like">
      <i class="like icon"></i>
      Like
     </span>
     <span class="right floated star">
       <i class="star icon"></i>
      Favorite
     </span>
    </Card.Content>
  </Card>
)


// {
//   "product": {
//     "productId": 0,
//     "productName": "string",
//     "productDescription": "string",
//     "productImgs": [
//       "string"
//     ],
//     "productCategory": "string",
//     "ratingsCount": 0,
//     "ratings": [
//       0
//     ]
//   },
//   "statusCode": 0
// }
=======
import React from "react";
import { Card, Image } from "semantic-ui-react";

const ProductCard = () => (
  <Card>
    <Image
      style={{ height: "290px", width: "290px", overflow: "hidden" }}
      src="https://images-na.ssl-images-amazon.com/images/I/81B1N%2BCJfEL._SX425_.jpg"
      wrapped
      ui={false}
    />
    <Card.Content>
      <Card.Header>Umbreon</Card.Header>
      <Card.Meta>
        <span className="category">pokemon</span>
      </Card.Meta>
      <Card.Description>
        this is where the description goes. asdf e3imowe iae eof jao s;f ia oe
        iae eifehi fehi ashei o
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <span class="left floated like">
        <i class="like icon"></i>
        Like
      </span>
      <span class="right floated star">
        <i class="star icon"></i>
        Favorite
      </span>
    </Card.Content>
  </Card>
);

export default ProductCard;
>>>>>>> 03735f551e854064991fa4c82c0c5b633f76a017
