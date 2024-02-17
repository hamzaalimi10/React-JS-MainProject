import { useLocalStorage } from '@uidotdev/usehooks'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()
  const [isLoggedin, setIsLoggedin] = useLocalStorage("isloggedin", null)
  const [orders, setOrders] = useLocalStorage('orders', []) 
  const [myOrders, setMyOrders] = useState([])


  useEffect(() => {
    if(isLoggedin == null){
      navigate('/login')
    }else{
      setMyOrders(orders.filter(orders => orders.user == isLoggedin.id))
    }
  }, [])

  return (
    <div className='container d-flex justify-content-center my-5'>
      {
        (myOrders.length > 0) ?
        <table className='table w-75'>
          <thead>
            <tr>
              <td>Name</td>
              <td>email</td>
              <td>Phone</td>
              <td>Products</td>
            </tr>
          </thead>
          <tbody>
            {
              myOrders.map((order,index) => (
                <tr key={index}>
                  <td>{order.fullname}</td>
                  <td>{order.email}</td>
                  <td>{order.phone}</td>
                  <td>{order.products.map((products, index) => <p key={index}>{index+1}. {products.name}</p>)}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        : '0 orders'
      }
    </div>
  )
}

export default Dashboard