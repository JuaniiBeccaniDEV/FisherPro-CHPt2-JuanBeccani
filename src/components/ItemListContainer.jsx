import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container"
import data from "../data/product.json"
import {ItemList} from "./ItemList"

export const ItemListContainer =()=>{
    const [items,setItems] = useState ([]);
    const{ id} = useParams();

    useEffect(()=> {
        const get = new Promise((resolve,reject) =>{
           setTimeout (resolve(data), 2000);
         
        })
        get.then ((data)=>{
            if(id){
                const filteredData = data.filter((d) => d.category === id);
                setItems(filteredData);

            }else{
                setItems(data)
            }
        })
    

    },[id])

    return (
        <Container className="mt-4" >
            <ItemList items ={items} />


        </Container>
    )
}