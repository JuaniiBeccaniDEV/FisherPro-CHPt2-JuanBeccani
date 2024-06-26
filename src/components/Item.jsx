import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item =({item})=>{
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.pictureUrl} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Title>{item.category}</Card.Title>
            <Card.Text> {item.description}</Card.Text>
            <Card.Title>{item.price}</Card.Title>
           
             <Link to={`/item/${item.id}`}> <Button variant="primary">Comprar</Button></Link>

          </Card.Body>
        </Card>
      );
}
