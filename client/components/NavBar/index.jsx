/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link';

export default function NavBar({ closeNavBar, isNavOpen, toggleNavBar }) {
  return (
    <div className="mx-auto w-full md:w-11/12">
      {/* Logo */}
      <header className="bg-inheret">
        <div className="">
          <div className="flex items-stretch justify-between h-16">
            <div className="flex-1 md:flex md:items-stretch md:gap-12">
              <Link
                href='/'
                className="block text-slate-50 transition hover:text-slate-50/75">

                <span className="sr-only">Home</span>
                <img src={'http://alexanders80.sg-host.com/wp-content/uploads/2023/03/lotuslogo-removebg.png'} className='h-12' />

              </Link>
            </div>

            {/* Navbar */}
            <div className="md:flex md:items-center md:gap-12">
              <nav className="hidden md:block" aria-labelledby="header-navigation">
                <h2 className="sr-only" id="header-navigation">Header navigation</h2>
                <ul className="flex items-center text-sm gap-6">
                  <li>
                    <Link href="/" className="text-slate-50 transition hover:text-slate-50/75">
                      Home

                    </Link>
                  </li>
                  <li>
                    <Link href="/bio" className="text-slate-50 transition hover:text-slate-50/75">

                      Bio

                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/portfolio"
                      className="text-slate-50 transition hover:text-slate-50/75">

                      Portfolio

                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/appointments"
                      className="text-slate-50 transition hover:text-slate-50/75">
                      Book Appointment
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="block md:hidden">
                <button
                  className="p-2 text-slate-50 border-slate-50 rounded transition hover:text-slate-50/75"
                  onClick={() => toggleNavBar()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {isNavOpen ?
            (
              <div className="absolute w-11/12 z-10 md:hidden bg-black pb-4">
                <ul className=''>
                  <li onClick={closeNavBar}>
                    <Link href="/" className="text-slate-50 transition hover:text-slate-50/75">

                      Home

                    </Link>
                  </li>
                  <li onClick={closeNavBar}>
                    <Link href="/bio" className="text-slate-50 transition hover:text-slate-50/75">

                      Bio

                    </Link>
                  </li>

                  <li onClick={closeNavBar}>
                    <Link
                      href="/portfolio"
                      className="text-slate-50 transition hover:text-slate-50/75">

                      Portfolio

                    </Link>
                  </li>
                  <li onClick={closeNavBar}>
                    <Link
                      href="/appointments"
                      className="text-slate-50 transition hover:text-slate-50/75">
                      Book Appointment
                    </Link>
                  </li>
                </ul>
              </div>
            ) :
            <></>
          }
        </div>
      </header >
    </div >
  );
}
