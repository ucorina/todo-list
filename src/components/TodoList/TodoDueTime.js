import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";
import differenceInMinutes from "date-fns/differenceInMinutes";

const DUE_STATUS = {
  OVERDUE: "OVERDUE",
  LESS_THAN_5_MIN: "LESS_THAN_5_MIN",
  NEXT_HOUR: "NEXT_HOUR",
  LATER: "LATER"
};

const getDueStatus = timeLeftInMinutes => {
  if (timeLeftInMinutes <= 0) {
    return DUE_STATUS.OVERDUE;
  }
  if (timeLeftInMinutes <= 5) {
    return DUE_STATUS.LESS_THAN_5_MIN;
  }
  if (timeLeftInMinutes <= 60) {
    return DUE_STATUS.NEXT_HOUR;
  }

  return DUE_STATUS.LATER;
};

class TodoDueTime extends Component {
  state = {
    dueStatus: getDueStatus(this.props.dueTime),
    timeLeft: differenceInMinutes(this.props.dueTime, new Date())
  };
  countDownHandler = null;

  constructor(props) {
    super(props);
    const timeLeft = differenceInMinutes(this.props.dueTime, new Date());
    this.state = {
      dueStatus: getDueStatus(timeLeft),
      timeLeft
    };
  }

  componentDidMount() {
    if (this.state.dueStatus === DUE_STATUS.OVERDUE) {
      return;
    }

    this.countDownHandler = setInterval(() => {
      const timeLeft = differenceInMinutes(this.props.dueTime, new Date());
      const status = getDueStatus(timeLeft);
      this.setState({ dueStatus: status, timeLeft });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.dueStatus !== prevState.dueStatus) {
      switch (this.state.dueStatus) {
        case DUE_STATUS.OVERDUE:
          // Stop countdown timer
          clearInterval(this.countDownHandler);
          // Play sound that dask is overdue
          const bellSound = new Audio("http://4umi.com/web/sound/beep1.wav");
          bellSound.play();
          break;
        default:
          break;
      }
    }
  }
  componentWillUnmount() {
    clearInterval(this.countDownHandler);
  }
  render() {
    const { completed } = this.props;
    const { dueStatus, timeLeft } = this.state;

    if (completed) {
      return null;
    }

    switch (dueStatus) {
      case DUE_STATUS.OVERDUE:
        return <Chip label="Overdue" style={{ backgroundColor: "#68f2df" }} />;

      case DUE_STATUS.LESS_THAN_5_MIN:
        return (
          <Chip
            label={`Due in ${timeLeft} minute(s)`}
            style={{ backgroundColor: "#b7ebfa" }}
          />
        );
      case DUE_STATUS.NEXT_HOUR:
        return (
          <Chip label="Due next hour!" style={{ backgroundColor: "#dcecf2" }} />
        );
      case DUE_STATUS.LATER:
      default:
        return null;
    }
  }
}

export default TodoDueTime;
