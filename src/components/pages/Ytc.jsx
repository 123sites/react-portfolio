import React from 'react';

const Ytc = () => {
  return (
    <div
      name="ytc"
      className="aspect-video">

      <div className="flex flex-col items-center sm:flex-col text-stone-100 text-center mt-7">
        <a href="https://www.youtube.com/channel/UCMNe2clJI6nf-rmXoVg01xw" target="_blank"
          className="btn mb-3 text-3xl tracking-wider font-bold  text-orange-400 animate-pulse" rel="noopener noreferrer">Azores Travel & Genealogy YouTube Channel</a>

        <h1 className="text-3xl mb-3 tracking-wider font-bold">All About It:</h1>

        <iframe className="aspect-video md:h-screen sm:auto-cols-max" src="https://www.youtube.com/embed/1xaHwxBi8tU" title="YouTube video player" sframeborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

    </div>
  )
}

export default Ytc;