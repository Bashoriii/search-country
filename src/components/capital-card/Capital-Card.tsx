interface CapitalCardProps {
  capital: string;
  region: string;
  subreg: string;
}

const CapitalCard = ({ capital, region, subreg }: CapitalCardProps) => {
  return (
    <>
      <ul className="rounded-[5px] w-[540px] h-[143px] shadow-all p-8">
        <li>
          Capital: <span className="font-bold">{capital}</span>
        </li>
        <li>
          Region: <span className="font-bold">{region}</span>
        </li>
        <li>
          Subregion: <span className="font-bold">{subreg}</span>
        </li>
      </ul>
    </>
  );
};

export default CapitalCard;
