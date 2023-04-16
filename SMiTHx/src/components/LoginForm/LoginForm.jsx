import React from 'react'
import { Component } from 'react';

export default function LoginForm() {
    state = {
        email: '',
        password: '',
        error: ''
    };

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };
    
    return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    <button type="submit" disabled={disable}>LOG IN</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
    )
}
