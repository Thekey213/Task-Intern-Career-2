import React, { useState } from 'react';
import { auth } from '../../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import './sign.css'

const Login = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState(null);
 const navigate = useNavigate(); 

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Successfully");
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
 };

 return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>

        
        <Link style={{
             textDecoration: "none",
             fontWeight: "bold",
             color: "black",
             marginTop:"1rem",
             marginBottom:"1rem"
                 }} to="/">
      <span>Don't have an acount?  Sign up</span>
    
      </Link>
      </form>
      {error && <p>{error}</p>}
    </div>
 );
};

export default Login;
