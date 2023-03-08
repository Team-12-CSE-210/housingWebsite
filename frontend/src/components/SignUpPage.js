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
        <div className='bg'>
            <div className='signUpBox'>

                <form className="inputForm" onSubmit={handleSubmit}>
                    {/* <h1>Sign Up</h1> */}

                    {/* <label> Name </label> */}
                    <div className='form-field'>
                        <input type="text" value={name} placeholder="Email / Username" onChange={(e) => setName(e.target.value)} required />
                    </div>
                    {/* <label> Email </label> */}
                    {/* <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required /> */}
                    <div className='form-field'>
                        <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    {/* <label> Password </label> */}
                    <div className='form-field'>
                        <button type="submit"> Sign Up </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default SignUpPage;
