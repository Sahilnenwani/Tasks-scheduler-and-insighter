import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";
import LinkedinSVG from '../../components/SVGs/LinkedinSVG';
import FacebookSVG from '../../components/SVGs/FacebookSVG';
import GoogleSVG from '../../components/SVGs/GoogleSVG';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useAuthState } from "react-firebase-hooks/auth";
import { registerWithEmailAndPassword, auth } from '../../fire';
import simpleLoader from '../../components/Loader/simpleLoader';
import { useForm } from 'react-hook-form';
import LogSignButton from '../../components/Buttons/LogSignButton';




const SignUppage = () => {
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, loading, error] = useAuthState(auth);
  const { register, handleSubmit, formState: { errors } } = useForm({
    criteriaMode: "all"
  });
  const onSubmit = data => {
    registeruser(data)
  }

  const history = useHistory();


  const registeruser = (data) => {
    if (!data.FullName) {
      alert("please enter name")
    }
    registerWithEmailAndPassword(data.FullName, data.email, data.password);
  }

  useEffect(() => {
    // if (loading) {
    //   <simpleLoader></simpleLoader>
    //   return;
    // }
    if (user) history.replace("/home")
  }, [user, loading])


  return (
    <>
      <div className="total-size">
        <Row >
          <Col lg={8} xs={12} >
            <div className='login-page-items total-size'>
              <div className='Sign-in-text'>Create Account</div>
              <div className='Icons-style'>
                <div className='icon-style-svg'><FacebookSVG /></div>
                <div className='icon-style-svg'><GoogleSVG></GoogleSVG></div>
                <div className='icon-style-svg'><LinkedinSVG /></div>
              </div>
              <div className='login-text'>or use your email for registration</div>
              <div className='center'>
                <Form className='form-layout' onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3 form-input-field" controlId="formBasicTex">
                    <Form.Control type="text" placeholder="Full Name"  {...register("FullName", { required: "Full Name is required", minLength: {value:5, message:"Full name minimum length is 5" } })} />
                    <span className={errors.FullName?'error-messages':" "}>{errors.FullName?.message}</span>
                  </Form.Group>

                  <Form.Group className="mb-3 form-input-field" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email"   {...register("email", { required: "Email is required", minLength: { value: 8, message: "email minimum length is 8" }, maxLength: 20 })} />
                    <span className={errors.email? "error-messages" : " "}>{errors.email?.message}</span>
                  </Form.Group>

                  <Form.Group className="mb-3 form-input-field" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="password"   {...register("password", { required: "password is required", minLength: { value: 8, message: "password minimum length is 8" } })} />
                    <span className={errors.password?"error-messages":" "}  >{errors.password?.message}</span>
                  </Form.Group>
                  <LogSignButton text="Sign up"/>
                 
                </Form>
              </div>
            </div>
          </Col>
          <Col lg={4} xs={12} className="disply-of-side-data-settng">
            <div className="side-singup total-size">
              <div>
                <h1>Wellcome Back!</h1>
              </div>
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


