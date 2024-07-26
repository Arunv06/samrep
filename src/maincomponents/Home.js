import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='task-container'>
            <h3>Task List</h3>
            <div className="task-links">
                <Link to='/simple' className='task-link'>Task 1</Link>
                <Link to='/state' className='task-link'>Task 2</Link>
                <Link to='/conditionalrendcomponent' className='task-link'>Task 3</Link>
                <Link to='/formscontrolledcomponents' className='task-link'>Task 4</Link>
                <Link to='/fetchapp' className='task-link'>Task 5</Link>
                <Link to='/useeffectdatafetchingcomponent' className='task-link'>Task 6</Link>
                <Link to='/parentcomponent' className='task-link'>Task 8</Link>
                <Link to='/contextapiapp' className='task-link'>Task 9</Link>
                <Link to='/lazyapp' className='task-link'>Task 10</Link>
                <Link to='/taskapp' className='task-link'>Task 12</Link>
            </div>
        </div>
  )
}

export default Home