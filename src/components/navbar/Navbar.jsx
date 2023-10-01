import { useState } from "react"
import { Tooltip } from '@mui/material'
import "./navbar.scss"

const Navbar = () => {

  const [fullscreen, setFullscreen] = useState(false)


  const handleFullscreen = () => {
    setFullscreen(!fullscreen)
    if(fullscreen === true) {
      document.exitFullscreen();
      
    } else {
      document.body.requestFullscreen();
    }
  }


  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>A.admin</span>
      </div>
      <div className="icons">
        <Tooltip title='Search'>
          <img src="/search.svg" alt="" className="icon" />
        </Tooltip>
        <Tooltip title='Elements'>
          <img src="/app.svg" alt="" className="icon" />
        </Tooltip>
        <Tooltip title='Fullscreen'>
          <img src="/expand.svg" alt="" className="icon" onClick={handleFullscreen} />
        </Tooltip>
        <Tooltip title="Notification">
          <div className="notification">
            <img src="/notifications.svg" alt="" />
            <span>1</span>
          </div>
        </Tooltip>
        <Tooltip title='User'>
          <div className="user">
            <img
                src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
                
            />
            <span>Jane</span>
          </div>
        </Tooltip>
        <Tooltip title='Settings'>
          <img src="/settings.svg" alt="" className="icon" />
        </Tooltip>
      </div>
    </div>
  )
}

export default Navbar