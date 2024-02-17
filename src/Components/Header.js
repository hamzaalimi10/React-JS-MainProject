import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Assets/icons/logo.png'
import '../Assets/style.css'
import { useLocalStorage } from '@uidotdev/usehooks';
import { useNavigate } from "react-router-dom";

function Header() {
  const [cart, setCart] = useLocalStorage("cart", [])
  const [isLoggedin, setIsLoggedin] = useLocalStorage("isloggedin", null)
  const navigate = useNavigate()

  const handleLogout = () => {
    setIsLoggedin(null)
    navigate("/");
  }

  const handleDashboard = e => {
    if(isLoggedin == null){
      alert('Please Login First!')
      navigate('/login')
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <Navbar expand="lg"  id="navbar" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/" className='me-0 w-25'>
          <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
          />{' '}
          HaEl Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-center w-75">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/dashboard" onClick={handleDashboard}>Dashboard</Nav.Link>
            <NavDropdown title={(isLoggedin == null) ? "Guest" : isLoggedin.fullname} id="basic-nav-dropdown">
              {
                (isLoggedin == null)
                ? <>
                  <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                  <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
                </>
                : <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              }
            </NavDropdown>
          </Nav>
          <Nav className='d-flex justify-content-end w-25'>
            <Nav.Link href="/cart">
              <i class="fa-solid fa-cart-shopping fa-xl"></i>
              {
                (cart.length > 0)
                && <span class="top-0 start-100 translate-middle badge rounded-pill bg-danger">{cart.length}</span>
              }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header