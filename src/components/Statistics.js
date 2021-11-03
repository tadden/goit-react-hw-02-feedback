import React, { Component } from 'react';
import Options from './Options';
// import Notification from './Notification';

class Statistics extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    // onGoodBtn() => {
    
    // }

    render() {
        return (
            <div>
                <Options
                    onGoodBtn={this.onGoodBtn}
                    onNeutralBtn={this.onNeutralBtn}
                    onBadBtn={this.onBadBtn}
                />
                <>
                    <h2>Statistic</h2>
                </>
                <p>
                    <span>Good</span>
                    <span>{this.state.good}</span>
                </p>
                <p>
                    <span>Neutral</span>
                    <span>{this.state.neutral}</span>
                </p>
                <p>
                    <span>Bad</span>
                    <span>{this.state.bad}</span>
                </p>
            </div>
        );
    }
}



export default Statistics;