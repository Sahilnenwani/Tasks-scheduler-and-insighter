import React,{useState,useEffect} from 'react';
import {  Form, Button, Row, Col } from "react-bootstrap";
import LinkedinSVG from '../../components/SVGs/LinkedinSVG';
import FacebookSVG from '../../components/SVGs/FacebookSVG';
import GoogleSVG from '../../components/SVGs/GoogleSVG';
import EmailSVG from '../../components/SVGs/EmailSVG';
import PasswordSVG from '../../components/SVGs/PasswordSVG';
import { Link,useHistory } from 'react-router-dom';
import { logInWithEmailAndPassword,auth } from '../../fire';
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.scss";


function LoginPage() {
  const [email,setEmail]=useState();
  const [password, setPassword] = useState();
  const [user, loading, error] = useAuthState(auth);
  const history=useHistory();  

  useEffect(() => {
    if(loading){
      console.log("loader will be there of login page")
      return;
    }
     if(user) history.replace("/home")
  },[loading,user])
  
  return (
    <>
      <div className="total-size">
        <Row >
          <Col lg={4} sm={4} xs={12} className="disply-of-side-data-settng">
            <div className="side-singup total-size">
              <h1>Sign up</h1>
              <div>
                <p className='signup-side-text'>To connect with us please sign up with your personal info</p> </div>
             <Link to="/signup" ><Button variant="outline-light" type="submit" className='style-button'><span className='text-style' >SignUp</span></Button></Link>
            </div>
          </Col>
          <Col xs={12} lg={8} sm={8}>
            <div className='login-page-items total-size'>
              <div className='Sign-in-text'>sign in</div>
              <div className='Icons-style'>
                <div className='icon-style-svg'><FacebookSVG/></div>
                <div className='icon-style-svg'><GoogleSVG></GoogleSVG></div>
                <div className='icon-style-svg'><LinkedinSVG/></div>
              </div>
              <div className='login-text'>Login</div>
              <div className='center'>
                <Form className='form-layout'>
                  <Form.Group className="mb-3 form-input-field" controlId="formBasicEmail">
                    <EmailSVG/>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                  </Form.Group>

                  <Form.Group className="mb-3 form-input-field" controlId="formBasicPassword">
                   {/* <PasswordSVG/> */}
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                  </Form.Group>
                  <Button variant="primary" type="button" className='style-button' onClick={()=> logInWithEmailAndPassword(email,password)}>
                    <span className='text-style'>Login</span>
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>

    </>




  )
}
export default LoginPage;
