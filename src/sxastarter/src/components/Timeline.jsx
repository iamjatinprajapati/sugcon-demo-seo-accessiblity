import { RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

const Timeline = ({ fields }) => {
  return (
    <>
      {fields?.timeline && fields?.timeline?.length > 0 && (
        <div data-component-name="Timeline" className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {fields?.timeline.map((item) => (
              <div key={item?.fields?.name?.value}>
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
                >
                  <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  <Text field={item?.fields?.date} />
                  <div
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    aria-hidden="true"
                  />
                </time>
                <Text
                  field={item?.fields?.name}
                  tag="p"
                  className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900"
                />
                <RichText
                  field={item?.fields?.description}
                  tag="p"
                  className="mt-1 text-base leading-7 text-gray-600"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Timeline;
