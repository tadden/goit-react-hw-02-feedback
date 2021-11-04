import React, { Component } from 'react';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';
import s from './Statistic.module.css'


class Statistics extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    onGoodBtn = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            };
        });
    };
    onNeutralBtn = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            };
        });
    };
    onBadBtn = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            };
        });
    };

    countTotal = () => {
        const totalFeedbacks = this.state.good + this.state.neutral + this.state.bad;
        return totalFeedbacks;
    };

    countPositiveFeedback = () => {
        const persantage = (this.state.good / this.countTotal()) * 100;
        return persantage.toFixed();
    };

    render() {
        return (
            <div className={s.container}>
                <Options
                    onGoodBtn={this.onGoodBtn}
                    onNeutralBtn={this.onNeutralBtn}
                    onBadBtn={this.onBadBtn}
                />
                <>
                    <h2 className={s.title}>Statistic</h2>
                </>

                {this.countTotal() === 0 ? <Notification/> : (
                    <>
                <p className={s.text}>
                    <span className={s.score}>Good:</span>
                    <span>{this.state.good}</span>
                </p>
                <p className={s.text}>
                    <span className={s.score}>Neutral:</span>
                    <span>{this.state.neutral}</span>
                </p>
                <p className={s.text}>
                    <span className={s.score}>Bad:</span>
                    <span>{this.state.bad}</span>
                </p>
                <p className={s.text}>
                    <span className={s.score}>Total:</span>
                    <span>{this.countTotal()}</span>
                </p>
                <p className={s.text}>
                    <span className={s.score}>Positive feedback: </span>
                    <span>{this.countPositiveFeedback()}%</span>
                </p>
            
                    </>
                    
            )}
             </div>   
        );
    };
};



export default Statistics;