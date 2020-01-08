import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export const ExampleCard = () => (
  <Card>
    <Image style={{height:'290px', width:'290px', overflow: 'hidden'}} src='https://images-na.ssl-images-amazon.com/images/I/81B1N%2BCJfEL._SX425_.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Umbreon</Card.Header>
      <Card.Meta>
        <span className='category'>pokemon</span>
      </Card.Meta>
      <Card.Description>
        this is where the description goes. asdf e3imowe iae eof jao s;f ia oe iae eifehi fehi ashei o 
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