import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import DatePicker from 'react-datepicker';
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";
import './App.css';

const formatDate = date => date.format('MMMM Do YYYY, h:mm:ss a');

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
  constructor(props) {
    super(props);

    const url = new URL(window.location.href);
    const urlDate = url.searchParams.get("date");
    const date = urlDate ? moment(urlDate) : moment();
    const dateFormatted = formatDate(date);

    this.state = {
      date,
      dateFormatted,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      date,
      dateFormatted: formatDate(date),
    });
  }

  render() {
    const { date, dateFormatted } = this.state;
    
    return (
      <div className="main">
        <div className="datePicker">
          <DatePicker 
            selected={date}
            onChange={this.handleChange}
            dateFormat="DD-MMM-YYYY"
            placeholderText="Click to select a date" 
          />
        </div>
        <div className="timer">
          <Countdown
            date={date.toDate()}
            renderer={renderer}
          />
        </div>
        <div className="subtext">
          <span>Time until {dateFormatted}</span>
        </div>
      </div>
    );
  }
}

export default App;
