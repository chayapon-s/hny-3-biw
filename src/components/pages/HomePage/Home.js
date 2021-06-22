import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne } from './Data';
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'


function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <iframe width="10" height="10" src="https://www.youtube.com/embed/m__oafvzDg0?start=57&autoplay=1&enablejsapi=1" allow="autoplay" frameborder="0" ></iframe>
    </>
  );
}

export default Home;