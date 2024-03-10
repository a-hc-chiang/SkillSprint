import React, {useState} from "react"; 
import { useNavigate } from "react-router-dom";


export default function Register() {
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

    const handleNewAccount = () => {
        navigate("/register"); 
    }

    return (
        <>
            <form>
                <label for = "email">email</label>
                <input value = {email} onChange={handleEmail} type = "email" placeholder="youremail@gmail.com" id = "email" name = "email" />
                <label for="password">password</label>
                <input value = {pass} onChange={handlePass} type = "password" placeholder="password" id = "password" name = "password" />
                <button onClick={handleLogin} >Log In</button>
            
            </form>
        </>

    );
}