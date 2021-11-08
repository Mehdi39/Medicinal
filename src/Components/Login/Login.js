import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form'
import './Login.css'
import { Container } from 'react-bootstrap';

const Login = () => {
    const { signInUsingGoogle, signInUsingFacebook, signInUsingEmailPassword, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const { register, handleSubmit, formState: { errors }} = useForm();


    const handleGoogleLogin = () => {
        signInUsingGoogle(history, redirect_uri)
    }

    const handleFacebookLogin = () => {
        signInUsingFacebook(history, redirect_uri)
    }

    const onSubmit = data => {
        signInUsingEmailPassword(data.email, data.password, history, redirect_uri)
    }

    return (
        <div>
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <h2>Login</h2>
                <form className="d-flex flex-column justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                    <input className="" placeholder="Your Email" {...register("email", {required:true})}/>
                    {errors.email &&  <span>Email is required</span>}
                    <br />
                    <input className="" type="password" placeholder="Password" {...register("password", {required:true})} />
                    {errors.password && <span>Password is required</span>}
                    <br />
                    {error && !errors.email && !errors.password && <span>{error}</span>}
                    <input className="btn btn-dark" type="submit"/>
                </form>
                <br />
                <p>new to this website? <Link to="/register">Create Account</Link></p>
                <div>---------or----------</div>
                <button className="btn btn-success" onClick={handleGoogleLogin}>Google Sign-In</button>
                <button className="btn btn-primary my-2" onClick={handleFacebookLogin}>Facebook Sign-In</button>
            </Container>
        </div>
    );
};

export default Login;