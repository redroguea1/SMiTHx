import React from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useState } from 'react';

export default function AuthPage({setUser}) {
    const [toggle, setToggle] = useState(true)

    function handleToggle() {
        setToggle(!toggle)
    }

  return (
      <>
          <h2>SMiTHx</h2>
          {toggle ?
              <LoginForm setUser={setUser} />
              :
              <SignUpForm setUser={setUser} />
          }
          <button onClick={() => handleToggle()}>signup/login</button>
      </>
  );
}
