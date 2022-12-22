
import React, { Component } from "react";
//import PropTypes from 'prop-types';
import clsx from "clsx";
import css from './Section.module.css';


export class Section extends Component {

    static defaultProps = {
        initialValue: 0,
    };

    

    state = {
        good: this.props.initialValue,
        neutral: this.props.initialValue,
        bad: this.props.initialValue
    };

    handleGood = () => {
        this.setState(prevState => ({ good: prevState.good + 1, }))
    };

    handleNeutral = () => {
        this.setState(prevState => ({ neutral: prevState.neutral + 1, }))
    };

    handleBad = () => {
        this.setState(prevState => ({ bad: prevState.bad + 1, }))   
    };

    render() {
        const { good, neutral, bad } = this.state;

        const total = good + neutral + bad;
        const positive = Math.ceil(good * 100 / total);

        return  <div className={clsx(css.mainWrapper)}>
                  <h1>Please leave feedback</h1>
                    <div className={clsx(css.buttonThumb)}>
                         <button type="button" onClick={this.handleGood}>Good</button>
                         <button type="button" onClick={this.handleNeutral}>Neutral</button>
                         <button type="button" onClick={this.handleBad}>Bad</button>
                    </div>   
                  <h2>Statistics</h2>
                   
            {total ? <div>
                         <p>Good:{good}</p>
                         <p>Neutral:{neutral}</p>
                         <p>Bad:{bad}</p>
                         <p>Total:{total}</p>
                         <p>Positive Feedback:{positive}%</p>
                    </div> : "There is no feedback" }
                    
               
                </div >

    }
}