import React from 'react';
import Branding from '../../images/ytcBranding.png';

const Ytc = () => {
  return (
    <div
      name="ytc"
      className="h-screen w-full text-stone-100"
    >
    
      <div className="position-absolute container w-1/3 m-20 p-20">
        <a href="https://www.youtube.com/channel/UCMNe2clJI6nf-rmXoVg01xw" target="_blank" className="btn" rel="noreferrer">My YouTube Channel:</a>
        <a href="https://youtu.be/1xaHwxBi8tU" target="_blank" className="btn" rel="noreferrer">My YouTube Channel:</a>
        {/* <div className="picture rounded-xl mx-auto w-2/3 md:w-full mt-5"> */}
        <img src={Branding} alt="Azores Travel & Genealogy YouTube Channel link" />
      </div>
      {/* </div> */}
    </div>
  )
}

export default Ytc;