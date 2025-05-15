import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: ['Software Developer', 'Full Stack Developer', 'Data Engineer', 'UI/UX Enthusiast'],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 80,
        wrapperClassName: 'typewriter-wrapper',
        cursorClassName: 'typewriter-cursor',
      }}
    />
  );
}

export default Type;
