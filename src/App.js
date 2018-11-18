import React, { Component } from 'react';
import moment from 'moment';
import CustomDatePicker from './DatePicker';
import SignIn from './SignIn';
import Timer from './Timer';

import "react-datepicker/dist/react-datepicker.css";
import './App.css';

class App extends Component {    
  constructor(props) {
    super(props);

    this.state = {
        date: moment().add(1, 'hour')
    };

    this.setDate = this.setDate.bind(this);
  }

  setDate(date) {
    this.setState({
        ...this.state,
        date,
    });
  }

  render() {
    const { date } = this.state;

    return (
        <div className="main">
            <CustomDatePicker date={date} setDate={this.setDate} />
            <SignIn date={date} setDate={this.setDate} />
            <Timer date={date} setDate={this.setDate} />
        </div>
    );
  }
}

export default App;
