import "./login.css"
 import { BrowserRouter as Router, Link } from "react-router-dom";
 import { useForm, Resolver } from 'react-hook-form';
 import {useState, useEffect} from 'react';
 import { Navigate, useNavigate} from "react-router-dom";




function Login() {
    const {register, handleSubmit, }= useForm();
    const [errors , setErrors]=useState('');
    const [notify , setNotify]=useState('');
    const navigate = useNavigate();
 
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    const login = data =>{
        

        let email = JSON.parse(localStorage.getItem('Email'));
        console.log(email)
        let pass = JSON.parse(localStorage.getItem('Password'));
        console.log(pass)
       if(email === data.email && pass === data.password){
        setNotify('Logged In Successfully')
        setauthenticated(true)
        localStorage.setItem("authenticated", true);
        navigate("/home");
       
       

        console.log("punon")


       }else{
        setErrors('Check Your login info')
        console.log("spunon")
       }
      
        

    }




    return (
        <section className="sectioni">
        <div className="container">
            <form onSubmit={handleSubmit(login)}>
                <h1>Login</h1>
                <div className="input-field">
                    <i className="uil uil-envelope icon"></i><input type="email"  {...register("email")} required placeholder="Enter Your Email:" />
                </div>
                <div className="input-field">
                    <i className="uil uil-lock icon"></i><input type="password"  {...register("password")} required placeholder="Enter Your Password:" />
                </div>
                <button type="submit" value="Submit">Login</button>
                <p className="error">{errors}</p>
                <p >{notify}</p>
                <h2>Don't have an account ? <Link to="/register">SignUp Now</Link> </h2>




            </form>













        </div>
        </section>

    )
}

export default Login