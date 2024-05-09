import { Tooltip } from 'react-tooltip';

type CallingAndCurrencyProps = {
  title: string;
  span: string;
  countryName: string;
};

const CallingCode = ({ title, span, countryName }: CallingAndCurrencyProps) => {
  return (
    <>
      <div className="calling w-[540px] mt-8">
        <h1 className="font-medium text-lg mb-2">{title}</h1>
        <h2 className="font-bold text-5xl text-ungu">{span}</h2>
        <h3 className="text-sm font-medium mt-2">
          <span
            className="text-ungu underline cursor-pointer"
            data-tooltip-id="country-name"
            data-tooltip-content={countryName}
          >
            1 Country
          </span>{' '}
          with this {title.toLocaleLowerCase()}
        </h3>

        <Tooltip id="country-name" />
      </div>
    </>
  );
};

export default CallingCode;
