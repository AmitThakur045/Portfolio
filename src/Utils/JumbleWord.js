import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const JumbleWord = (props) => {
  const [word, setWord] = useState([]);

  useEffect(() => {
    let temp1 = [...props.word];
    setWord(temp1);
  }, [props.word]);

  return (
    <>
      {word.map((letter, idx) => (
        <>
          {letter === "-" ? (
            <h1 className="" key={idx}>
              &nbsp;
            </h1>
          ) : (
            <motion.h1
              whileHover={{
                color: props.color,
                scaleY: [1, 0.9, 0.8, 0.7, 1.3, 1],
                scaleX: [1, 1.1, 1.2, 1.3, 0.7, 1],
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 0.5,
              }}
              className=""
              key={idx}
            >
              {letter}
            </motion.h1>
          )}
        </>
      ))}
    </>
  );
};

export default JumbleWord;
