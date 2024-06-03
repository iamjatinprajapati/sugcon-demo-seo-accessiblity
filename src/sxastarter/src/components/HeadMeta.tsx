import Head from 'next/head';
import React from 'react';

const HeadMeta = ({ data }: any): JSX.Element => {
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
