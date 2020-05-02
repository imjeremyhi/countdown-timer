import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';

const DateWrapper = styled.div`
    padding: 25px;
`;

class CustomDatePicker extends Component {
    render() {
        return (
            <DateWrapper>
                <DatePicker 
                    selected={this.props.date}
                    onChange={this.props.setDate}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="DD-MMM-YYYY   HH:mm a"
                    placeholderText="Click to select a date" 
                />
            </DateWrapper>
        )
    }
}

export default CustomDatePicker;