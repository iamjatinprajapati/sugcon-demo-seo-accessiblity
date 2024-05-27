// components/CitySlider.js
import { NextImage, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';
// import { Link as NextLink } from '@sitecore-jss/sitecore-jss-nextjs';

const CitySlider = ({ fields }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  if (fields === null || fields === undefined) return <></>;

  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 ">
      <div className="-mx-4">
        <Text
          tag="p"
          field={fields?.title}
          className="text-4xl pb-6 font-bold tracking-tight text-gray-900"
        />
        <Slider {...settings}>
          {fields?.products?.map((product, index) => (
            <>
              {console.log(
                'product?.fields?.link?.value?.href',
                product?.fields?.link?.value?.href
              )}
              {product?.fields?.link?.value?.href && (
                <div className="px-4" key={index}>
                  <Link key={index} href={product?.fields?.link?.value?.href} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl sm:aspect-h-3 sm:aspect-w-2">
                      <NextImage
                        field={product?.fields?.image}
                        className="h-full w-full object-cover object-center group-hover:opacity-75 lg:w-[380px] lg:h-[380px]"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                      <Text tag="p" field={{ value: product?.fields?.link?.value?.text }} />
                    </div>
                  </Link>
                </div>
              )}
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CitySlider;
