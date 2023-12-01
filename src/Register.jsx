import React, { useContext } from 'react';
import GoogleLogin from './GoogleLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {

    const {createUser,handleUpdateProfile} = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();

        // get field values 
        const name = event.target.name.value;
        const email = event.target.email.value;
        const img = event.target.img.value;
        const password = event.target.password.value;

      //  console.log(name,email,img,password);

        // validation 
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters');
          //  console.log("Password must be at least 6 characters")
            return;
        }

        if(/[A-Z]/.test(password)===false){
            toast.error('Password must have 1 capital letter');
            return;
        }

        if(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)===false){
            toast.error('Password must have 1 special character');
            return;
        }


        // creating a new user
        createUser(email, password)
        .then(res => {
            handleUpdateProfile(name, img)
                .then(() => {
                    toast.success('User created successfully');
                    navigate(location?.state ? location.state : '/');
                })
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
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full name" className="input input-bordered" name='name' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" placeholder="image url" className="input input-bordered" name='img' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' required/>
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button className="btn btn-neutral bg-red-500" type='submit'>Register</button>
                            </div>
                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                            <GoogleLogin></GoogleLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;