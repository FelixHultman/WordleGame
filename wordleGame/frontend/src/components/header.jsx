import { useLayoutEffect } from 'react';
import React, { useState } from 'react';

function Header() {
  return (
    <header className=' flex justify-center p-5 space-x-7 text-4xl bg-teal-600'>
      <a href=''>Home</a>
      <a href=''>About us</a>
      <a href=''>HighScores</a>
    </header>
  );
}

export default Header;
