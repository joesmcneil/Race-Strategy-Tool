const LeaderboardItem = (props) => {
  return (
        <div class="child"> {/** child of outer flexbox in leaderboard component */}
        <div class="parent"> {/** el row */}
          <div class="child"> {/** el data */}
            Position: {props.position}
          </div>
          <div class="child">
            Alias: {props.alias}
          </div>
          <div class="child">
            Time delta: {props.timeDelta}
          </div>
        </div>
      </div>
  );
};

export default LeaderboardItem;
