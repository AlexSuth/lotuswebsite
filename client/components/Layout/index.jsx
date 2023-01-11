/* eslint-disable react/react-in-jsx-scope */
import Footer from '../Footer';
import NavBar from '../NavBar';

import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavBar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavBar = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  return (
    <div className='bg-black flex flex-col w-screen min-h-screen justify-between p-4'>
      <NavBar closeNavBar={closeNavBar} isNavOpen={isNavOpen} toggleNavBar={toggleNavBar} />
      <div className='flex justify-center items-center' onClick={closeNavBar}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
