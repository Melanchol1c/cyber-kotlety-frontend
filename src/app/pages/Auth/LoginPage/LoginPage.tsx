import React from 'react';
import { useDispatch } from 'react-redux';
import useForm from 'react-hook-form';

import { login } from '../store/actions';
import { Button, Form } from 'react-bootstrap';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const handleLogin = ({ username, password }) => {
    dispatch(login(username, password));
  };

  return (
    <div className="auth-form-wrapper">
      <Form onSubmit={handleSubmit(handleLogin)}>
        <h3 className="auth-form-title">
          Login to <b>Cyber Kotlety</b>
        </h3>
        <input
          placeholder="Username"
          className="form-control"
          type="text"
          name="username"
          ref={register({ required: true })}
        />
        <input
          placeholder="Password"
          className="form-control"
          type="password"
          name="password"
          ref={register({ required: true })}
        />

        <button className="btn outline-btn" type="submit">
          LOGIN
        </button>
      </Form>
    </div>
  );
};

export default LoginPage;
