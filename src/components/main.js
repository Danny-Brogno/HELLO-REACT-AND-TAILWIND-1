import React from 'react';

export const Main = ({pass,leng,setLen,numAllow,setCharAllow, setNumAllow}) => { 
  return (
    <div className="main">

      <input 
        type="text" 
        value={pass}
        className="bg-blue-500 outline-none w-full py-1 px-3 " 
        placeholder="Password" 
        readOnly 
      />

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
      
      <input 
      type="checkbox"
      defaultChecked={numAllow}
      id="numbInput"
      className='ml-8'
      onChange={()=> {setNumAllow((previous)=> !previous)}}
      />
      <label htmlFor='numbInput'>
        Numbers
      </label>
      
    </div>
  )
}