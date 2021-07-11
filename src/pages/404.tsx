import React from "react";
import Link from 'next/link';
import { Layout } from "../components/Layout";
import Head from "next/head";

const NoMatch = () => {
  return (
    <Layout contentClassName="NoMatch">
      <Head>
        <title>Page not found</title>
        <meta name="og:title" property="og:title" content='Page not found' />
      </Head>
      <img alt="Sad Baby Yoda - GIF" className='NoMatch__img' src='/static/baby-yoda.gif' />
      <span>Sorry, that page cannot be found</span>
      <span>Try going <Link href={'/'}>
        <a>here</a>
      </Link> instead, thanks.
      </span>
    </Layout>
  )
};

export default NoMatch;