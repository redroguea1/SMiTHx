import React, { Component } from 'react'
import { signUp } from '../../utilities/users-service';
import { useState } from 'react';


// Initial State:
const initialForm = {
    username: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
};

//needed to add setUser to assign the value of user. 
export default function SignUpForm({ setUser }) {
    // Sets state:
    const [formData, setFormData] = useState(initialForm);
    // State related variables:
    let disabled = formData.password !== formData.confirm;
    // Event handler functions:
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
            email: formData.email,
            password: formData.password
          };
          // Async user creation:
          const user = await signUp(userData);
          // Sets user state to new user:
          setUser(user);
        } catch {
          // Error catch: 
          setFormData({ error: 'Sign Up Failed - Try Again' });
          //setFormData(userData)
        }
      };    

    return (
        <div>
        <div className='SignUpForm'>
            <h3>Sign Up</h3>
          <form autoComplete='off' onSubmit={handleSubmit}>
            <label>Name</label>
              <input type='text' name='username'
                value={formData.username}
                onChange={handleChange}
                required
              />
              <label>Email</label>
              <input type='email' name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            <label>Password</label>
              <input type='password' name='password'
                value={formData.password}
                onChange={handleChange}
                required
              />
            <label>Confirm</label>
              <input type='password' name='confirm'
                  value={formData.confirm}
                  onChange={handleChange}
                  required
              />
            <button type='submit' disabled={disabled}>SIGN UP</button>
          </form>
        </div>
          <p className='error-message'>&nbsp;{formData.error}</p>
        </div>
    );
}

