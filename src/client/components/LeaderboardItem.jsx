const LeaderboardItem = (props) => {
  return (
      <div className="child"> {/** child of outer flexbox in leaderboard component */}
        <div className="parent"> {/** el row */}
          <div className="child"> {/** el data */}
            {props.position}
          </div>
          <div className="child">
            {props.alias}
          </div>
          <div className="child">
            {props.timeDelta}
          </div>
        </div>
      </div>
  );
};

export default LeaderboardItem;
