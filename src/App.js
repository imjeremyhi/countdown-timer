import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import CustomDatePicker from './DatePicker';
import SignIn from './SignIn';
import Timer from './CustomTimer';
import backgroundImg from './background-image.webp';

import "react-datepicker/dist/react-datepicker.css";
import './App.css';

const HeroWrapper = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(${backgroundImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    text-align: center;
    font-family: 'Roboto', sans-serif;
`;

class App extends Component {    
    constructor(props) {
        super(props);

        const url = new URL(window.location.href);
        const urlDate = url.searchParams.get("date");
        const storedDate = window.localStorage.getItem('date');

        const date = urlDate ? moment(urlDate) : (
            storedDate ? 
                moment(storedDate) :
                moment()
            );

        this.state = {
            date,
            firstLoad: true
        };

        this.setDate = this.setDate.bind(this);
    }

    setDate(date) {
        window.localStorage.setItem('date', date.toISOString());
        this.setState({
            ...this.state,
            date,
            firstLoad: false
        });
    }

    render() {
        const { date, firstLoad } = this.state;

        return (
            <HeroWrapper>
                <Content>
                    <CustomDatePicker date={date} setDate={this.setDate} />
                    <Timer date={date} firstLoad={firstLoad} />
                </Content>
                <SignIn date={date} setDate={this.setDate} />
            </HeroWrapper>
        );
    }
}

export default App;
