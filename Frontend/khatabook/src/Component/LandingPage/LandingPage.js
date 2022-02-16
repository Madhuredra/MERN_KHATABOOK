import React, { useState } from 'react'
import './LandingPage.css'
import TypingEffect from '../TypingEffect/TypingEffect';
import { Form , Button, Row , Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading';


const LandingPage = ({setLoginUser}) => {
    const history = useNavigate()
    const [loading,setLoading] = useState(false);

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login =()=>{
        axios.post("http://localhost:5000/",user).then(res=>{alert(res.data.message)
            setLoginUser(res.data.user)
        })
        history('/homepage')
    }
    
  return (
    <div className='MainScreen'>
        <div className='InnerDiv'>
            <div className='headinDetails'>
                <h1>Welcome To , </h1>
                <h1>Your <TypingEffect/></h1>
                <ul>
                    <li><p>Here you can keep your records</p></li>
                    <li><p>A best platform for your digital <span style={{color:"blue"}}><a href='/about'>KHATABOOK</a></span></p></li>
                </ul>
            </div>
            <div className='LogInDetails'>
                <div className='logIn'>
                    <div>
                        <h1>Log In</h1>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <Form>
                        {loading && <Loading/>}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control size='lg' type="email" name="email" value={user.email} placeholder="Enter email" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control size='lg' type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={login}>
                            LOG IN
                        </Button>
                        <Row className="py-3">
                        <Col>
                            New Customer ? <a href='/register'>Register</a> Here
                        </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage