import React, { useState } from 'react';
import './Login.css'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../Firebase/Firebase';
const Login = () => {
    const auth = getAuth(app)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signInUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((responce) => {
                alert("login success")
            }).catch((error) => {
                alert("wrong")
                console.log(error);
            })
    }

    function AddEmail(e) {
        setEmail(e.target.value)
    }

    function AddPass(e) {
        setPassword(e.target.value)
    }


    return (
        <div className="d-flex justify-content-center main">
            <div className="form-container">
                <p className="title">Login</p>
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
                    <button className="sign" onClick={signInUser}>Sign in</button>
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
                <p className="signup">Don't have an account?
                    <a rel="noopener noreferrer" href="/signin" className="">Sign up</a>
                </p>

            </div>
        </div>
    );
}

export default Login;

// Login.js

// import React, { useState } from 'react';
// import './Login.css';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { app } from '../../Firebase/Firebase';
// const auth = getAuth(app)
// const Login = () => {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const signInUser = () => {
//         signInWithEmailAndPassword(auth, email, password)
//             .then((response) => {
//                 console.log(response);
//                 alert("Login success");
            
//             })
//             .catch((error) => {
//                 alert("Login failed. Please try again.");
//                 console.error(error);
//             });
//     };

//     const handleEmailChange = (e) => {
//         e.preventDefault()
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         e.preventDefault()
//         setPassword(e.target.value);
//     };

//     return (
//         <div className="d-flex justify-content-center main">
//             <div className="form-container">
//                 <p className="title">Login</p>
//                 <form className="form">
//                     <div className="input-group">
//                         <label htmlFor="username">Email</label>
//                         <input
//                             type="text"
//                             name="Email"
//                             id="username"
//                             placeholder="Enter Email"
//                             onChange={handleEmailChange}
//                         />
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="password">Password</label>
//                         <input
//                             type="password"
//                             name="password"
//                             id="password"
//                             placeholder="Enter Password"
//                             onChange={handlePasswordChange}
//                         />
//                         <div className="forgot">
//                             <a href="#">Forgot Password?</a>
//                         </div>
//                     </div>
//                     <button className="sign" onClick={signInUser}>Sign in</button>
//                 </form>

//                 <div className="social-message">
//                     <div className="line"></div>
//                     <p className="message">Login with social accounts</p>
//                     <div className="line"></div>
//                 </div>
//                 <div className="social-icons">
//                     <button aria-label="Log in with Google" className="icon">
//                         <i className="fa-brands fa-google fs-5"></i>
//                     </button>
//                     <button aria-label="Log in with Twitter" className="icon">
//                         <i className="fa-brands fa-twitter fs-5"></i>
//                     </button>
//                     <button aria-label="Log in with GitHub" className="icon">
//                         <i className="fa-brands fa-github fs-5"></i>
//                     </button>
//                 </div>
//                 <p className="signup">Don't have an account?
//                     <a rel="noopener noreferrer" href="/signin" className="">Sign up</a>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Login;

