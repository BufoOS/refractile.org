import { ReactComponent as GithubLogo } from './github.svg';
import { ReactComponent as RefractileLogo } from './prism.svg';
import { ReactComponent as RefractileWord } from './refractile.svg';
import { ReactComponent as Newspaper } from './newspaper.svg';
import { ReactComponent as Toad } from '../Footer/BufoOs.svg';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar blue-gradient">
        <div className="navbar-start">
          <a className="btn  sm:flex normal-case text-xl btn-ghost">
            <RefractileLogo className="h-8 w-8 fill-white" />{' '}
            <RefractileWord className="h-8  fill-base-200" />
          </a>
        </div>
        <div className="navbar-center flex gap-2 hidden lg:flex">
          <a
            type="button"
            href="https://github.com/BufoOs/refractile-example"
            className="btn">
            <RefractileLogo className="h-8 w-8 dark:fill-white fill-black" />
            Demo
          </a>
          <a
            type="button"
            href="https://medium.com/@ian_30459/refractile-6473eab7b891"
            className="btn">
            <Newspaper className="h-8 w-8 fill-foreground" />
            Medium
          </a>
          <a type="button" href="#Bufos" className="btn">
            <Toad className="h-8 w-8  dark:fill-white fill-black" />
            about us
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
