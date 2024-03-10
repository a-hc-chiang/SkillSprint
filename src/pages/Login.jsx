import React, {useState} from "react"; 


export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value);
        console.log("email added! " + email); 
    };

    const handlePass = (event) => {
        setPass(event.target.value);
        console.log("password added! " + pass); 
    };

    const handleSubmit = () => {
        window.location.href = "./about-us";
    }

    return (
        <form>
            <label for = "email">email</label>

            <input value = {email} onChange={handleEmail} type = "email" placeholder="youremail@gmail.com" id = "email" name = "email" />

            <label for="password">password</label>
            <input value = {pass} onChange={handlePass} type = "password" placeholder="password" id = "password" name = "password" />
            <button onClick={handleSubmit} >Log In</button>
            
        </form>
    );
}