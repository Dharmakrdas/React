import { Link } from "react-router-dom";
import ResturentCard, { peopleChoice } from "./ResturentCard";

const OnlineResturent = ({ data }) => {
  const RecomendedCard = peopleChoice(ResturentCard);

  return (
    <div>
      <p className="bold-heading">
        {"Resturent with online food delivery in Bangalore"}
      </p>
      <div className="resturent-cantainer">
        {data &&
          data.map((item) => (
            <Link key={item?.info?.id} to={"resturent/" + item?.info?.id}>
              {item?.info?.avgRating > 4.5 ? (
                <RecomendedCard data={item?.info} />
              ) : (
                <ResturentCard data={item?.info} />
              )}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default OnlineResturent;
