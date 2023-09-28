import React, { useState } from 'react'
import ProductList from '../Components/ProductList'
import AddProduct from '../Components/AddProduct'
import  {products}  from '../Data'
import FilterProduct from '../Components/FilterProduct'

const Home = () => {

  const [productsData , setProductsData] =useState(products)
  const [inputSearch , setInputSearch] = useState("")


  const add = (newProduct) => {
    setProductsData([...productsData,newProduct])}
  return (
    <div>
    <FilterProduct inputSearch = {inputSearch} setInputSearch ={setInputSearch}/>
    <ProductList inputSearch ={inputSearch} />
    <AddProduct add={add}/>   
    </div>
  )
}

export default Home