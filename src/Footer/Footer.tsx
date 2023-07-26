import { ReactComponent as BufoLogo } from './BufoOs.svg';

function Footer() {
  return (
    <div className="Footer">
      <footer className="footer items-center p-4 blue-gradient text-white">
        <div className="items-center grid-flow-col">
          <BufoLogo className="fill-white h-10 w-10" />
          <p>Copyright © 2023 - BufoOS - All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
