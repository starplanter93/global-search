import { useEffect } from 'react';
import { fetchCountries } from '@/api';
import Searchbar from '@/components/SearchBar';
import CountryList from '@/components/CountryList';
import Head from 'next/head';

export default function Home({ countries }) {
  return (
    <>
      <Head>
        <title>Global Search</title>
        <meta property='og:image' content='/thumbnail.png' />
        <meta property='og:title' content='Global Search' />
        <meta
          property='og:description'
          content='쉽고 빠르게 세계 각 국가들을 확인해보세요'
        />
      </Head>
      <Searchbar />
      <CountryList countries={countries} />
    </>
  );
}

export const getStaticProps = async () => {
  const countries = await fetchCountries();
  return {
    props: {
      countries
    }
  };
};
