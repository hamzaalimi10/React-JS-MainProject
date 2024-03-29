import React from 'react'
import data_product from '../Assets/data'
import new_collections from '../Assets/new_collections'
import Products from '../Components/Products'
import firstimage from '../Assets/images/hero_image.png' 
import secondimage from '../Assets/images/exclusive_image.png'
import '../Assets/style.css'
import { Button } from 'react-bootstrap'

function Home() {

  return (
    <>
    {/* COLLECTIONS */}
      <div className='collections' id='background'>
        <div className='container'>
          <div className='d-flex justify-content-between'>
            <div className='img'>
              <img src={firstimage} alt='image1' width='500'/>
            </div>
            <div className='d-flex flex-column justify-content-center'>
              <h2 className='text-end' id='title'>HaEl New arrivals</h2>
              <h1 className='text-end' id='title'>your favourite <br /> collections <br /> ARE HERE !</h1>
            </div>
          </div>
        </div>
      </div>

    {/* LATEST PRODUCTS */}

      <div className='container'>
        <h2 className='text-center py-5' id='title'>-Latest Collections-</h2>
        <div className='row'>
          {
            (new_collections && new_collections.length > 0)
            ? new_collections.map((products, index) => <Products key={index} products={products} />)
            : "empty"
          }
        </div>
      </div>  

    {/* EXCLUSIVE OFFERS */}

    <div className='exclusive my-5' id='background'>
      <div className='container'>
          <div className='d-flex'>
            <div className='text d-flex flex-column justify-content-center w-75'>
              <h1 id='title'>EXCLUSIVE <br /> Offers For You</h1>
              <h4 id='title'>Only on <span id='brandName'>HaEl Shop</span></h4>
              <Button id='Btn' href='/shop' className='mt-4'>Shop <i className="bi bi-arrow-right"></i></Button>
            </div>
            <div className='img'>
              <img src={secondimage} alt='image2' />
            </div>
          </div>
      </div>
    </div>

    {/* POPULAR PRODUCTS */}

      <div className='container'>
        <h1 id='popular' className='text-center my-5'>POPULAR PRODUCTS</h1>
        <div className='row'>
          {
            (data_product) 
            ?
            data_product.map((products, index) => <Products key={index} products={products} />)
            : 'Empty'
          }
        </div>
      </div>
    </>
  )
}

export default Home