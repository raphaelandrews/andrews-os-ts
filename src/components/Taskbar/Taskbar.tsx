import React from 'react'
import './style.css'
import Clock from '../Clock/Clock'

const Taskbar = () => {
  return (
    <div className="taskbar" id="taskbar">
        <Clock />
    </div>
  )
}

export default Taskbar