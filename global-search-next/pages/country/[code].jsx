import { fetchCountry } from '@/api';
import SubLayout from '@/components/SubLayout';
import { useRouter } from 'next/router';
import style from './[code].module.css';
import Image from 'next/image';

export default function Country({ country }) {
  const router = useRouter();
  const { code } = router.query;

  if (router.isFallback) {
    return <div>Loading....</div>;
  }

  if (!country) {
    return <div>존재하지 않는 국가입니다</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.commonName}>
          {country.flagEmoji}&nbsp;{country.commonName}
        </div>
        <div className={style.officialName}>{country.officialName}</div>
      </div>
      <div className={style.flag_img}>
        <Image
          src={country.flagImg}
          alt={`${country.commonName}의 국기 이미지입니다`}
          fill
        />
      </div>
      <div className={style.body}>
        <div>
          <b>코드 :</b>&nbsp;{country.code}
        </div>
        <div>
          <b>수도 :</b>&nbsp;{country.capital.join(', ')}
        </div>
        <div>
          <b>지역 :</b>&nbsp;{country.region}
        </div>
        <div>
          <b>지도 :</b>&nbsp;
          <a target='_blank' rel='noreferrer' href={country.googleMapURL}>
            {country.googleMapURL}
          </a>
        </div>
      </div>
    </div>
  );
}

Country.Layout = SubLayout;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { code: 'ABW' } }, { params: { code: 'KOR' } }],
    // fallback: 'blocking'
    // paths에 설정되어있지 않은 params로 요청이 들어온다면 ssr방식으로 페이지를 생성함.
    // 첫 생성이후에는 next서버에 저장되어 그뒤로 오는 요청에 대해 ssg방식으로 대응.
    fallback: true
    // true로 설정하면, staticProps는 들어오지 않은 상태의 페이지(fallback상태의 페이지)가 우선 client로 전송되고,
    // staticProps가 서버에서 생성된 뒤에 client로 전송되어 입혀짐.
    // true방식도 첫 생성이후에는 next서버에 저장되어 그 뒤로 오는 요청에 대해서는 ssg방식으로 대응
  };
};

export const getStaticProps = async (context) => {
  const { code } = context.params;
  console.log(`${code} 페이지 생성`);

  let country = null;
  if (code) {
    country = await fetchCountry(code);
    console.log(country);
  }

  return {
    props: {
      country
    },
    revalidate: 3
  };
};
