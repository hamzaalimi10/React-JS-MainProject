import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import React from 'react'

function Products({ products }) {
  return (
    <div className='col-3 mb-4'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={products.image} />
            <Card.Body>
                <Card.Text>{products.name}</Card.Text>
                <Card.Text>
                  <span className="badge rounded-pill text-bg-secondary"><del>${products.old_price}</del></span>
                  <br />
                  <span className="badge text-bg-success">${products.new_price}</span>
                </Card.Text>
                <Button variant="outline-primary" href={`/product/${products.id}`} >Order</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Products