import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export const ExampleCard = () => (
  <Card style={{width: '225px'}}>
    <Image style={{height:'225px', width:'225px', overflow: 'hidden', margin: 'auto'}} src='https://images-na.ssl-images-amazon.com/images/I/81B1N%2BCJfEL._SX425_.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Umbreon</Card.Header>
      <Card.Meta>
        <span className='category'>pokemon</span>
      </Card.Meta>
      <Card.Description>
        this is where the description goes. asdf e3imowe iae eof jao 
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