import { useEffect, useState } from "react";
import LeaderboardItem from "./LeaderboardItem";

const Leaderboard = (props) => {
  const [leaderboardArr, setLeaderboardArr] = useState([]);

  useEffect(() => {
    if (props.status === true) {
      console.log(props.racers);
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

      for (const racer of props.racers) {
        console.log(racer);
        console.log(leaderboardArr);
        tempArray.push(
            <LeaderboardItem
              alias = {racer.alias}
              position = {racer.position}
              timeDelta = {racer.interval}
            />,
        );
        console.log(leaderboardArr);
      }
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
