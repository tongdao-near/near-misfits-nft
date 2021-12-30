import React from 'react';
import img from '../../assets/img/f2.png';
const Learn = () => (
  <section id="learn" className="learn">
    <div className="learn__information">
      <h2 className="learn__title">
        Nearkats: Next Generation
      </h2>
      <p className="learn__text">
        Nestled in the Nearverse, you can find the Nearkats using their powers of cuteness to bring forth the dream of the open web.
      </p>
      <p className="learn__text">
        Now, you have the power to bolster their efforts by bringing more into existence.
      </p>
      <p className="learn__text">
        This next generation is a collection of 10,000 Nearkats, randomly and programmatically generated, on the NEAR Blockchain.
      </p>
      <p className="learn__text">
        They have a variety of colors, characteristics, faces, and features.
      </p>
    </div>
    <div className="learn__picture">
      <picture>
        <img
          src={img}
          alt="zombie"
          className="learn__picture-image"
        />
      </picture>

    </div>
  </section>
);

export default Learn;
