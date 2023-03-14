import React, { useState } from 'react';
import '../styles/SignUpPage.css'

function SignUpPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("within handleSubmit function")

        let res = await fetch("http://localhost:8001/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                phone_number: phoneNum,
                email: email,
                password: password,
            }),
        });

        let responseJSON = await res.json();
        alert(responseJSON.message);
    };

    return (
        <div className='signUpBox'>

            <form className="propcontainer1" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>

                <label> First Name </label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

                <label> Last Name </label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

                {/* <label> Phone Number </label>
                <input type="tel" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} required /> */}

                <label> Email </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label> Password </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <br></br>
                <button type="submit"> Sign Up </button>
            </form>
        </div>
    );
}

export default SignUpPage;
