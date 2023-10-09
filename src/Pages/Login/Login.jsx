import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';

const Login = () => {

  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    // console.log(email, password);
    signIn(email, password)
      .then(result => {
        console.log(result.user);
        
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
      console.log(error);
    })
  }

  return (
    <div className='my-10'>
      <h2 className="text-3xl text-center my-6 font-bold">Login Your Account</h2>
      <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your e-mail"
            className="input input-bordered"
            required
            name='email'
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input input-bordered"
            required
            name='password'
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
        <p className='text-center mt-5'>
          Don't have an account?
          <Link className="text-blue-600 font-semibold " to={"/register"}>
            Register
          </Link>
        </p>
    </div>
  );
};

export default Login;