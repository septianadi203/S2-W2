import '../style/style.css';
// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// import { json } from 'react-router-dom';

export default function SignIn(props) {
  const dataString = localStorage.getItem("UserSignUp");
  const dataUser = JSON.parse(dataString);

  const handleOnChange = (e) => {
    props.setUserSignIn({
      ...props.userSignIn,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (dataUser.userName === props.userSignIn.userName && dataUser.password === props.userSignIn.password) {
      e.preventDefault();
      props.setUserSignIn({
        ...props.userSignIn,
        isLogin: true,
        //
        listAs : dataUser.listAs,
      });
      localStorage.setItem("UserSignIn", JSON.stringify(props.userSignIn));
      alert("login succses!");
      props.onHide();
    } else {
      alert("email or password wrong!");
    }
  };

  const redirectSignup = (e) => {
    props.onHide();
    props.openSignup();
  };


  return (
    <>
    <div className='px-5'>
      <Modal 
        {...props}
        size="sm" aria-labelledby="contained-modal-title-vcenter"
        centered>
          <Modal.Title className='signmid fw-bold mt-4'>Sign In</Modal.Title>
        <Modal.Body>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="userName">
              <Form.Label className='fw-bold'>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                name="userName"
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label className='fw-bold'>Password</Form.Label>
              <Form.Control
               placeholder="Password"
                type="password"
                name="password"
                onChange={handleOnChange}
              />
            </Form.Group>
          <Button type='submit' className='w-100 mt-2' variant="primary">
            Submit
          </Button>
          <p className=''>Don't have an account ? Clik 
            <Button variant="link" onClick={(e) => redirectSignup(e)} className='ps-1 pt-1 pb-2'>Here</Button>
          </p>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
    </>
  );
}

