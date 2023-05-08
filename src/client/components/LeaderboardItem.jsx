const LeaderboardItem = (props) => {
  return (
      <div className="child">
        <div className="parent">
          <div className="child">
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
