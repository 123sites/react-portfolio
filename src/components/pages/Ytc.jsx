import React from 'react';
import Branding from '../../images/ytcBranding.png';

const Ytc = () => {
  return (
    <div
      name="ytc"
      className="h-screen w-full text-stone-100"
    >
    
      <div className="position-absolute">
        <a href="https://www.youtube.com/channel/UCMNe2clJI6nf-rmXoVg01xw" target="_blank" className="btn" rel="noreferrer">My YouTube Channel:</a>
        <div className="picture rounded-xl mx-auto w-2/3 md:w-full mt-5">
        <img src={Branding} alt="Azores Travel & Genealogy YouTube Channel link" />
      </div>
      </div>
    </div>
  )
}

export default Ytc;