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
          {/* <div className="card lg:card-side glass">
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
          </div> */}

          <div className="card w-96 bg-base-100">
            <figure>
              <img src="/Mateo.png" alt="Mateo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Mateo Lopez-Castillo</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100">
            <figure>
              <img src="/ian.png" alt="Ian" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Ian MacDougald</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100">
            <figure>
              <img src="/sky.PNG" alt="Sky" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Schuyler Weiner</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100">
            <figure>
              <img src="/Angelo.png" alt="Angelo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Angelo Dell Acqua</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bufos;
