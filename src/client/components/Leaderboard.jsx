import { useEffect, useState } from "react";
import LeaderboardItem from "./LeaderboardItem";

const Leaderboard = (props) => {
  const [leaderboardArr, setLeaderboardArr] = useState([]);


  useEffect(() => {
    if (props.status === true) {
      const tempArray = [];
      tempArray.push(
        <div className="child"> {/** child of outer flexbox in leaderboard component */}
          <div className="parent"> {/** el row */}
            <div className="child"> {/** el data */}
              Position
            </div>
            <div className="child">
              Alias
            </div>
            <div className="child">
              Interval
            </div>
          </div>
        </div>,
      );

      props.racers.forEach((racer, i) => {
        tempArray.push(
            <LeaderboardItem
              alias = {racer.alias}
              position = {i + 1}
              timeDelta = {racer.interval}
            />,
        );
      });
      setLeaderboardArr(tempArray);
    }
  }, [props.status, props.racers]);

  return (
    <div className="leaderboardParent">
        {leaderboardArr}
    </div>
  );
};

export default Leaderboard;
