import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = () =>
  <h1>give feedback</h1>

const Button = ({onClick,text}) =>
  <button onClick={onClick}>{text}</button>

const HeaderStatistics = () =>
  <h1>statistics</h1>

const Statistics = (props) => {

  return(
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <All text='all' value={props.all} />
      <Average text='average' value={props.average} />
      <Positives text='positive' value={props.positive} />
    </div>
  )
}

const All = ({text,value}) =>
  <p>{text} {value}</p>

const Average = ({text,value}) =>
  <p>{text} {value}</p>


const Positives = ({text, value}) =>
  <p>{text} {value} % </p>

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage((good+1)/(all+1))
    setPositive((good+1) * 100.0 / (all+1))
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAverage((good-bad)/(all+1))
    setPositive(good * 100.0 / (all+1))
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all +1)
    setAverage((good-(bad+1))/(all+1))
    setPositive(good * 100.0 / (all+1))
  }

  return (
    <div>
      <Header />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <HeaderStatistics />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
