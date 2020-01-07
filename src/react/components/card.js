import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export const CardExampleCard = () => (
  <Card>
    <Image style={{height:'290px', width:'290px', overflow: 'hidden'}} src='https://images-na.ssl-images-amazon.com/images/I/81B1N%2BCJfEL._SX425_.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Umbreon</Card.Header>
      <Card.Meta>
        <span className='category'>pokemon</span>
      </Card.Meta>
      <Card.Description>
        this is where the discription goes. asdf e3imowe iae eof jao s;f ia oe iae eifehi fehi ashei o 
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

//export default CardExampleCard



// <div class="ui card">
//   <div class="image">
//     <img src="/images/avatar2/large/kristy.png">
//   </div>
//   <div class="content">
//     <a class="header">Kristy</a>
//     <div class="meta">
//       <span class="date">Joined in 2013</span>
//     </div>
//     <div class="description">
//       Kristy is an art director living in New York.
//     </div>
//   </div>
//   <div class="extra content">
//     <span class="left floated like">
//       <i class="like icon"></i>
//       Like
//     </span>
//     <span class="right floated star">
//       <i class="star icon"></i>
//       Favorite
//     </span>
//   </div>
//   </div>
// </div>