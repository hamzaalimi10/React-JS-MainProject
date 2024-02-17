import { useLocalStorage } from '@uidotdev/usehooks'
import React, { useState } from 'react'
import remove from '../Assets/icons/cart_cross_icon.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const [cart, setCart] = useLocalStorage("cart", [])
    const [orders, setOrders] = useLocalStorage('orders', []) 
    const [show, setShow] = useState(false);
    const [data, setData] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isloggedin', null)
    const navigate = useNavigate()

    const handleRemove = e => {
        e.preventDefault()
        const id = e.target.getAttribute('item')
        setCart([...cart.filter((item, index) => index != id)])
    }

    const handleSubmit = e => {
        if(isLoggedIn != null){
            const order = {...data, products: cart, user: isLoggedIn.id}
            setOrders([...orders, order])
            setCart([])
            setShow(false)
            alert('Order is completed successfully')
            navigate('/dashboard')
        }else{
            alert('YOU DONT HAVE AN ACCOUNT!')
        }
    }

    const handleClose = () => setShow(false);

    const handleShow = () => {
        if(isLoggedIn == null) {
          alert('Please login first!')
          navigate('/login')
        } else {
          setShow(true);
        }
    }

  return (
    <div className='container my-5'>
        {
            (cart && cart.length > 0)
            ? <>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Products</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => (
                                <tr key={index}>
                                    <td><img src={item.image} style={{width: '60px'}} /></td>
                                    <td>{item.name}</td>
                                    <td>${item.new_price}</td>
                                    <td>{item.qty}</td>
                                    <td>${item.qty * item.new_price}</td>
                                    <td><a href='#' onClick={handleRemove}><img item={index} src={remove} /></a></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <div className='container my-5' style={{width: '50%', border: "1px solid silver", borderRadius: '30px', padding: '50px', color:'white'}}>
                    <h1 className='mb-5'>Cart Total</h1>
                    <div className='d-flex justify-content-between align-items-center' style={{borderBottom: "1px solid grey", height: '50px'}}>
                        <span>Subtotal</span>
                        <span>${cart.reduce((sum, item) => sum + (item.new_price * item.qty), 0)}</span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center' style={{borderBottom: "1px solid grey", height: '50px'}}>
                        <span>Shipping Fee</span>
                        <span>Free</span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center' style={{borderBottom: "3px solid grey", height: '50px'}}>
                        <span><b>Total</b></span>
                        <span><b>${cart.reduce((sum, item) => sum + (item.new_price * item.qty), 0)}</b></span>
                    </div>
                    <Button id='Btn' onClick={handleShow} className='mt-5'>
                        Proceed to Checkout
                    </Button>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form.Label htmlFor='fullname'>Fullname:</Form.Label>
                    <Form.Control type='text' id='fullname' onChange={(e) => setData({...data, fullname: e.target.value})} />
                    <Form.Label htmlFor='email'>Email:</Form.Label>
                    <Form.Control type='email' id='email' onChange={(e) => setData({...data, email: e.target.value})} />
                    <Form.Label htmlFor='phone'>Phone:</Form.Label>
                    <Form.Control type='phone' id='phone' onChange={(e) => setData({...data, phone: e.target.value})} />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
            : <p style={{color:'white'}}>Cart list is empty</p>
        }
    </div>
  )
}

export default Cart