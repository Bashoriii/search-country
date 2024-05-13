import { Tooltip } from 'react-tooltip';

type CallingAndCurrencyProps = {
  title: string;
  span: string;
  tooltipMsg: string;
  countryCount: number | undefined;
};

const CallingCode = ({
  title,
  span,
  tooltipMsg,
  countryCount,
}: CallingAndCurrencyProps) => {
  return (
    <>
      <div className="calling w-[540px] mt-8">
        <h1 className="font-medium text-lg mb-2">{title}</h1>
        <h2 className="font-bold text-5xl text-ungu">{span}</h2>
        <h3 className="text-sm font-medium mt-2">
          <span
            className="text-ungu underline cursor-pointer"
            data-tooltip-id="country-name"
            data-tooltip-content={tooltipMsg}
          >
            {countryCount} Country
          </span>{' '}
          with this {title.toLocaleLowerCase()}
        </h3>

        <Tooltip id="country-name" />
      </div>
    </>
  );
};

export default CallingCode;
