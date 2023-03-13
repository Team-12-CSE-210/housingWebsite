import React, { useState } from 'react';
import '../styles/LoginPage.css'

function LoginPage({handleCurrUser}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("LoginPage.js: within handleSubmit function")
          

        let res = await fetch("http://localhost:8001/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        
        let responseJSON = await res.json();
        if (responseJSON.message === undefined) {
        // Handle the case where the message is undefined
            handleCurrUser(responseJSON.first_name);
            alert("You've successfully logged in!");
        } else {
            handleCurrUser('');
            alert(responseJSON.message);
        }
    };

    return (
        <div className='loginBox'>
            <h1>Login</h1>
            <form className="propcontainer" onSubmit={handleSubmit}>
                <label> Email </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>

                <label> Password </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>

                <button type="submit"> Submit </button>
            </form>
        </div>
    );
}

export default LoginPage;
