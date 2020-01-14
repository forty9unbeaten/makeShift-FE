import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export const ExampleCard = () => (
  <Card style={{width: '225px', margin: '10px'}}>
    <Image style={{height:'225px', width:'225px', overflow: 'hidden', margin: 'auto'}} src='https://images-na.ssl-images-amazon.com/images/I/81B1N%2BCJfEL._SX425_.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Umbreon</Card.Header>
      <Card.Meta>
        <span className='category'>Dark</span>
      </Card.Meta>
      <Card.Description>
      Umbreon is the bestest dark doggo. They evolved as a result of exposure to the moon's waves. The rings on its body glow when excited.
      </Card.Description>
    </Card.Content>
  </Card>
)