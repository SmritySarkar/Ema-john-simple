import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="register-form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="text" name="" id="" placeholder="Enter Your Name" required />
                    <br />
                    <input type="email" name="" id="" placeholder="Enter your E-mail" required />
                    <br />
                    <input type="password" name="" id="" placeholder="Enter your Password" required />
                    <br />
                    <input type="confirmPassword" name="" id="" placeholder="Confirm Password" required />
                    <br />
                    <input type="submit" value="Create Account" />
                </form>
                <p>Already have an Account? <Link to="/login">Log In</Link></p>
                <div>-----------------or---------------</div><br />
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;