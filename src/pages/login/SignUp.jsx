import React, { useState } from 'react';
import { auth } from './firebase';

const SignUp = () => {
  const [formDataSignUp, setFormDataSignUp] = useState({
    email: '',
    password: ''
  });
  const [formDataSignIn, setFormDataSignIn] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);

  const handleChangeSignUp = (e) => {
    setFormDataSignUp({ ...formDataSignUp, [e.target.name]: e.target.value });
  }

  const handleChangeSignIn = (e) => {
    setFormDataSignIn({ ...formDataSignIn, [e.target.name]: e.target.value });
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(formDataSignUp.email, formDataSignUp.password);
      console.log('User signed up successfully:', userCredential.user);
      // Optionally, you can redirect the user or perform other actions upon successful sign-up
    } catch (error) {
      console.error('Error signing up:', error.message);
      setError(error.message);
    }
  }

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.signInWithEmailAndPassword(formDataSignIn.email, formDataSignIn.password);
      console.log('User signed in successfully:', userCredential.user);
      // Optionally, you can redirect the user or perform other actions upon successful sign-in
    } catch (error) {
      console.error('Error signing in:', error.message);
      setError(error.message);
    }
  }

  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={handleSignUp}>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={formDataSignUp.email}
            onChange={handleChangeSignUp}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={formDataSignUp.password}
            onChange={handleChangeSignUp}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>

      <hr />

      <h3>Sign In</h3>
      <form onSubmit={handleSignIn}>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={formDataSignIn.email}
            onChange={handleChangeSignIn}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={formDataSignIn.password}
            onChange={handleChangeSignIn}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </div>
        {error && <div className="alert alert-danger mt-3" role="alert">{error}</div>}
      </form>
    </div>
  );
}

export default SignUp;
