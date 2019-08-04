import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if(isSignedIn){
    return(
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
      <p onClick={() => onRouteChange('signout')} className='f3 link dim black shadow-2 grow ma2 br2 pa3 pointer'>Sign Out</p>
    </nav>
    )
  } else {
    return(
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
      <p onClick={() => onRouteChange('signin')} className='f3 link dim black shadow-2 grow ma2 br2 pa3 pointer'>Sign In</p>
      <p onClick={() => onRouteChange('register')} className='f3 link dim black shadow-2 grow ma2 br2 pa3 pointer'>Register</p>
    </nav>
    )
  }

}

export default Navigation