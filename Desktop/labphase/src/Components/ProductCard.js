import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import ReactStars from 'react-stars'
import {  Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { delproduct } from '../JS/Actions/Actions'


const ProductCard = ({product}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={product.posterUrl} />
  <Card.Body>
    <Card.Title>{product.title}</Card.Title>
    <Card.Text>{product.description} </Card.Text>
  <Card.Text>{product.rate}</Card.Text>
  <ReactStars
  size={30}
  half={false}
  edit={false}
  count={5}
  value={product.rate}  
  />
   <Link to={`/productDetails/${product.id}`}>
          <Button variant="secondary">Description</Button>
        </Link>
          <Button variant="danger" onClick={handleShow}>Delete</Button>
       
  </Card.Body>
</Card>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this product !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={()=> dispatch(delproduct(product.id))} >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProductCard