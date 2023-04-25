const LeaderboardItem = (props) => {
  return (
        <div class="child">
        <div class="parent">
          <div class="child">
            Name: {props.name}
          </div>
          <div class="child">
            Current Speed: {props.speed}
          </div>
          <div class="child">
            Distance Travelled: {props.distance}
          </div>
        </div>
      </div>
  );
};

export default LeaderboardItem;
