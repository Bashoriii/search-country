import Globe from '@/assets/globe.svg';

type LatLongProps = {
  latlngVal: string;
};

const LatlongCard = ({ latlngVal }: LatLongProps) => {
  return (
    <>
      <div className="latlong-card rounded-[5px] w-[540px] h-[143px] overflow-hidden shadow-all flex justify-between">
        <div className="p-8">
          <h1 className="text-lg font-medium mb-1">LatLong</h1>
          <span className="text-4xl font-bold text-ungu">{latlngVal}</span>
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

export default LatlongCard;
