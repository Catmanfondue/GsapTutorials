import React, { useEffect, useRef } from 'react';
import Dots from './tutorials/Dots';
import PictureShow from './tutorials/PictureShow';
import { TweenMax } from 'gsap';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function App() {
  let app = useRef(null);
  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: 'visible' } });
  }, []);

  return (
    <Router>
      <div ref={(el) => (app = el)} className='App'>
        <header className='App-header'>
          <Route exact path='/dots'>
            <Dots />
          </Route>
          <Route exact path='/picture'>
            <PictureShow />
          </Route>
          <Route exact path='/'>
            <span>
              Just some fun gsap tutorials Ive been doing from{' '}
              <a href='https://www.youtube.com/channel/UCqrxiLP9RHz2GxDJaZuTRBw'>
                Wrong Akram's
              </a>{' '}
              youtube channel. Thanks
            </span>
            <ul>
              <li>
                <Link to='/dots'>Growing Dots</Link>
              </li>
              <li>
                <Link to='/picture'>Animated Picture</Link>
              </li>
            </ul>
          </Route>
        </header>
      </div>
    </Router>
  );
}

export default App;
