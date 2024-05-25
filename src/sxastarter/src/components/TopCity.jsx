import { NextImage, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import React from 'react';

const TopCity = ({ fields }) => {
  if (fields === null || fields === undefined) return <></>;
  return (
    <section aria-labelledby="category-heading" className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <Text
            field={fields?.title}
            tag="p"
            className="text-4xl font-bold tracking-tight text-gray-900"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group relative aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <NextImage
              field={fields?.cities?.[0]?.fields?.img}
              className="object-cover object-center group-hover:opacity-75"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50"
            />
            <div className="flex items-end p-6 sm:absolute bottom-0 left-0 sm:inset-0">
              <div>
                <h3 className="font-semibold text-4xl lg:text-6xl text-black sm:text-white">
                  <Link href="#">
                    <span className="absolute inset-0" />
                    Mumbai
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <NextImage
              field={fields?.cities?.[1]?.fields?.img}
              className="object-cover object-center sm:max-w-full group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute bottom-0 left-0 sm:inset-0">
              <div>
                <h3 className="font-semibold text-4xl text-black sm:text-white">
                  <Link href="#">
                    <span className="absolute inset-0" />
                    Delhi
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <NextImage
              field={fields?.cities?.[2]?.fields?.img}
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:!w-full sm:max-w-full"
            />

            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-4xl text-black sm:text-white">
                  <Link href="#">
                    <span className="absolute inset-0" />
                    Bengaluru
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopCity;

