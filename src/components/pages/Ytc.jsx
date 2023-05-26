import React from 'react';
// import Branding from '../../images/ytcBranding.png';

const Ytc = () => {
  return (
    <div
      name="ytc"
      className="h-screen w-full text-stone-100 text-center mt-20" >

      <div className="container mx-auto w-fit text-center">
        <a href="https://www.youtube.com/channel/UCMNe2clJI6nf-rmXoVg01xw" target="_blank"
          className="btn block mb-16 text-2xl tracking-wider font-bold" rel="noreferrer">My YouTube Channel</a>
        <h1 className="text-2xl mb-5 tracking-wider font-bold">About My Channel</h1>
        <iframe className="w-[700px] h-[400px]" src="https://www.youtube.com/embed/1xaHwxBi8tU" title="YouTube video player" frameborder="0"
        // <iframe width="700" height="415" src="https://www.youtube.com/embed/1xaHwxBi8tU" title="YouTube video player" sframeborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        {/* <div className="picture rounded-xl mx-auto w-2/3 md:w-full mt-5"> */}
        {/* <img src={Branding} alt="Azores Travel & Genealogy YouTube Channel link" /> */}
      </div>
      {/* </div> */}
    </div>
  )
}

export default Ytc;