import { NextImage, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import React from 'react';

const ITBusiness = ({ fields  }) => {
  return (
    <div data-component-name="ITBusiness" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
        <div className="w-full lg:max-w-lg lg:flex-auto">
          <Text
            tag="p"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            field={fields?.title}
          />
          <RichText
            className="mt-6 text-xl leading-8 text-gray-600"
            field={fields?.description}
            tag="div"
          />
          <NextImage
            className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
            field={fields?.image}
          />
        </div>
        <div className="w-full lg:max-w-xl lg:flex-auto">
          <ul className="-my-8 divide-y divide-gray-100">
            {fields?.jobOpenings?.map(({ fields }) => (
              <li key={fields?.name?.value} className="py-8">
                <dl className="relative flex flex-wrap gap-x-3">
                  <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                    <Text field={fields?.name} />
                    <span className="absolute inset-0" aria-hidden="true" />
                  </dd>
                  <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">
                    <RichText field={fields?.description} />
                  </dd>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ITBusiness;

