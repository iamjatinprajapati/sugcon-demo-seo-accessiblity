import { RichText } from '@sitecore-jss/sitecore-jss-react';
import Link from 'next/link';

export default function Footer({ fields }) {
  if (fields === null || fields === undefined) return <></>;

  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-center lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0">
          <RichText
            tag="div"
            field={fields?.copyrightText}
            className="text-center text-md leading-5 text-gray-900"
          />
        </div>
      </div>
    </footer>
  );
}

