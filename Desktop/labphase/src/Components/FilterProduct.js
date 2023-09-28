import React from 'react'
import { Form } from 'react-bootstrap'

const FilterProduct = ({inputSearch , setInputSearch}) => {
  return (
    <div>

<Form.Control type="text" placeholder="Searsh"  
 onChange = {(e) => setInputSearch(e.target.value)} 
 value ={inputSearch}/>
    </div>
  )
}

export default FilterProduct