import { Tooltip } from 'react-tooltip';

type CallingAndCurrencyProps = {
  title: string;
  span: string;
  val: number;
  para: string;
  countryName: string | string[];
};

const CallingCode = ({
  title,
  span,
  val,
  para,
  countryName,
}: CallingAndCurrencyProps) => {
  return (
    <>
      <div className="calling w-[540px] mt-8">
        <h1 className="font-medium text-lg mb-2">{title}</h1>
        <span className="font-bold text-5xl text-ungu">{span}</span>
        <p className="text-sm font-medium mt-2">
          <span
            className="text-ungu underline cursor-pointer"
            data-tooltip-id="country-name"
            data-tooltip-content={
              Array.isArray(countryName) ? countryName.join(', ') : countryName
            }
          >
            {Array.isArray(countryName) ? countryName.length : val} country
          </span>{' '}
          {para}
        </p>
        <Tooltip id="country-name" />
      </div>
    </>
  );
};

export default CallingCode;
