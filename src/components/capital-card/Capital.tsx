interface CapitalProps {
  capital: string;
  region: string;
  subregion: string;
}

const Capital = ({ capital, region, subregion }: CapitalProps) => {
  return (
    <>
      <div className="rounded-[5px] w-[540px] h-[143px] shadow-all p-8">
        <h1>
          Capital: <span className="font-bold">{capital}</span>
        </h1>
        <h1>
          Region: <span className="font-bold">{region}</span>
        </h1>
        <h1>
          Subregion: <span className="font-bold">{subregion}</span>
        </h1>
      </div>
    </>
  );
};

export default Capital;
