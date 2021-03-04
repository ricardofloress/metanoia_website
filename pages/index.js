import React, { useState } from 'react';
import Home1 from '../components/Home1';
import Parallax from '../components/Parallax';
import Products from '../components/Porducts';


export default function Home() {

  return (
    <>
      <Home1 />
      <Parallax link="/" imgBg="/images/parallax-metanoia.jpg" />
      <Products />
    </>
  );
}
