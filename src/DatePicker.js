import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';

const DateContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    top: 20%;
    position: absolute;
    width: 100%;
`;

class CustomDatePicker extends Component {
    render() {
        return (
            <DateContainer>
                <DatePicker 
                    selected={this.props.date}
                    onChange={this.props.setDate}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="DD-MMM-YYYY   HH:mm a"
                    placeholderText="Click to select a date" 
                />
            </DateContainer>
        )
    }
}

export default CustomDatePicker;