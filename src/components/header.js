import React, { useState, useEffect, useCallback } from 'react';

export const Header = () => {
  return (
    <div className="bg-[var(--elegant-grey)] flex flex-col items-center justify-center text-[calc(10px+2vmin)] text-white">
      <div className="header">
        <h1>PASSWORD GENERATOR APP</h1>
      </div>
    </div>
  )
}