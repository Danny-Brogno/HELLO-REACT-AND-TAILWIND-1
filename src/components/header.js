import React from 'react';
import logo from '../logo.svg';

export const Header = () => {
  return (
    <header className="App-header bg-[var(--elegant-grey)]">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="text-3xl font-bold text-lime-500 underline">
        Tailwind is Working!
      </h1>
      <h1 className="text-3xl font-bold text-red-500 underline">
        TEST 1
      </h1>
      <div className="lol bg-blue-500 w-[100px] h-[100px] flex justify-center items-center">
        TEST 2
      </div>
      <div className="lol bg-green-500 w-[200px] h-[200px] flex justify-center items-center">
        TEST 3
      </div>
    </header>
  )
}