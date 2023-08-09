import React from 'react';
import { ReactComponent as GithubLogo } from './github.svg';
import { ReactComponent as LinkedinLogo } from './linkedin.svg';
import { bufoCardProp } from './bufoCardProp';
import bufos from './bufos';

function BufoCard({
  bufoName,
  imgSrc,
  imgAlt,
  dinoName,
  ghLink,
  liLink,
}: bufoCardProp): JSX.Element {
  return (
    <div className="card w-72 bg-base-100">
      <figure>
        <img className="h-72" src={imgSrc} alt={imgAlt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bufoName}</h2>
        <p className="whitespace-nowrap">Favorite dinosaur: {dinoName}</p>
        <div className="card-actions justify-end">
          <div className="btn-group">
            <button
              className="btn blue-gradient"
              onClick={() => (window.location.href = ghLink)}
            >
              <GithubLogo className="h-8 w-8" />
            </button>{' '}
            <button
              className="btn blue-gradient"
              onClick={() => (window.location.href = liLink)}
            >
              <LinkedinLogo className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bufos() {
  return (
    <div className="Bufos" id="Bufos">
      <div className="hero min-h-screen-less-footer bg-gradient-to-r from-[#c4c4c4] to-[#1F1F1F]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {bufos.map((bufo: bufoCardProp) => (
            <BufoCard {...bufo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bufos;
