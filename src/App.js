import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import { Header } from './components/header.js';
import {Main} from './components/main.js';

function App() {
  const [leng, setLen] = useState(10);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [pass, setPassword] = useState("");
  const passwordRef = useRef(null);
  
  const passwordasRef = useRef(null);
  
  const passwordGenerator = useCallback(()=> {
    let pass = "";
    let strdata = "ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuwxyz";
    if (numAllow) strdata += "0123456789"
    if (charAllow) strdata += "!£$%^&@#~`"
    for (let index = 0; index < leng; index++) {
      let char = Math.floor(Math.random() * strdata.length);
      pass += strdata.charAt(char)
    }
    setPassword(pass);
    
  },[leng,numAllow,charAllow,setPassword]);
  
  // the useEffect() hook
  useEffect(() => {
    passwordGenerator();
  }, [leng, numAllow, charAllow, passwordGenerator]);
  
  // copy password function:
  const copyFunction = useCallback(()=>{
    passwordasRef.current?.select();
    // passwordasRef.current?.setSelectionRange(0,6);
    window.navigator.clipboard.writeText(pass);
  },[pass]);
  
  // -------------------------------------------------------
  
  const settings = { pass, leng, setLen, numAllow, setNumAllow, charAllow, setCharAllow, setNumAllow, charAllow, copyFunction, passwordasRef };
  
  return (
    <div className="App">
      <Header />
      <Main {...settings} />
    </div>
  );
}

export default App;
