import { Link } from "react-router-dom";
import ResturentCard, { peopleChoice } from "./ResturentCard";

const OnlineResturent = ({ data, header_txt }) => {
  const RecomendedCard = peopleChoice(ResturentCard);

  return (
    <div data-testid="online-res-card">
      <p className="bold-heading">{header_txt}</p>
      <div className="grid-container">
        {data &&
          data.map((item) => (
            <Link key={item?.info?.id} to={"resturent/" + item?.info?.id}>
             
                <ResturentCard data={item?.info} />
           
            </Link>
          ))}
      </div>
    </div>
  );
};

export default OnlineResturent;
