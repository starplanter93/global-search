import { useEffect } from 'react';
import { fetchCountries } from '@/api';

export default function Home({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const countries = await fetchCountries();
  return {
    props: {
      countries,
    },
  };
};
