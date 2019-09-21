import React from 'react';
import { Card } from 'react-bootstrap';
const PetCard = (props) => {
return (
<Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src={props.image}
/>
 <Card.Body>
   <Card.Title>{props.name}</Card.Title>
   <Card.Text>
   <p>{props.species}</p>
   <p>{props.size}</p>
   <p>{props.gender}</p>
   <p>{props.breed}</p>


   </Card.Text>
 </Card.Body>
</Card>
   )
};
export default PetCard;


// image={animal.url} species={animal.species} size={animal.size} gender={animal.gender} breed={animal.breeds.primary