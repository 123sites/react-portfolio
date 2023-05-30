import React from 'react';
// import Branding from '../../images/ytcBranding.png';

const Ytc = () => {
  return (
    <div
      name="ytc"
      className="h-screen w-full text-stone-100 text-center mt-20" >

      <div className="max-w-screen=xl flex flex-col items-center pt-10 px-1 sm:flex-col tracking-widest">
      {/* <div className="container mx-auto w-fit text-center"> */}
        <a href="https://www.youtube.com/channel/UCMNe2clJI6nf-rmXoVg01xw" target="_blank"
          className="btn mb-16 text-2xl tracking-wider font-bold" rel="noreferrer">Azores Travel & Genealogy YouTube Channel</a>
        <h1 className="text-2xl mb-3 tracking-wider font-bold">All About It:</h1>
        <iframe src="https://www.youtube.com/embed/1xaHwxBi8tU" title="YouTube video player" frameborder="0"
        // <iframe className="w-[700px] h-[400px]" src="https://www.youtube.com/embed/1xaHwxBi8tU" title="YouTube video player" frameborder="0"
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