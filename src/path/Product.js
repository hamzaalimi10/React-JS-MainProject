import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import all_products from '../Assets/all_product'
import star from '../Assets/icons/star_icon.png'
import hStar from '../Assets/icons/star_dull_icon.png'
import { Button } from 'react-bootstrap'
import '../Assets/style.css'
import { useLocalStorage } from '@uidotdev/usehooks'

function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [qty, setQty] = useState(0)
  const [cart, setCart] = useLocalStorage("cart", [])

  useEffect(() => {
    const array = all_products.filter(n => n.id == id)
    setProduct(...array)
  }, [])

  const handleChange = e => {
    setQty(parseInt(e.target.value))
  }

  const handleCart = e => {
    if(qty > 0){
      const items = cart.filter(n => n.id == product.id)

      if(items.length > 0){
        items[0].qty += parseInt(qty)
        setCart([...cart.filter(n => n.id != product.id), ...items])
      } else {
        setCart([{...product, qty: parseInt(qty)}, ...cart])
      }
  
      alert('product was added successfully')
      setQty(0)
    }
  }

  return (
    <div className='container my-5 d-flex justify-content-center'>
      {/* {
        (product && product.length > 0)
        ? <> */}
        <div className='image w-50 d-flex justify-content-center'>
          <img src={product.image} />
        </div>
        <div className='info d-flex flex-column justify-content-center'>
          <h3>{product.name}</h3>

          <div className='reviews my-3'>
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={hStar} />
            (122)
          </div>

          <div className='price d-flex flex-row align-items-center my-3'>
            <span className='badge text-bg-danger mx-2'><del>${product.old_price}</del></span>
            <span className='badge text-bg-success' style={{fontSize: '15px'}}>${product.new_price}</span>
          </div>

          <div className='qty d-flex flex-row align-items-center my-3'>
            <span className='me-3'>Select quantity:</span>
            <input type='number' value={qty} max={122} min={0} onChange={handleChange} />
          </div>

          <Button id='AddToCart' className='my-3' onClick={handleCart}>Add to Cart</Button>
        </div>
        {/* </>
        : '404'
      } */}
    </div>
  )
}

export default Product