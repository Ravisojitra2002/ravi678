import React, { useState } from 'react';
import './SignIn.css'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../../Firebase/Firebase';



const Signin = () => {

    const auth = getAuth(app)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function AddEmail(e) { 
        setEmail(e.target.value)
    }

    function AddPass(e) {
        setPassword(e.target.value)
    }

    const signUpUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => console.log(res))
    }

    return (
        <div className="d-flex justify-content-center main">
            <div className="form-container">
                <p className="title">Sign Up</p>
                <form className="form">
                    <div className="input-group">
                        <label for="username">Email</label>
                        <input type="text" name="Email" id="username" placeholder="Enter Email" onChange={AddEmail} />
                    </div>
                    <div className="input-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter Password" onChange={AddPass} />
                        <div className="forgot">
                            <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                        </div>
                    </div>
                    <button type='submit' className="sign" onClick={signUpUser}>Sign up</button>
                </form>
                <div className="social-message">
                    <div className="line"></div>
                    <p className="message">Login with social accounts</p>
                    <div className="line"></div>
                </div>
                <div className="social-icons">
                    <button aria-label="Log in with Google" className="icon">
                        <i className="fa-brands fa-google fs-5"></i>
                    </button>
                    <button aria-label="Log in with Twitter" className="icon">
                        <i className="fa-brands fa-twitter fs-5"></i>
                    </button>
                    <button aria-label="Log in with GitHub" className="icon">
                        <i className="fa-brands fa-github fs-5"></i>
                    </button>
                </div>
                {/* <p className="signup">Don't have an account?
                    <a rel="noopener noreferrer" href="#" className="">Sign up</a>
                </p> */}
            </div>
        </div>
    );
}

export default Signin;
