import React from 'react';

export const Main = ({ pass, leng, setLen, numAllow, setCharAllow, setNumAllow, charAllow, copyFunction, passwordasRef}) => { 
  return (
    <div className="main">
      
      <div className="w-full flex">
        <input 
          type="text" 
          value={pass}
          className="bg-green-500 outline-none w-full py-1 px-3 text-2xl" 
          placeholder="Password" 
          readOnly 
          ref={passwordasRef}
        />
        
        <button 
          onClick={copyFunction}
          className="outline-none bg-purple-500 text-white px-4 py-4 shrink-0"
        >
          COPY
        </button>
      </div>
      
      <div className="w-full flex mt-8 text-2xl">
        <input 
          type="range"  
          min={6}
          max={100}
          value={leng}
          className='cursor-pointer'
          onChange={(e)=>{setLen(e.target.value)}}
        />
        <label>
          Length: {leng}
        </label>
      </div>
      
      <div className="w-full flex mt-8 text-2xl">
        <input 
          type="checkbox"
          defaultChecked={numAllow}
          id="numbInput"
          className="w-10 h-10"
          onChange={()=> {setNumAllow((previous)=> !previous)}}
        />
        <label 
          htmlFor='numbInput'
          className="flex justify-center items-center"
        >
          Numbers
        </label>
        
        <input 
          type="checkbox"
          defaultChecked={charAllow}
          id="charInput"
          className='ml-8 w-10 h-10'
          onChange={()=> {setCharAllow((previous)=> !previous)}}
        />
        <label 
          htmlFor='charInput'
          className="flex justify-center items-center"
        >
          Characters
        </label>
      </div>
      
    </div>
  )
}