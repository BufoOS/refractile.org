import React from 'react';

function Bufos() {
  return (
    <div className="Bufos" id="Bufos">
      <div
        className="hero min-h-screen-less-footer bg-base-200"
        style={{
          backgroundImage:
            'url(https://upload.wikimedia.org/wikipedia/commons/a/a3/Bufo-bufo-erdkroete-maennlich.jpg)',
        }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card lg:card-side glass">
            <figure>
              <img src="/bufos.webp" alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title primary">we are the BufoOS</h2>
              <p>thank you for visiting</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy us coffee</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bufos;
