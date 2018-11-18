import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import moment from 'moment';

const Completionist = () => <span>You're all out of time :)</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{days}:{hours}:{minutes}:{seconds}</span>;
  }
};

class Timer extends Component {
    constructor(props) {
        super(props);

        const url = new URL(window.location.href);
        const urlDate = url.searchParams.get("date");
        const storedDate = window.localStorage.getItem('date');

        const date = urlDate ? moment(urlDate) : (
            storedDate ? 
                moment(storedDate) :
                moment().add(1, 'hour')
            );

        props.setDate(date);
    }

    formatDate = date => date.format('MMMM Do YYYY, h:mm:ss a');

    render() {
        const { date } = this.props;

        return (
            <React.Fragment>
                <div className="timer">
                    <Countdown
                        date={date.toDate()}
                        renderer={renderer}
                    />
                </div>
                <div className="subtext">
                    <span>Time until {this.formatDate(date)}</span>
                </div>
            </React.Fragment>
        );
    }
}

export default Timer;