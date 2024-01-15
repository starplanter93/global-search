import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from '../api';

export default function Country() {
  const params = useParams();
  const [country, setCountry] = useState();

  const setInitData = useCallback(async () => {
    const data = await fetchCountry(params.code);
    setCountry(data);
  }, [params.code]);

  useEffect(() => {
    setInitData();
  }, [params.code, setInitData]);

  return <div>Country : {params.code}</div>;
}
