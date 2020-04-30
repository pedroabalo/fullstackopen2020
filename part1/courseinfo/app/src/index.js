import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {

  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Part = (props) => {

  return(
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {

  return(
    <div>
      <Part part={props.part1} exercises={props.exercises1}/>
      <Part part={props.part2} exercises={props.exercises2}/>
      <Part part={props.part3} exercises={props.exercises3}/>
    </div>
  )
}

const Total = (props) => {

  return(
    <p>
      Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  )
}

const App = () => {

  const course = 'Half Stack application development'

  const props = {
    part1: 'Fundamentals of React',
    exercises1: 10,
    part2: 'Using props to pass data',
    exercises2: 7,
    part3: 'State of a component',
    exercises3: 14
  }

  return (
    <div>
      <Header name={course} />
      <Content {...props} />
      <Total {...props}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
