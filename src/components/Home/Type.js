import React from "react";
import Typewriter from "typewriter-effect";

function Type(props) {
  return (
    <Typewriter
      options={{
        strings: props.type,
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
}

export default Type;
