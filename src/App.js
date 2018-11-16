import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import './App.css';

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

class App extends Component {
  render() {
    const url = new URL(window.location.href);
    const urlDate = url.searchParams.get("date");
    const date = new Date(urlDate);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateWithLocale = date.toLocaleDateString('en-AU', options);

    return (
      <div className="main">
        <div className="heroText">
          <div className="timer">
            <Countdown
              date={date}
              renderer={renderer}
            />
          </div>
          <div className="subtext">
            <span>Time until {dateWithLocale}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
