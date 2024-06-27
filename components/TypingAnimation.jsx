import React from 'react';
import { ReactTyped } from "react-typed";

const TypingAnimation = () => {
  return (
    <ReactTyped
      strings={[
        'a Web Developer',
        'a Frontend Developer',
        'a Backend Developer',
        'a Full Stack Developer',
      ]}
      typeSpeed={50}
      backSpeed={30}
      loop
      style={{ color: '#ce1212', fontSize: '1.2em', fontWeight: 'bold' }}
    />
  );
};

export default TypingAnimation;
