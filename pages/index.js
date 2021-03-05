import React, { useState } from 'react';
import Home1 from '../components/Home1';
import Home2 from '../components/Home2';
import Parallax from '../components/Parallax';
import Products from '../components/Porducts';


export default function Home() {

  return (
    <>
      <Home1 />
      <Products />
      <Parallax link="/" imgBg="/images/parallax-metanoia.jpg" />
      <Home2 />
      <Parallax link="/" imgBg="/images/backhome2.jpg" />

    </>
  );
}
