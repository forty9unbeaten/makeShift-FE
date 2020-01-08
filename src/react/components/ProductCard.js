
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
