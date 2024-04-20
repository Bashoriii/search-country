import Globe from '@/assets/globe.svg';

type LatLongProps = {
  latlng: string;
  latnum: number[];
};

const LatLong = ({ latlng, latnum }: LatLongProps) => {
  // const formattedLatnum = latnum.toFixed(1);
  return (
    <>
      <div className="latlong-card rounded-[5px] w-[540px] h-[143px] overflow-hidden shadow-all flex">
        <div className="flex-grow p-8">
          <h1 className="text-lg font-medium mb-1">{latlng}</h1>
          <span className="text-4xl font-bold text-ungu">
            {latnum.map((value) => value.toFixed(1)).join(', ')}
          </span>
        </div>
        <img
          src={Globe}
          alt="Globe Icon"
          className="w-[170px] h-[200px] mt-4"
        />
      </div>
    </>
  );
};

export default LatLong;
