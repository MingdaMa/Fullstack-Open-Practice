import { useState } from 'react';

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </> 
  )
}

const Statistics = ({ good, bad, neutral }) => {
  if (good + bad + neutral === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
              <StatisticLine text='good' value={good}/>
            </tr>
            <tr>
              <StatisticLine text='neutral' value={neutral}/>
            </tr>
            <tr>
              <StatisticLine text='bad' value={bad}/>
            </tr>
            <tr>
              <StatisticLine text='all' value={good + bad + neutral}/>
            </tr>
            <tr>
              <StatisticLine text='average' value={good + bad + neutral === 0 ? 0 : (good - bad) / (good + bad + neutral)}/>
            </tr>
            <tr>
              <StatisticLine text='positive' value={good + bad + neutral === 0 ? 0 : good / (good + bad + neutral)}/>
            </tr>
        </tbody>
      </table>       
    </div>
  )
}

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  }
  
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }

  const handleBad = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' handleClick={handleGood}/>
      <Button text='neutral' handleClick={handleNeutral}/>
      <Button text='bad' handleClick={handleBad}/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>    
  );
}

export default App;
