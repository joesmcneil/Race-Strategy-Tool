import LeaderboardItem from "./LeaderboardItem";

const Leaderboard = (props) => {
  const leaderboardArr = [];
  for (const racer of props.dataArr) {
    leaderboardArr.push(
        <LeaderboardItem
          alias = {racer.alias}
          position = {racer.position}
          timeDelta = {racer.timeDelta}
        />,
    );
  }
  return (
    <div class="parent">
        {leaderboardArr}
    </div>
  );
};

export default Leaderboard;
