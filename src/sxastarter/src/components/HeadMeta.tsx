import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import Head from 'next/head';
import React from 'react';
type HeadMetaProps = {
  data: {
    Title: Field<string>;
    keywords: Field<string>;
    metaDescription: Field<string>;
  };
};
const HeadMeta = ({ data }: HeadMetaProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{data?.Title?.value}</title>
        <meta name="keywords" content={data?.keywords?.value ?? ''} />
        <meta name="description" content={data?.metaDescription?.value} />
      </Head>
    </>
  );
};

export default HeadMeta;
