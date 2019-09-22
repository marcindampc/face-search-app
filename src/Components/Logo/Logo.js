import React from './node_modules/react';
import Tilt from './node_modules/react-tilt';
import face from './user.png';
import './Logo.css'

const Logo = () => {
return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 60 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '1px'}} alt='logo' src={face}/>
        </div>
      </Tilt>
    </div>
)
}

export default Logo