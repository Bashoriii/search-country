import { Link } from 'react-router-dom';
import { useState, ChangeEvent, useRef } from 'react';
import { Input } from '@/components/ui/input';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

interface Countries {
  name: { common: string };
}

const Home = () => {
  const [inputFocused, setInputFocused] = useState(false);
  const [countries, setCountry] = useState<Countries[]>([]);
  const [noCountry, setNoCountry] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value.trim();

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      if (name !== '') {
        const fetchSearch = async () => {
          const response = await fetch(
            `https://restcountries.com/v3.1/name/${name}`
          );
          const data = await response.json();

          if (response.status !== 404) {
            setCountry(data);
            setNoCountry(false);
          } else {
            setNoCountry(true);
          }
        };

        try {
          fetchSearch();
        } catch (error) {
          console.log(error);
        }
      } else {
        setCountry([]);
      }
    }, 500);
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputNotFocus = () => {
    setInputFocused(false);
  };

  return (
    <>
      <div className="flex flex-col items-center h-screen mt-48">
        <h1 className="font-inter font-bold text-7xl mb-12">Country</h1>
        <div className="relative">
          <Input
            type="text"
            placeholder="Type any country name"
            onFocus={handleInputFocus}
            onBlur={handleInputNotFocus}
            onChange={handleSearch}
          />
          <Icon
            path={mdiMagnify}
            size={1.25}
            className={`text-abu absolute top-[18px] right-[20px] ${
              inputFocused ? 'text-ungu' : ''
            }`}
          />
        </div>
        {countries.length > 0 &&
          (!noCountry ? (
            <ul className="shadow-md rounded-[5px] w-[700px] px-6 mt-2 flex flex-col">
              {countries.slice(0, 5).map((country, index) => (
                <Link
                  key={index}
                  to={`/result/${encodeURIComponent(
                    country.name.common.toLowerCase()
                  )}`}
                  className="hover:bg-gray-100"
                >
                  {country.name.common}
                </Link>
              ))}
            </ul>
          ) : (
            <p className="shadow-md rounded-[5px] w-[700px] h-[71px] px-6 mt-2 flex items-center text-merah">
              Data not Found
            </p>
          ))}
      </div>
    </>
  );
};

export default Home;
