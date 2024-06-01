import { RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

const CultureDetails = ({ fields }) => {
  return (
    <div data-component-name="CultureDetails" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <Text
          field={fields?.cultureTitle}
          tag="p"
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        />
        <RichText
          tag="div"
          className="mt-6 text-base leading-7 text-gray-600"
          field={fields?.cultureDescription}
        />
      </div>
      <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
          <Text
            field={fields?.artsTitle}
            tag="p"
            className="flex-none text-3xl font-bold tracking-tight text-gray-900"
          />
          <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
            <RichText
              tag="div"
              className="mt-2 text-base leading-7 text-gray-600"
              field={fields?.artsDescription}
            />
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
          <Text
            field={fields?.cuisineTitle}
            tag="p"
            className="flex-none text-3xl font-bold tracking-tight text-white"
          />
          <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
            <RichText
              tag="div"
              className="text-lg tracking-tight text-white"
              field={fields?.cuisineDescription}
            />
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
          <Text
            field={fields?.musicAndNightlifeTitle}
            tag="p"
            className="flex-none text-3xl font-bold tracking-tight text-white"
          />

          <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
            <RichText
              tag="div"
              className="mt-2 text-base leading-7 text-indigo-200"
              field={fields?.musicAndNightlifeDescription}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureDetails;

