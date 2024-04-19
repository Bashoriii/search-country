import { useState } from 'react';
import { Input } from '@/components/ui/input';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

const Home = () => {
  const [inputFocused, setInputFocused] = useState(false);
  const [countries, setCountry] = useState([]);
  const [noCountry, setNoCountry] = useState(false);

  const handleSearch = (e) => {
    let name = e.target.value;
    if (name.trim() !== '') {
      const fetchSearch = async () => {
        const fetchData = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const response = await fetchData.json();
        console.log(response);

        if (response.status !== 404) {
          setCountry(response);
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
  };
  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputNotFocus = () => {
    setInputFocused(false);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
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
            <ul className="border rounded-[5px] w-[700px] px-6 mt-2">
              {countries.slice(0, 5).map((country, index) => (
                <li key={index}>{country.name.common}</li>
              ))}
            </ul>
          ) : (
            <p className="border rounded-[5px] w-[700px] h-[71px] px-6 mt-2 flex items-center text-merah">
              Data not Found
            </p>
          ))}
      </div>
    </>
  );
};

export default Home;
