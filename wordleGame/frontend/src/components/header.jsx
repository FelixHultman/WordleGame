import { useLayoutEffect } from 'react';
import React, { useState } from 'react';

function Header() {
  return (
    <header className=' flex justify-center p-5 space-x-7 text-4xl'>
      <a href=''>About us</a>
      <a href=''>HighScore</a>
    </header>
  );
}

export default Header;
