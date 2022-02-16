import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import ErrorMsg from '../ErrorMsg.js/ErrorMsg';
import Loading from '../Loading/Loading'
import axios from 'axios'
import './Register.css'

const Register = () => {
  const history = useNavigate();

    const [loading,setLoading] = useState(false);
    const [message, setMsg] = useState(null);
    const [ user, setUser] = useState({
      name: "",
      email:"",
      password:"",
      confirmpassword: ""
    })

  const handlechange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }
  
  const register = () => {
    
    const { name, email, password, confirmpassword } = user
    if(!name || !email || !password || !confirmpassword){
      setMsg('Input field is Blank')
    }
    if(confirmpassword!==password) {
      setMsg('Password Does not Match !')
    }
    if( name && email && password && (password === confirmpassword)){
          setLoading(false);
          axios.post("http://localhost:5000/register", user).then( res => {
            alert(res.data.message)
            setLoading(true)
          })
          history('/');
      } 
    };
  return (
    
    <div className='Register'>
          <h1>Register Here</h1>
          {message && <ErrorMsg variant='danger'>{message}</ErrorMsg>}
          {loading && <Loading/>}
          <Form className='form'>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Name"
                            name = "name"
                            value={user.name}
                            onChange={handlechange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"
                            name = "email"
                            value={user.email}
                            onChange={handlechange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" 
                            name = "password"
                            value={user.password}
                             onChange={handlechange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="ConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password"
                            name = "confirmpassword"
                            value={user.confirmpassword}
                            onChange={handlechange}  
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={register}>
              Register
            </Button>
            <Row className="py-3">
              <Col>
                Already Registered ? <a href='/'>Log In</a> Here
              </Col>
            </Row>        
          </Form>
        </div>
  )
}

export default Register