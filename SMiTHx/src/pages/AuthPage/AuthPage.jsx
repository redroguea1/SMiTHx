import React from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({setUser}) {
  return (
    <main>
      <h1>AuthPage</h1>
      {/* SIGNUP FORM && LOGIN FORM components */}
      <SignUpForm setUser={setUser}/>
    </main>
  );
}
