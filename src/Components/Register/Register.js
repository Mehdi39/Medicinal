import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Register = () => {
    const { createUser, signInUsingGoogle, error } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redireact_uri = location.state?.from || '/home'
    const { register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data) => {
        createUser(data.email, data.password, data.name, history, redireact_uri);
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle(history, redireact_uri);
    }
    return (
        <Container>
            <h1>Register Here</h1>
            <div>
                <form className="d-flex flex-column justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                    <input className="my-2" type="text" placeholder="Enter Your Name" {...register("name", {required: true})} />
                    
                    {errors.name && <span>Please Enter Your Name</span>}
                    <input className="my-2" type="email" placeholder="Enter Your Email" {...register("email", {required:true})} />
                    {errors.email && <span>Please Enter Your Email</span>}
                    <input className="my-2" type="password" placeholder="Enter Your password" {...register("password", {required:true})} />
                    {errors.password && <span>Please Enter Your password</span>}
                    {error && !errors.name && !errors.email && !errors.password && <span>{error}</span>}
                    <input type="submit" />
                </form>
            </div>
            <div className="d-flex flex-column justify-content-center my-5">
                <h4>Already Registered ?</h4>
                <Link to='/login'>Login</Link>
                <div>---------or----------</div>
                <button className="btn btn-success" onClick={handleGoogleLogin}>Google Sign In</button>
            </div>
        </Container>
    );
};

export default Register;