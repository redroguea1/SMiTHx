import React from 'react'
import { Component } from 'react';
import "./Footer.css"
import { useState } from 'react';

export default function Footer() {
    // will need to create a fetch random quotes for the different pages and rendering in here in the div
    //wonder if its possible to tie the quote to the session so its only calling the API for the one person accessing the site
    const apiURL = "https://api.chucknorris.io/jokes/random";
    const [joke, setJoke] = useState('');

    async function getJoke(){
        const randomJoke = await fetch(`${apiURL}`)
          .then(res =>res.json());
        console.log(randomJoke.value);
        setJoke(randomJoke.value);
    }
    setJoke(getJoke())
    

  return (
    <p>{joke}</p>
  )
}
