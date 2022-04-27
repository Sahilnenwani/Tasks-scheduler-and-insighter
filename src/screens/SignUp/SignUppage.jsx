import React,{useState,useEffect,useRef} from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";
import LinkedinSVG from '../../components/SVGs/LinkedinSVG';
import FacebookSVG from '../../components/SVGs/FacebookSVG';
import GoogleSVG from '../../components/SVGs/GoogleSVG';
import { Link,useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useAuthState } from "react-firebase-hooks/auth";
import { registerWithEmailAndPassword,auth } from '../../fire';


const SignUppage = () => {
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password, setPassword] = useState();
  const [user, loading, error] = useAuthState(auth);
  // const nameRef=useRef();
  // const emailRef=useRef();
  // const passwordRef=useRef();
  // const {signup}=useAuth();
  const history=useHistory();

 
  const register=()=>{
   if(!name){
     alert("please enter name")
   }
   console.log(name,email,password);
   registerWithEmailAndPassword(name,email,password);
 }
 
  useEffect(() => {
  if(loading) {
    console.log(name,email,password)
    console.log("loader of Signup page");
    return;
  }
    if (user) history.replace("/home")
  }, [user,loading])
  

  return (
    <>
      <div className="total-size">
        <Row >
          <Col lg={8} xs={12} >
            <div className='login-page-items total-size'>
              <div className='Sign-in-text'>Create Account</div>
              <div className='Icons-style'>
                <div className='icon-style-svg'><FacebookSVG/></div>
                <div className='icon-style-svg'><GoogleSVG></GoogleSVG></div>
                <div className='icon-style-svg'><LinkedinSVG/></div>
              </div>
              <div className='login-text'>or use your email for registration</div>
              <div className='center'>
                <Form className='form-layout'>
                <Form.Group className="mb-3 form-input-field" controlId="formBasicTex"> 
                    <Form.Control type="text" placeholder="Full Name" value={name}  onChange={(e) => setName(e.target.value)} required />
                  </Form.Group>

                  <Form.Group className="mb-3 form-input-field" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" value={email}  onChange={(e) => setEmail(e.target.value)} required />
                  </Form.Group>

                  <Form.Group className="mb-3 form-input-field" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} required />
                  </Form.Group>
                  <Button variant="primary" type="button" className='style-button'  onClick={register}>
                    <span className='text-style'>Sign up</span>
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
          <Col lg={4} xs={12} className="disply-of-side-data-settng">
            <div className="side-singup total-size">
              <h1>Wellcome Back!</h1>
              <div>
                <p className='signup-side-text'>To connect keep connected with us please login with your personal info</p> </div>
          <Link to="/"><Button variant="outline-light" type="submit" className='style-button'><span className='text-style' >Login</span></Button></Link>
            </div>
          </Col>
        </Row>
      </div>

    </>


  )
}

export default SignUppage;


