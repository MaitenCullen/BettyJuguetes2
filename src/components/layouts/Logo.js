

import BettyLogo from '../../imgSRC/LogoBetty1.jpg';
import './NavBar.css';


function LogoBetty() {
  return (
    <div className="App">
      
       <div>
        <img className='Betty' src={BettyLogo} alt="Logo"/>
       </div>
     
    </div>
  );
}

export default LogoBetty;