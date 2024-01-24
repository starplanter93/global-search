import { fetchSearchResults } from '@/api';
import CountryList from '@/components/CountryList';
import Searchbar from '@/components/SearchBar';
import SubLayout from '@/components/SubLayout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  const [countries, setCountries] = useState([]);

  const setData = async () => {
    const data = await fetchSearchResults(q);
    setCountries(data);
  };

  useEffect(() => {
    if (q) {
      setData();
    }
  }, [q]);

  return (
    <>
      <Head>
        <title>Global Search 검색 결과</title>
        <meta property='og:image' content='/thumbnail.png' />
        <meta property='og:title' content='Global Search 검색 결과' />
        <meta
          property='og:description'
          content='쉽고 빠르게 세계 각 국가들을 확인해보세요'
        />
      </Head>
      <Searchbar q={q} />
      <CountryList countries={countries} />
    </>
  );
}

Search.Layout = SubLayout;
