import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import LatLong from '@/components/latlong-card/Latlong';
import Capital from '@/components/capital-card/Capital';
import CallingAndCurrency from '@/components/calling-code/Calling';
import Loading from '@/components/loading/Loading';

interface Country {
  latlng: string;
  latnum: string;
  altSpellings: string[];
  name: { common: string };
  flag: string;
  capital: string;
  region: string;
  subregion: string;
  countryName: string | string[];
}

const Result = () => {
  const [data, setData] = useState<Country[]>([]);
  const [currency, setCurrency] = useState('');
  const [listCountry, setListCountry] = useState('');
  const [currLength, setCurrLength] = useState<number>(0);
  const [calling, setCalling] = useState('0');
  const [isLoading, setIsLoading] = useState(true);
  const { countryName } = useParams();
  const fetchData = async () => {
    setIsLoading(true);
    const dataFetch = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );

    const response = await dataFetch.json();
    const currencies = response[0]?.currencies;
    const currencyCode = Object.keys(currencies)[0];
    const callingCode = response[0]?.idd?.suffixes[0];

    setData(response);
    setCurrency(currencyCode);
    setCalling(callingCode);
    fetchCurrency(currencyCode);
    setIsLoading(false);
  };

  const fetchCurrency = async (currencyCode: string) => {
    const dataCurr = await fetch(
      `https://restcountries.com/v3.1/currency/${currencyCode}`
    );
    const response = await dataCurr.json();
    setCurrLength(response.length);
    setListCountry(response);
    console.log(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="p-24 h-screen">
        <Link to="/">
          <Button variant="default" className="h-[50px]">
            <Icon path={mdiArrowLeft} size={1.1} className="mr-3" /> Back to
            Homepage
          </Button>
        </Link>

        {isLoading ? (
          <Loading />
        ) : (
          data.map((item, parentIndex) => (
            <div key={parentIndex} className="main-content mt-16">
              <h1 className="font-bold text-5xl mb-4">
                {item.name.common} <span>{item.flag}</span>
              </h1>

              <div className="flex">
                {item.altSpellings.map((alt: string, index: number) => (
                  <p
                    key={`alt-${parentIndex}-${index}`}
                    className="mr-1 bg-ijo rounded-[50px] px-4 py-1 text-xs text-background font-bold"
                  >
                    {alt}
                  </p>
                ))}
              </div>

              <div className="flex gap-6 mt-4">
                <LatLong
                  latlng={'LatLong'}
                  latnum={
                    Array.isArray(item.latlng)
                      ? item.latlng.map((value) => Number(value))
                      : []
                  }
                />
                <Capital
                  capital={item.capital[0]}
                  region={item.region}
                  subregion={item.subregion}
                />
              </div>

              <div className="calling-and-currency flex gap-6">
                <CallingAndCurrency
                  title={'Calling Code'}
                  span={calling}
                  val={1}
                  para={'with this calling code'}
                  countryName={'1'}
                />
                <CallingAndCurrency
                  title={'Currency'}
                  span={currency}
                  val={currLength}
                  para={'with this currency'}
                  countryName={
                    Array.isArray(listCountry)
                      ? listCountry.map((country) => country.name.common)
                      : listCountry
                  }
                />
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Result;
