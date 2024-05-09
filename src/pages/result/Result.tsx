import { useQuery, QueryFunction } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import Loading from '@/components/loading/Loading';
import { Button } from '@/components/ui/button';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';

import LatlongCard from '@/components/latlong-card/Latlong-Card';
import CapitalCard from '@/components/capital-card/Capital-Card';
import CallingAndCurrency from '@/components/calling-code/Calling-Card';

interface IDD {
  root: string;
  suffixes: string[];
}

interface CountryV2 {
  latlng: number[];
  latnum: string;
  altSpellings: string[];
  name: { common: string };
  flag: string;
  capital: string;
  region: string;
  subregion: string;
  idd: IDD;
  currencies: string;
}

type QueryKeyParam = [string, { countryName: string | undefined }];

const fetchRestCountries: QueryFunction<CountryV2[], QueryKeyParam> = async ({
  queryKey,
}) => {
  const [, { countryName }] = queryKey;
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  );
  if (!response.ok) {
    throw new Error('Cant fetch data country');
  }
  const data: CountryV2[] = await response.json();
  return data;
};

const Result = () => {
  const { countryName } = useParams();
  const queryKey: QueryKeyParam = ['country', { countryName }];
  const { data, isLoading } = useQuery({
    queryKey: queryKey,
    queryFn: fetchRestCountries,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="p-24 h-screen">
        <Link to="/">
          <Button variant="default" className="h-[50px]">
            <Icon path={mdiArrowLeft} size={1.1} className="mr-3" /> Back to
            Homepage
          </Button>
        </Link>

        {data?.map((item, index) => {
          // LatLong
          const latLongGetDecimal = item.latlng.map((lat) => lat.toFixed(1));
          const latLongWithSeparator = latLongGetDecimal.join(', ');

          // Calling Code
          const rootNum = item.idd.root;
          const suffNum = item.idd.suffixes[0];
          const callCode = rootNum + suffNum;

          // Currency
          const currency = Object.keys(item.currencies)[0];

          return (
            <div className="main-content mt-16" key={index}>
              <h1 className="font-bold text-5xl mb-4">
                {item.name.common} <span>{item.flag}</span>
              </h1>

              {/* Country Tags / Alt Spellings */}
              <ul className="flex" key={index}>
                {item.altSpellings.map((tags, index) => (
                  <li
                    key={index}
                    className="mr-1 bg-ijo rounded-[50px] px-4 py-1 text-xs text-background font-bold"
                  >
                    {tags}
                  </li>
                ))}
              </ul>

              {/* LatLong, Capital, Region and Subregion */}
              <div className="flex gap-6 mt-4">
                <LatlongCard latlngVal={latLongWithSeparator} />
                <CapitalCard
                  capital={item.capital}
                  region={item.region}
                  subreg={item.subregion}
                />
              </div>

              {/* <CallingCard /> */}
              <div className="flex gap-6">
                <CallingAndCurrency
                  title={'Calling Code'}
                  span={callCode}
                  countryName={item.name.common}
                />
                <CallingAndCurrency
                  title={'Currency'}
                  span={currency}
                  countryName={item.name.common}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Result;
