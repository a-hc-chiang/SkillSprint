import React, {useState} from "react"; 
import { useNavigate } from "react-router-dom";


export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleEmail = (event) => {
        setEmail(event.target.value);
        console.log("email added! " + email); 
    };

    const handlePass = (event) => {
        setPass(event.target.value);
        console.log("password added! " + pass); 
    };

    const handleLogin = () => {
        navigate("/about-us"); 
    }

    const handleGmail = () => {
        window.open("https://accounts.google.com/v3/signin/", "_blank");
    }

    return (
        <div className="LoginContainer">
            <form className = "Login-form">

                <h1 className="Log-In">Log in</h1>

                <p className="Sign-In-Text">Please sign in or sign up below</p>
                
                <div className="LoginContainer2">
                    <label className="Email-Text" for = "email">Email</label>
                    <input className="input" value = {email} onChange={handleEmail} type = "email" placeholder="youremail@gmail.com" id = "email" name = "email" />
                </div>
                
                {/* <label for="password">password</label> */}
                {/* <input className="pass" value = {pass} onChange={handlePass} type = "password" placeholder="password" id = "password" name = "password" /> */}
                
                
                <button className="EmailButton"onClick={handleLogin} >Continue with Email</button>
                <button className="GoogleButton"onClick={handleGmail}>Sign in with Google</button>
            </form>
            
            {/* <button>Already have an account?</button> */}
        </div>

    );
}