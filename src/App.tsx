import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Bufos from './Bufo/Bufo';
import Navbar from './Navbar/Navbar';
import { ReactComponent as CopyLogo } from './copy.svg';
import { useState } from 'react';

function App() {
  const [copied, setCopied] = useState('copy');

  function copyToClipboard() {
    navigator.clipboard.writeText('npm install refractile -D');
    setCopied('copied!');
  }

  return (
    <div className="App">
      <Navbar />
      <div className="hero min-h-screen-less-navbar bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex justify-around items-center rounded-lg text-slate-200 bg-slate-800 p-5 m-7">
              <pre>npm install refractile -D</pre>
              <ul className="menu menu-horizontal ">
                <li>
                  <div id="copyTooltip" className="tooltip" data-tip={copied}>
                    <button
                      onClick={copyToClipboard}
                      className="bg-slate-500 p-2 rounded-lg">
                      <CopyLogo className="h-5 w-5" />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            'url(https://upload.wikimedia.org/wikipedia/commons/7/71/GGB_reflection_in_raindrops.jpg)',
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Refractile</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <Bufos />
      <Footer />
    </div>
  );
}

export default App;
