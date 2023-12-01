import React, { useContext } from 'react';
import GoogleLogin from './GoogleLogin';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {signin} = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        // get field values 
        const email = event.target.email.value;
        const password = event.target.password.value;

        // validation 
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters');
            return;
        }

        // creating a new user
        signin(email, password)
            .then(res => {
                toast.success('User logged in successfully');
           //     console.log(location);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className='py-10'>
            <div className="hero bg-base-200">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button type='submit' className="btn btn-neutral bg-red-500">Login</button>
                            </div>
                            <label className="label">
                                New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                            </label>
                            <GoogleLogin></GoogleLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;