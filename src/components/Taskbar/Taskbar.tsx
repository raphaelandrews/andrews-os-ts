import React from 'react'
import './style.css'

const Taskbar = () => {
  return (
    <div className="taskbar" id="taskbar">
        <div id="minimizeZone"></div>

        <div className="calendar">
            <div className="clock"></div>
            <div className="date"></div>
        </div>
    </div>
  )
}

export default Taskbar