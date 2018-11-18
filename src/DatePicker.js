import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

class CustomDatePicker extends Component {
    render() {
        return (
            <div className="datePicker">
                <DatePicker 
                    selected={this.props.date}
                    onChange={this.props.setDate}
                    dateFormat="DD-MMM-YYYY"
                    placeholderText="Click to select a date" 
                />
            </div>
        )
    }
}

export default CustomDatePicker;