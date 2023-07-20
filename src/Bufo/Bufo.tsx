import React from 'react';

function Bufos() {
  return (
    <div className="Bufos">
      <div
        className="hero min-h-screen bg-base-200"
        style={{
          backgroundImage:
            'url(https://upload.wikimedia.org/wikipedia/commons/a/a3/Bufo-bufo-erdkroete-maennlich.jpg)',
        }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold">we are the BufoOS</h1>
            <p className="py-6">
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

export default Bufos;
