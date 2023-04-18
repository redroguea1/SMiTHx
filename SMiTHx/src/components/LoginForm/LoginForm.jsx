import React, { useState } from 'react'
import { Component } from 'react';
import * as userServices from "../../utilities/users-service"

const initialForm = {
    username: '',
    password: '',
    error: ''
};


export default function LoginForm() {
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
            const user = await userServices.login(userData);
            // Sets user state to new user:
            setUser(user);
        } catch {
            // Error catch: 
            setFormData({ error: 'Login...Fail' });
            //setFormData(userData)
        }
    };

    return (
        <div>
            <h3>Login</h3>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    <button type="submit" onClick={handleSubmit}>LOG IN</button>
                </form>
            </div>
        </div>
    )
}
