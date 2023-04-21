import React, { useState } from 'react'

import * as userServices from "../../utilities/users-service"

const initialForm = {
    username: '',
    password: '',
    error: ''
};


export default function LoginForm({setUser}) {
const [formData, setFormData] = useState(initialForm)

function handleChange(evt) {
    setFormData({
        ...formData,
        [evt.target.name]: evt.target.value,
        error: ''
    });
};

async function handleSubmit(evt) {
        // Prevent default form submission: 
        evt.preventDefault();
        // Try block:
        try {
            // Excludes unneeded properties:
            const userData = {
                username: formData.username,
                password: formData.password
            };
            // Async user creation:
            //this is failing some how...
            const user = await userServices.login(userData);
            // Sets user state to new user:
            setUser(user);
        } catch {
            // Error catch: 
            //do I need to add error to my output some how...
            setFormData({ error: 'Login...Fail' });
            //setFormData(userData)
        }
    };

    return (
        <div>
            <h3>Login</h3>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>username</label>
                    <input type="username" name="username" value={formData.username} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required /> 
                    <hr/>
                    <button type="submit" onClick={handleSubmit}>LOG IN</button>
                </form>
            </div>
        </div>
    )
}
