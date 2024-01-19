import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchResults } from '../api';
import Searchbar from '../components/SearchBar';
import CountryList from '../components/CountryList';
import style from './Search.module.css';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q');

  const [countries, setCountries] = useState([]);

  const setInitData = useCallback(async () => {
    const data = await fetchSearchResults(q);
    setCountries(data);
  }, [q]);

  useEffect(() => {
    setInitData();
  }, [q, setInitData]);

  return (
    <div className={style.container}>
      <Searchbar q={q} />
      <b>{q} 검색 결과</b>
      <CountryList countries={countries} />
    </div>
  );
}
