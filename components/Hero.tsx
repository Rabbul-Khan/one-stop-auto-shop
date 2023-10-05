'use client';

import React from 'react';
import CustomButton from './CustomButton';
import Image from 'next/image';

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero ">
      <div className="flex-1 mt-36 padding-x">
        <h1 className="hero__title">One Stop Auto Shop</h1>
        <p className="hero__subtitle">High performance, time and again…</p>
        <CustomButton
          title="Explore"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
          btnType="button"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src={'/hero.png'}
            alt="Image of a car"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
