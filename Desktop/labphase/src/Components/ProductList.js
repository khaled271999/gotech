import React from 'react'
import ProductCard from './ProductCard'
import '../App.css'
import { useSelector } from 'react-redux'


const ProductList = ({ inputSearch}) => {
  const list = useSelector(state=> state.productReducer.productList)
  return (
    <div className='moviestyle'>

        {
        list.filter((product) => product.title.toUpperCase().includes(inputSearch.toUpperCase().trim()) || 
        product.description.toUpperCase().includes(inputSearch.toUpperCase().trim()  ))
        .map( product =>
      <ProductCard  product ={product} key={product.id}/>

      
        )}

    </div>
  )
}

export default ProductList