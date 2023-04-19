import React from 'react'
import { Component } from 'react';
import "./Footer.css"
import { useState } from 'react';

export default function Footer({joke}) {
    // will need to create a fetch random quotes for the different pages and rendering in here in the div
    //wonder if its possible to tie the quote to the session so its only calling the API for the one person accessing the site
    

  return (
    <p className='Footer'>{joke}</p>
  )
}
