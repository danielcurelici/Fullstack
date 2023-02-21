import React from 'react';
import { useState } from 'react'


const StatisticLine = ({value, text}) => <tr><td>{text}</td><td>{value}</td></tr>
    
const Statistics = (props) => {
    
    if(props.good === 0 && props.neutral ===0  && props.bad === 0)
        return ('no feedback given');
    return (
    
        <main>
            <StatisticLine text='good ' value={props.good}/>
            <StatisticLine text='good ' value={props.good}/>
            <StatisticLine text='neutral ' value={props.neutral}/>
            <StatisticLine text='bad ' value={props.bad}/>
            <StatisticLine text='all ' value={props.all}/>
            <StatisticLine text='average ' value={props.average}/>
            <StatisticLine text='positive ' value={props.positive}/>
        </main>
        
    
    );
}
const App = (props) => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    const setToGood = () => setGood(good+1);
    const setToNeutral = () => setNeutral(neutral+1);
    const setToBad = () => setBad(bad+1);
    const all = good + neutral + bad;
    const average = (good-bad)/all || 0;
    const positive = good*100/all || 0;
    
    return (
    <div>
        <h1>give feedback</h1>
        <button onClick={setToGood}>good</button>
        <button onClick={setToNeutral}>neutral</button>
        <button onClick={setToBad}>bad</button>
        <h1>statistics</h1>
        <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
        />
    </div>   
    );
}
    
export default App