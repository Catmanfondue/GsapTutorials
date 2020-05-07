import React, { useEffect, useRef } from 'react';

import NaturePic from '../images/ken-cheung-nBsIjqKP9hI-unsplash.jpg';
import { createUseStyles } from 'react-jss';
import CssRulePlugin from 'gsap/CSSRulePlugin';
import { TimelineLite, Power2 } from 'gsap';
import { Link } from 'react-router-dom';

// Dont use JSS when trying to use CSS rule Plugin or targeting certain css

const useStyles = createUseStyles({
  pictureWrapper: {
    width: 447,
    height: '100vh',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    visibility: 'hidden',
  },

  picture: {
    width: 447,
    position: 'absolute',
  },
});

const PictureShow = () => {
  let picWrapper = useRef(null);
  let pictureContainer = useRef(null);
  let image = useRef(null);
  let imageReveal = CssRulePlugin.getRule('.pictureContainer:after');

  const tl = new TimelineLite();
  const classes = useStyles();

  useEffect(() => {
    tl.to(picWrapper, 0, { css: { visibility: 'visible' } })
      .to(imageReveal, 1.4, {
        width: '0%',
        ease: Power2.easeInOut,
      })
      .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.4 });
  }, []);

  return (
    <>
      <Link to='/'>Back</Link>
      <div ref={(el) => (picWrapper = el)} className={classes.pictureWrapper}>
        <div ref={(el) => (pictureContainer = el)} className='pictureContainer'>
          <img
            ref={(el) => (image = el)}
            className={classes.picture}
            src={NaturePic}
          />
        </div>
      </div>
    </>
  );
};

export default PictureShow;
