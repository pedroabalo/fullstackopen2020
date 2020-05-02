import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = () =>
  <h1>give feedback</h1>

const Button = ({onClick,text}) =>
  <button onClick={onClick}>{text}</button>

const HeaderStatistics = () =>
  <h1>statistics</h1>

const Statistics = ({text,value}) =>
  <p>{text} {value}</p>

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <HeaderStatistics />
      <Statistics text='good' value={good}/>
      <Statistics text='neutral' value={neutral}/>
      <Statistics text='bad' value={bad}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
