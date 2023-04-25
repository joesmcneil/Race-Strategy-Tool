import LeaderboardItem from "./LeaderboardItem";

const Leaderboard = (props) => {
  const leaderboardArr = [];
  for (const data of props.dataArr) {
    leaderboardArr.push(
        <LeaderboardItem
          alias = {data.alias}
          colour = {data.color}
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
