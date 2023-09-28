import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
    const {id} = useParams()

	const [product, setProduct] = useState({});

    const navigate = useNavigate();

    const list = useSelector(state=> state.productReducer.productList)
    

	useEffect(() => {
		const productDetails =  list.find((el) => el.id == id);
    
		setProduct(productDetails);
	}, [id, list]);

 
    
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div>
      <Button variant="primary"  onClick={()=> navigate(-1)}>Back to Product list</Button>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.posterUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
      </div>

      <div>
      <Card className="text-center">
        <Card.Header>{product.title}</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
      </div>


    </div>
  );
};

export default ProductDetails;
