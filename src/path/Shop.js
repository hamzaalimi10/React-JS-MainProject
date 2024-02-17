import React, { useEffect, useState } from 'react'
import all_product from '../Assets/all_product'
import Products from '../Components/Products'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import set_categories from '../Assets/setcategories'


function Shop() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    setProducts(all_product)
    setCategories(set_categories)
  }, [])
  
  const handleClick = e => {
    const category = e.target.getAttribute('value')
    setProducts(all_product.filter(product => product.category == category))
  }

  return (
    <div className='container my-5'>
      <div className='categories mb-5 me-3 d-flex justify-content-end align-items-center'>
        <span style={{color: "grey"}} className='me-4'>Select category /</span>
        {
          (categories && categories.length > 0) ?
          categories.map(category => <Link onClick={handleClick} value={category.category} className='mx-2 p-2 category'>{category.name}</Link>)
          : ''
        }
      </div>
      <div className='row'>
        {
          (all_product)
          ? products.map((products, index) => <Products key={index} products={products}/>)
          : '404'
        }
      </div>
    </div>
  )
}

export default Shop