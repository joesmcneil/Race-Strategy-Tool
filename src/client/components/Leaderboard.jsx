import { useEffect, useState } from "react";
import LeaderboardItem from "./LeaderboardItem";

const Leaderboard = (props) => {
  const [leaderboardArr, setLeaderboardArr] = useState([]);

  useEffect(() => {
    if (props.status === true) {
      console.log(props.dataArr);
      const tempArray = [];
      tempArray.push(
        <div class="child"> {/** child of outer flexbox in leaderboard component */}
          <div class="parent"> {/** el row */}
            <div class="child"> {/** el data */}
              Position
            </div>
            <div class="child">
              Alias
            </div>
            <div class="child">
              Interval
            </div>
          </div>
        </div>,
      );

      for (const racer of props.dataArr) {
        console.log(racer);
        console.log(leaderboardArr);
        tempArray.push(
            <LeaderboardItem
              alias = {racer.alias}
              position = {racer.position}
              timeDelta = {racer.timeDelta}
            />,
        );
        console.log(leaderboardArr);
      }
      setLeaderboardArr(tempArray);
    }
  }, [props.status, props.dataArr]);

  return (
    <div className="leaderboardParent">
        {leaderboardArr}
    </div>
  );
};

export default Leaderboard;
