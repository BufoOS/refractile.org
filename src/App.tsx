import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
