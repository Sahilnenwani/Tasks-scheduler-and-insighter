import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";
import LinkedinSVG from '../../components/SVGs/LinkedinSVG';
import FacebookSVG from '../../components/SVGs/FacebookSVG';
import GoogleSVG from '../../components/SVGs/GoogleSVG';
import { Link, useNavigate } from 'react-router-dom';
// import { logInWithEmailAndPassword, auth } from '../../fire';
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from 'react-hook-form';
import LogSignButton from '../../components/Buttons/LogSignButton';
import "./Login.scss";
import SimpleLoader from '../../components/Loader/simpleLoader';


function LoginPage() {
  // const [email,setEmail]=useState();
  // const [password, setPassword] = useState();
  const [checkLoading, setCheckLoading] = useState(false)
  // const [user=null, loading, error] = useAuthState(auth);
  const { register, handleSubmit, formState: { errors } } = useForm({
    criteriaMode: "all"
  });

  const history = useNavigate();
  const onSubmit = data => {
    logedInuser(data)
  }

  // console.log(auth);
  // const loginUser = async (data) => {
  //   setCheckLoading(true);
  //   // await logInWithEmailAndPassword(data.email, data.password);
  //  await logedInuser(data);
  //   setCheckLoading(false);
  // }

  const logedInuser= async(data)=>{
     console.log("I am getting the request",data)
    setCheckLoading(true);
    const responce=await fetch("http://localhost:5000/auth/login",{
      method: 'POST', 
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username:data.FullName,password:data.password})
    })
    setCheckLoading(false);
    const json=await responce.json();
    console.log(json);
    if (json.status === "200") {
      localStorage.setItem('token',json.token)
      history("/home");
    }
  }

  // useEffect(() => {
  //   if (user) history("/home");
  // }, [user])


  return (
    <>
      {checkLoading ?
        <div className="loader-style">
          <SimpleLoader />
        </div>
        :
        <div className="total-size">
          <Row >
            <Col lg={4} sm={4} xs={12} className="disply-of-side-data-settng">
              <div className="side-singup total-size">
                <h1>Sign up</h1>
                <div>
                  <p className='signup-side-text'>To connect with us please sign up with your personal info</p> </div>
                <Link to="/signup" ><Button variant="outline-light" type="submit" className='style-button'><span className='text-style'>SignUp</span></Button></Link>
              </div>
            </Col>
            <Col xs={12} lg={8} sm={8}>
              <div className='login-page-items total-size'>
                <div className='Sign-in-text'>sign in</div>
                <div className='Icons-style'>
                  <div className='icon-style-svg'><FacebookSVG /></div>
                  <div className='icon-style-svg'><GoogleSVG></GoogleSVG></div>
                  <div className='icon-style-svg'><LinkedinSVG /></div>
                </div>
                <div className='login-text'>Login</div>
                <div className='center'>
                  <Form className='form-layout' onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3 form-input-field" controlId="formBasicTex">
                    <Form.Control type="text" placeholder="Full Name"  {...register("FullName", { required: "Full Name is required", minLength: {value:5, message:"Full name minimum length is 5" } })} />
                    <span className={errors.FullName?'error-messages':" "}>{errors.FullName?.message}</span>
                  </Form.Group>


                    <Form.Group className="mb-3 form-input-field" controlId="formBasicPassword">
                      {/* <PasswordSVG/> */}
                      <Form.Control type="password" placeholder="password"  {...register("password", { required: "password is required", minLength: { value: 8, message: "password minimum length is 8" } })} />
                      <span className={errors.password ? "error-messages" : " "}>{errors.password?.message}</span>
                    </Form.Group>
                    <LogSignButton text="login" />
                    {/* <Button variant="primary" type="submit" className='style-button' >
                <span className='text-style'>Login</span>
              </Button> */}
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      }


    </>




  )
}
export default LoginPage;
