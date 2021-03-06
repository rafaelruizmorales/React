import React from 'react';
import Carousel from 'nuka-carousel';

import './App.css'

// https://github.com/FormidableLabs/nuka-carousel


function App() {

  return (
    <div className='container'>
      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (null)}
        renderCenterRightControls={({ nextSlide }) => (null)}
      >
        <img alt="" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
        <img alt="" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
        <img alt="" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
      </Carousel>


      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (null)}
        renderCenterRightControls={({ nextSlide }) => (null)}
      >
        <img alt="" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
        <img alt="" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
        <img alt="" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
        <img alt="" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
      </Carousel>

      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (null)}
        renderCenterRightControls={({ nextSlide }) => (null)}
      >
        <img alt="" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
        <img alt="" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
        <img alt="" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
        <img alt="" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
        <img alt="" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
        <img alt="" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
      </Carousel>
    </div>
  );
}

export default App;
