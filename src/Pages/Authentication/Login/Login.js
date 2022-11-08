import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import './Login.css';

const Login = () => {

  const { login, googleProvider } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("You Successfully Login !!");
        form.reset();
      })
      .catch((e) => console.error(e));
  };

  const handleGoogleLogin =() =>{
    googleProvider()
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(e => console.error(e))
  }

    return (
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <p className="text-xl font-bold font-sans mb-0">Login</p>
              <br />
              <input type="email" name="email" id="" placeholder="Your Email" />
              <br />
              <input
                type="password"
                name="password"
                id=""
                placeholder="Password"
              />
              <br />
              <button
                className="btn btn-ghost w-full bg-[#a19f98] font-semibold my-4 border-0"
                type="submit"
              >
                LOG IN
              </button>
              <p>
                Don't have an account?
                <Link className="text-[tomato] underline ml-2" to="/register">
                  Create an account
                </Link>
              </p>
            </div>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="flex items-center btn-google"
          >
            <FcGoogle className="text-2xl ml-1 mr-10"></FcGoogle>
            <span className="ml-10">Continue With Google</span>
          </button>
        </div>
      </div>
    );
};

export default Login;