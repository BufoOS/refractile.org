import React from 'react';
import { ReactComponent as GithubLogo } from './github.svg';
import { ReactComponent as LinkedinLogo } from './linkedin.svg';

function Bufos() {
  return (
    <div className="Bufos" id="Bufos">
      <div
        className="hero min-h-screen-less-footer bg-gradient-to-r from-[#c4c4c4] to-[#1F1F1F]"
        // style={{
        //   backgroundColor:
        //     'bufoBackground',
        // }}
        >
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
              <img src="/mateo.png" alt="Mateo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Mateo Lopez-Castillo</h2>
              <p>Favorite dinosaur: Archaeopteryx</p>
              <div className="card-actions justify-end">
                <div className="btn-group">
                  <button
                    className="btn blue-gradient"
                    onClick={() =>
                      (window.location.href = 'https://github.com/mateolopcas')
                    }>
                    <GithubLogo className="h-8 w-8" />
                  </button>{' '}
                  <button
                    className="btn blue-gradient"
                    onClick={() =>
                      (window.location.href =
                        'https://www.linkedin.com/in/mateo-lopez-castillo/')
                    }>
                    <LinkedinLogo className="h-8 w-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100">
            <figure>
              <img src="/ian.png" alt="Ian" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Ian MacDougald</h2>
              <p>Favorite dinosaur: Plesiosaurus</p>
              <br/>
              <div className="card-actions justify-end">
                <div className="btn-group">
                  <button
                    className="btn blue-gradient"
                    onClick={() =>
                      (window.location.href =
                        'https://github.com/ianmacdougald')
                    }>
                    <GithubLogo className="h-8 w-8" />
                  </button>{' '}
                  <button
                    className="btn blue-gradient"
                    onClick={() =>
                      (window.location.href =
                        'https://www.linkedin.com/in/ian-macdougald/')
                    }>
                    <LinkedinLogo className="h-8 w-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100">
            <figure>
              <img src="/sky.png" alt="Sky" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Schuyler Weiner</h2>
              <p>Favorite dinosaur: Therizinosaurus</p>
              <div className="card-actions justify-end">
                <div className="btn-group">
                  <button
                    className="btn blue-gradient"
                    onClick={() =>
                      (window.location.href = 'https://github.com/Sky-VGW')
                    }>
                    <GithubLogo className="h-8 w-8" />
                  </button>
                  <button
                    className="btn blue-gradient"
                    onClick={() =>
                      (window.location.href =
                        'https://www.linkedin.com/in/skyweiner/')
                    }>
                    <LinkedinLogo className="h-8 w-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-base-100">
            <figure>
              <img src="/angelo.png" alt="Angelo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Angelo Dell Acqua</h2>
              <p>Favorite dinosaur: Pterodactyl</p>
              <br/>
              <div className="card-actions justify-end">
                <div className="btn-group">
                  <button
                    className="btn blue-gradient"
                    onClick={() =>
                      (window.location.href = 'https://github.com/angedell')
                    }>
                    <GithubLogo className="h-8 w-8" />
                  </button>
                  <button
                    className="btn blue-gradient"
                    onClick={() =>
                      (window.location.href =
                        'https://www.linkedin.com/in/angelo-dell-acqua/')
                    }>
                    <LinkedinLogo className="h-8 w-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bufos;
