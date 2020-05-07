import React, { useState, useEffect, useRef } from 'react';
import { TweenMax, Power3 } from 'gsap';
import { Link } from 'react-router-dom';

const Dots = () => {
  let yellowCircle = useRef(null);
  let redCircle = useRef(null);
  let blueCircle = useRef(null);

  const [expandedEl, setExpandedEl] = useState(null);

  useEffect(() => {
    applyAnimation(yellowCircle, 0);
    applyAnimation(redCircle, 0.2);
    applyAnimation(blueCircle, 0.4);
  }, []);

  const handleExpand = (el) => {
    TweenMax.to(el, 0.8, { width: 200, height: 200, ease: Power3.easeOut });
  };

  const handleShrink = (el) => {
    TweenMax.to(el, 0.8, { width: 75, height: 75, ease: Power3.easeOut });
  };

  const handleClick = (el) => {
    if (el === expandedEl) {
      handleShrink(el);
      setExpandedEl(null);
    } else {
      handleExpand(el);
      if (expandedEl !== null) {
        handleShrink(expandedEl);
      }
      setExpandedEl(el);
    }
  };

  const applyAnimation = (el, delay) => {
    TweenMax.from(el, 0.8, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      delay,
    });
  };
  return (
    <>
      <Link to='/'>Back</Link>
      <div className='circleContainer'>
        <div
          onClick={(e) => handleClick(e.target)}
          ref={(el) => (yellowCircle = el)}
          className='circle'
        ></div>
        <div
          onClick={(e) => handleClick(e.target)}
          ref={(el) => (redCircle = el)}
          className='circle red'
        ></div>
        <div
          onClick={(e) => handleClick(e.target)}
          ref={(el) => (blueCircle = el)}
          className='circle blue'
        ></div>
      </div>
    </>
  );
};

export default Dots;
