import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      
      <h1>Error 404 .. ! Page Not found</h1>
      <Link  as={Link} to="/" >
  <Button>Back</Button>
</Link>
    
    </div>
  )
}

export default Error