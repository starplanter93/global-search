import { useEffect } from 'react';
import { fetchCountries } from '@/api';
import Searchbar from '@/components/SearchBar';
import CountryList from '@/components/CountryList';

export default function Home({ countries }) {
  return (
    <>
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
