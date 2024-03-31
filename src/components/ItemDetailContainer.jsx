import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import data from "../data/product.json";
import Card from 'react-bootstrap/Card';


export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const {id } = useParams();

   useEffect (() => {

    const get = new Promise ((resolve,reject) =>{
        setTimeout(()=>resolve(data),2000);

    });
    get.then((data)=>{
      const filteredData = data.find((d) =>d.id ===  id)
      setItem(filteredData) 
    })

   },[id]);
        

    
    if (!item) return ;

    return (
        <Container className="mt-5">
               <>
            <Card style={{ width: '28rem' }}>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Img variant="top" src={item.pictureUrl} />
        <Card.Subtitle className="mb-2 text-muted">{item.category}</Card.Subtitle>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>{item.price}</Card.Text>

      </Card.Body>
    </Card>
            
            </> 
               
     

        </Container>
         
            
    );
};
