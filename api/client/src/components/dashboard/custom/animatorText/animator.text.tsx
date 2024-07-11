// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";

const TextAnimation = ({ text, delay }) => {
  const items = text.split("").map((letter, index) => ({
    letter,
    delay: index * delay,
  }));

  return (
    <div>
      {items.map((item, index) => (
        <AnimatedLetter key={index} {...item} />
      ))}
    </div>
  );
};

const AnimatedLetter = ({ letter, delay }) => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reset: true,
    delay,
    config: config.molasses,
  });

  return <animated.span style={props}>{letter}</animated.span>;
};

export default TextAnimation;
