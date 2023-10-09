import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';
import { Helmet } from 'react-helmet';
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { createUser, signInGoogle } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, photo, email, password);

    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(
        password
      )
    ) {
      Swal.fire({
        icon: "error",
        title:
          "Minimum Six characters, at least one letter, one number and one special character",
      });
      return;
    }

    createUser(email, password)
      .then(result => {
        console.log(result.user);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
        
      })
      .catch(error => {
        console.log(error);
        
    })
  };
  const handleGoogle = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);
        alert('hoice re ')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      data-aos="fade-up-left"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="my-10"
    >
      <Helmet>
        <title>Register</title>
      </Helmet>
      <h2 className="text-3xl text-center my-6 font-bold">
        Register Your Account
      </h2>
      <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered"
            required
            name="name"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Enter your photo URL"
            className="input input-bordered"
            required
            name="photo"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your e-mail"
            className="input input-bordered"
            required
            name="email"
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
            name="password"
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center mt-5">
        Already have an account?
        <Link className="text-blue-600 font-semibold" to={"/login"}>
          Login
        </Link>
      </p>
      <div className="text-center flex justify-center my-2">
        <button onClick={handleGoogle} className="btn btn-primary">
          <FaGoogle className='text-xl'></FaGoogle> Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Register;