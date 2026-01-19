import React from 'react';
import logo from '../logo.svg';

export const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="text-3xl font-bold text-lime-500 underline">
        Tailwind is Working!
      </h1>
      <h2 className="text-3xl font-bold bg-red-50 underline">
        THIS IS A TEST
      </h2>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  )
}