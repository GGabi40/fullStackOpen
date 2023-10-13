import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

//          desestructura las pp de un objeto
//          accedes de manera más sencilla, accedes como si fuesen variables
//          Así no hay que escribir props.name o props.exercise
const Part = ({ name, exercises }) => {
  return(
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = () => {
  return(
    <div>
      <Part name="Fundamentals of React" exercises={10} />
      <Part name="Using props to pass data" exercises={7}/>
      <Part name="State of a component" exercises={14}/>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  return (
    <div>
      <Header course={course} />
      <Content />
      <p>Number of exercises {10 + 7 + 14}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))