import Image from 'next/image';
import style from './CountryItem.module.css';
import { useRouter } from 'next/router';

export default function CountryItem({
  code,
  commonName,
  flagEmoji,
  flagImg,
  population,
  region,
  capital
}) {
  const router = useRouter();
  const onClickItem = () => {
    router.push(`/country/${code}`);
  };
  return (
    <div onClick={onClickItem} className={style.container}>
      <Image
        className={style.flag_img}
        src={flagImg}
        alt='flag'
        width={100}
        height={100}
      />
      <div className={style.content}>
        <div className={style.name}>
          {flagEmoji} {commonName}
        </div>
        <div>지역 : {region}</div>
        <div>수도 : {capital.join(', ')}</div>
        <div>인구 : {population}</div>
      </div>
    </div>
  );
}
