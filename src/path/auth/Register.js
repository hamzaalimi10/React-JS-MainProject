import { useLocalStorage } from '@uidotdev/usehooks';
import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [users, setUsers] = useLocalStorage('users', [])
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isloggedin', null)
  const navigate = useNavigate()

  
  const handleRegister = e => {
    e.preventDefault()
    const form = e.target.elements
    const user = {
      fullname: form[0].value,
      email: form[1].value,
      password: form[2].value
    }
    
    if(users.filter(ls_user => ls_user.email == user.email).length > 0){
      alert(`${user.email} is already in use`)
    }else {
      setUsers([...users, user])
      setIsLoggedIn(user)
      navigate('/')
    }
  }

  return (
    <section className='my-5'>
      <div className='container'>
        <Form className='mx-auto w-50' onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Label>Fullname:</Form.Label>
            <Form.Control type="text" required placeholder="Enter Fullname" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" required placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required placeholder="Password" />
          </Form.Group>
          <Button id='Btn' type="submit">
            Register
          </Button>
        </Form>
      </div>
    </section>
  )
}

export default Register