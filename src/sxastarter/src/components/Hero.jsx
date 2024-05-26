import { RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { describe } from 'node:test';
import React from 'react';
const heroFields = {
  title: {
    value: ' Exploring Bengaluru: A Vibrant City of People, Culture, and IT Business',
  },
  description: {
    value: `<p> Also known as Bangalore, is the capital of the Indian state of Karnataka. Often
    referred to as the &apos;Silicon Valley of India,&apos; Bengaluru is renowned for its
    role as the nation&apos;s leading IT exporter, housing numerous multinational
    corporations and tech startups. The city is located on the Deccan Plateau at an
    elevation of 920 meters (3,020 feet), giving it a pleasant climate throughout the
    year.</p>`,
  },
};
const Hero = ({ fields = heroFields }) => {
  return (
    <div className="relative -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-3">
      <div className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96" />
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-12 sm:pb-40 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <Text
            tag="p"
            field={fields?.title}
            className="animate__animated animate__slower animate__fadeInLeft max-w-2xl pt-12 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto"
          />
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <RichText
              tag="p"
              field={fields?.description}
              className="text-lg leading-8 animate__delay-1s text-gray-600 animate__animated animate__slower animate__fadeIn"
            />
          </div>
          <img
            src="./bangalore-home.webp"
            alt="bangalore city"
            className="animate__animated animate__slower animate__fadeInRight mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  );
};

export default Hero;

