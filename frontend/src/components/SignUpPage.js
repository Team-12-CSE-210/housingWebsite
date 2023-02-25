import React, { useState } from 'react';
import '../styles/SignUpPage.css'

function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("within handleSubmit function")

        let res = await fetch("http://localhost:8001/api/signup", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
        });
        
        let resJSONformat = res.json();
        // can use resJSONformat to check status of response
        

    };

    return (
        <div className='signUpBox'>
            <h1>Sign Up</h1>
            <form className="inputForm" onSubmit={handleSubmit}>
                <label> Name </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>

                <label> Email </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>

                <label> Password </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>

                <button type="submit"> Submit </button>
            </form>
        </div>
    );
}

export default SignUpPage;
