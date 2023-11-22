import React from 'react'
import all_product from '../Assets/all_product'
import Products from '../Components/Products'

function Shop() {
  return (
    <div className='container my-5'>
      <div className='category'></div>
      <div className='row'>
        {
          (all_product)
          ? all_product.map((products, index) => <Products key={index} products={products}/>)
          : '404'
        }
      </div>
    </div>
  )
}

export default Shop