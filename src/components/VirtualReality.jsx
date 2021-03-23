import React from 'react';

import imageInteractive from '../assets/images/image-interactive.jpg';

import '../assets/styles/components/VirtualReality.scss';

const VirtualReality = () => {
  return (
    <section className="virtual-reality">
      <figure className="image-container">
        <img src={imageInteractive} alt="imageInteractive" className="image" />
      </figure>

      <div className="card-container">
        <h2 className="card-container__title">The leader in interactive vr</h2>
        <p className="card-container__paragraph">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Ourn
          award-winning creations have transformed businesses through digital
          experiencies that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default VirtualReality;