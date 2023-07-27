import React from 'react';
import './Shoes.css';
import { Link } from 'react-router-dom';

function Shoes() {
  return (
    <div className='flex flex-wrap justify-center'>
      <Link to="/Croc">
        <img
          className='shoe-image'
          style={{ width: '100%', height: 'auto', maxWidth: '320px' }}
          src='https://assets.ajio.com/cms/AJIO/WEB/05052023-UHP-Ajiomania-TopBrandsforyourgetaway-D-P4-Crocs-Upto50.jpg'
          alt='shoe'
        />
      </Link>
      <Link to="/Puma">
      <img
        className='shoe-image'
        style={{ width: '100%', height: 'auto', maxWidth: '320px' }}
        src='https://assets.ajio.com/cms/AJIO/WEB/05052023-UHP-Ajiomania-TopBrandsforyourgetaway-D-P1-Puma-Min50.jpg'
        alt='shoe'
      />
      </Link>
      <Link to='/Nike'>
      <img
        className='shoe-image'
        style={{ width: '100%', height: 'auto', maxWidth: '320px' }}
        src='https://assets.ajio.com/cms/AJIO/WEB/05052023-UHP-Ajiomania-TopBrandsforyourgetaway-D-P2-Nike-Upto50.jpg'
        alt='shoe'
      />
      </Link>
      {/* <img
        className='shoe-image'
        style={{ width: '100%', height: 'auto', maxWidth: '320px' }}
        src='https://assets.ajio.com/cms/AJIO/WEB/05052023-UHP-Ajiomania-TopBrandsforyourgetaway-D-P3-Adidas-Min50.jpg'
        alt='shoe'
      /> */}
    </div>
  );
}

export default Shoes;
