import React, { useState } from 'react';
import { auth } from '../../firebase/firebase';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import './sign.css'

const SignUp = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState(null);
 const navigate = useNavigate(); 

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
 };

 return (
    <div className="sign-up">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Sign Up</button>

        <Link style={{
             textDecoration: "none",
             fontWeight: "bold",
             color: "black",
             marginTop:"1rem",
             marginBottom:"1rem"
            }} to="/login">
 <span>Have an account?  Login</span>
    
    </Link>
      </form>
      {error && <p>{error}</p>}
    </div>
 );
};

export default SignUp;
