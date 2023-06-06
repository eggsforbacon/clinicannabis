import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState, useCallback, Component } from "react";
import useCountDown from 'react-countdown-hook';
import { strings } from "../model/strings";
import Cound from "../components/CoundTimer";


export const Timer = ({ }) => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    const startTimer = () => {
        const countdownDate = new Date('Jun 17, 2023 00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const daysText = days <= 9 ? `0${days}` : "" + days;
            const hoursText = hours <= 9 ? `0${hours}` : "" + hours;
            const minutesText = minutes <= 9 ? `0${minutes}` : "" + minutes;
            const secondsText = seconds <= 9 ? `0${seconds}` : "" + seconds;

            if (distance < 0) {
                clearInterval(interval);
            } else {
                setTimerDays(daysText);
                setTimerHours(hoursText);
                setTimerMinutes(minutesText);
                setTimerSeconds(secondsText);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        /* return () => {
            clearInterval(interval);
        }; */
    });

    return (
        <>
            <section className={"flex cont-timer"}>
                <div className="timer-container">
                    
                    <div className={'count-timer'}>
                        <div className="sep-cont-1 mb-timer">
                            <h2 className={"text-3xl"}><b>{strings.seminario.cardInfo["1"].title1}</b></h2>
                            <p className={"text-3xl"}><span>200</span></p>
                        </div>
                        
                        <div className="sep-cont-1 timerCount text-3xl">
                            <p className={"text-xl"}><b>{strings.seminario.cardInfo["2"].info}</b></p>
                            <Cound maxRange={63} />
                        </div>
                    </div>

                    <div className={'hr-clor'} />

                    <div className={'flex'}>
                        <div className="clock"></div>

                        <div className="timer">
                            <div className="txt-timer">
                                <div className="cont-inf__timer">
                                    <p>{timerDays}</p>
                                    <span>:</span>
                                </div>
                                <p><span>D&iacute;as</span></p>
                            </div>

                            <div className="txt-timer">
                                <div className="cont-inf__timer">
                                    <p>{timerHours}</p>
                                    <span>:</span>
                                </div>
                                <p><span>Horas</span></p>
                            </div>

                            <div className="txt-timer">
                                <div className="cont-inf__timer">
                                    <p>{timerMinutes}</p>
                                    <span>:</span>
                                </div>
                                <p><span>Minutos</span></p>
                            </div>

                            <div className="txt-timer">
                                <div className="cont-inf__timer">
                                    <p>{timerSeconds}</p>
                                </div>
                                <p><span>Segundos</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'mg-Crd'}>
                    <div className="card-Crd">
                        <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSdmxYGuJwxoT-TMJtB6155LG80Dil0bMh53P0JsXBu_AiZVzg/viewform"} className={`text-button`} target="_blank">
                            <p className={"text-lg text-P-seminario card__title"}><b>{strings.seminario.cardInfo["1"].title2}</b></p>
                        </Link>

                        <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSdmxYGuJwxoT-TMJtB6155LG80Dil0bMh53P0JsXBu_AiZVzg/viewform"} className={`text-button`} target="_blank">
                            <div className="card__arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                    <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Timer;