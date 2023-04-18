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
      <main>
          <h1>AuthPage</h1>
          <button onClick={() => setToggle(!toggle)}>signup/login</button>
          {toggle ?
              <LoginForm setUser={setUser} />
              :
              <SignUpForm setUser={setUser} />
          }
      </main>
  );
}
