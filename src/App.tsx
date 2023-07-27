import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Bufos from './Bufo/Bufo';
import Navbar from './Navbar/Navbar';
import { ReactComponent as CopyLogo } from './copy.svg';
import { useState, useEffect } from 'react';
import PackageReadme from './PackageReadme/PackageReadme';
import waves from 'vanta/dist/vanta.waves.min.js';

import { ReactComponent as RefractileLogo } from './Navbar/prism.svg';
import { ReactComponent as Newspaper } from './Navbar/newspaper.svg';
import { ReactComponent as Toad } from './Footer/BufoOs.svg';

function App() {
  const [copied, setCopied] = useState('copy');

  useEffect(() => {
    waves({
      el: '#vanta',
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x29507a,
      shininess: 88.0,
      waveHeight: 31.5,
      waveSpeed: 0.75,
      zoom: 1.75,
    });
  }, []);

  function copyToClipboard() {
    navigator.clipboard.writeText('npm install refractile -D');
    setCopied('copied!');
    setTimeout(() => {
      setCopied('copy');
    }, 2000);
  }

  return (
    <div className="App">
      <Navbar />

      <div className="hero min-h-screen">
        <div className="hero-overlay" id="vanta"></div>

        <div className="card w-100 glass">
          <div className="hero-content text-center text-black">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Experience Refractile</h1>
              <div className="py-6 flex flex-col gap-1 sm:hidden">
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
              <p className="py-6">
                Seamlessly integrate the capabilities of other programming
                languages into a Node Express environment
              </p>
              <div className="flex justify-around items-center rounded-lg text-white bg-black border-black p-5 m-7 dark:bg-white dark:text-black">
                <pre>npm install refractile</pre>
                <ul className="menu menu-horizontal ">
                  <li>
                    <div id="copyTooltip" className="tooltip" data-tip={copied}>
                      <button
                        onClick={copyToClipboard}
                        className="bg-white p-2 rounded-lg ">
                        <CopyLogo className="h-7 w-7" />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
              <button
                className="btn btn-background ring-2 ring-brown ring-offset-4 ring-offset-purple-100/[.55"
                onClick={() => {
                  console.log(document.querySelector('#readme'));
                  window.location.href = '#readme';
                }}>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <PackageReadme />
      <Bufos />
      <Footer />
    </div>
  );
}

export default App;
