import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const TimerText = styled.div`
    color: white;
    font-size: 4vh;
`;

export default ({ date, firstLoad }) => {
    const calculateTimeLeft = (date) => {
        const difference = +date - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(date));

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft(date));
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={interval}>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    const text = firstLoad ? 'Please enter a date/time you want to count down to' : "You're all out of time :)"

    return (
        <TimerText>
            {timerComponents.length ? timerComponents : <span>{text}</span>}
        </TimerText>
    );
}
