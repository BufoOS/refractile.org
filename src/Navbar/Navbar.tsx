import { ReactComponent as GithubLogo } from './github.svg';
import { ReactComponent as RefractileLogo } from './prism.svg';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar blue-gradient">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a>Demo</a>
              </li>
              <li>
                <a href="#Bufos">About Us</a>
              </li>
            </ul>
          </div>
          <a className="btn hidden sm:flex normal-case text-xl">
            <RefractileLogo className="h-8 w-8 fill-blue" /> refractile
          </a>
        </div>
        <div className="navbar-center flex gap-2 hidden lg:flex">
          <button className="btn">Demo</button>
          <a type="button" href="#Bufos" className="btn">
            About Us
          </a>
        </div>
        <div className="navbar-end">
          <a href="https://github.com/oslabs-beta/refractile" className="btn">
            <GithubLogo className="h-8 w-8" /> Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
