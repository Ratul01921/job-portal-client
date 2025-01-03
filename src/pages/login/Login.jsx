import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import AuthContext from '../../context/authContext/AuthContext';
import loginLottieData from '../../../src/assets/lottie/login.json'
import GoogleSignIn from '../shared/GoogleSignIn';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/';

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        loginUser(email, password)
        .then(result => {
           console.log(result.user.email)
        //    navigate(from)
        const user = {email: result.user.email}
        axios.post('http://localhost:5555/jwt', user, {withCredentials: true})
        .then(res => {
            console.log(res.data)
        })


        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-2/4">
                    <Lottie animationData={loginLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl ml-8 mt-4 font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        
                        
                            
                        
                    </form>
                    <div className="divider">OR</div>
                    <GoogleSignIn></GoogleSignIn>
                </div>
                    
            </div>
        </div>
    );
};

export default Login;