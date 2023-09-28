import React, { useState } from 'react'
import { Button, Form, FormLabel, Modal } from 'react-bootstrap';

const AddProduct = ({add}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   


    // initialisation 

    const [title,setTitle] = useState("")

    const [description,setDescription] = useState("")

    const [rate,setRate] = useState("")

    const [posterUrl,setPosterUrl] = useState("")

    // Update

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleRate = (e) => {
        setRate(e.target.value)
    }

    const handlePosterUrl = (e) => {
        setPosterUrl(e.target.value)
    }

    const handleAdd = () => {
        let newMovie = { title , description , rate , posterUrl}
        add(newMovie)
        handleClose()
    }
    
  return (
    <div>

<Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FormLabel>Product Title</FormLabel>
            <Form.Control Type="text" onChange={(e)=>handleTitle(e)} value={title}/>
            <FormLabel>Description</FormLabel>
            <Form.Control Type="text" onChange={(e)=>handleDescription(e)} value={description}/>
            <FormLabel>Rate</FormLabel>
            <Form.Control Type="number" onChange={(e)=>handleRate(e)} value={rate}/>
            <FormLabel>PosterUrl</FormLabel>
            <Form.Control Type="url" onChange={(e)=>handlePosterUrl(e)}value={posterUrl}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleAdd()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default AddProduct