import Footer from '../Footer';
import NavBar from '../NavBar';

export default function Layout({ children }) {
  return (
    <div className='bg-black flex flex-col w-screen min-h-screen justify-between'>
      <NavBar />
      <div className='flex justify-center items-center'>
        {children}
      </div>
      <Footer />
    </div>
  );
}
