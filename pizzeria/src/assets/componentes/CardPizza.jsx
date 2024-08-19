import React from 'react';
import { Card, Button } from 'react-bootstrap';

function CardPizza({ name, img, ingredients, price }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Pizza {name}</Card.Title>
        <Card.Text>Ingredientes:
        <Card.Text>
          {ingredients}
        </Card.Text>
        </Card.Text>
        <Card.Text style={{fontSize:'1.3em', fontWeight:'500'}}>
        Precio: {price}
        </Card.Text>
        <Button variant="outline-secondary" style={{marginRight:'1em'}}>Ver más</Button>
        <Button variant="dark">Añadir 🛒</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPizza;
