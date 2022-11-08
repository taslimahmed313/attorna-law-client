import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
      <div>
        <form>
          <div className="form-group">
            <p className="text-xl font-bold font-sans">
              Register as a Volunteer
            </p>
            <input type="text" name="fullName" id="" placeholder="Full Name" />{" "}
            <br />
            <input type="text" name="photoURL" id="" placeholder="Photo URL" />
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
              REGISTRATION
            </button>
            <p>
              Already have an account? please{" "}
              <Link className="text-[tomato] underline" to="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
};

export default Register;