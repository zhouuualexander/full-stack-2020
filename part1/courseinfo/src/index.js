import React from 'react'
import ReactDOM from 'react-dom'

const Content = (props)=>{
 
  return (
    <div>
      <Part part={props.parts[0]}/>
      <Part part={props.parts[1]}/>
      <Part part={props.parts[2]}/>
    </div>
  )
}

const Part = (props) =>{

  return(
   <div>
     <p>{props.part.name}:{props.part.exercises} exercises </p>
   </div>
  )
}

const Total = (props)=>{
  const total = props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises
  return(
    <div>
      <p>Total number of exercises: {total}</p>
    </div>
  )
}

const Header = (props) => {
  console.log(props.course)
  return <h1>{props.course.name}</h1>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
    <Header course={course} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))