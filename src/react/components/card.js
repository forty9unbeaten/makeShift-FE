import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export const ExampleCard = () => (
  <Card>
    <Image style={{height:'290px', width:'290px', overflow: 'hidden'}} src={product.productImgs[0]} wrapped ui={false} />
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