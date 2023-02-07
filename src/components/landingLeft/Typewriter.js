// import { Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import BlinkingCursor from "./BlinkingCursor";
// import bnwStripes from "../assets/black-white-diagonal-thin-stripes-background-illustration-md.png"

function Typewriter() {
  const [phrases, setPhrases] = useState([
    "Frontend   Developer ",
    "Friend ",
    "Node   Js   Developer ",
    "Brother ",
    "FullStack   Developer ",
    "Founder ",
    "TypeScript   Developer",
    "Serious   Music   Lover ",
    "Problem   Solver ",
  ]);
  let [i, setI] = useState(0);
  //   let [ j, setJ] = useState(0)
  let [currentPhrase, setCurrentPhrase] = useState("");
  //   let [isDeleting, setIsDeleting] = useState(false);
  //   let [isEnd, setIsEnd] = useState(false);

  function loopEnclosure() {
    // let i = 0;
    let j = 0;
    let tracker = 0;

    function loop() {
      let isDeleting = false;

      if (!isDeleting) {
        for (j; j < phrases[i].length; j++) {
          ((phrase, iteration) => {
            setTimeout(() => {
              setCurrentPhrase((prev) =>
                prev.concat(phrase[iteration].toUpperCase())
              );
            }, 150 * iteration);
          })(phrases[i], j);

          if (j == phrases[i].length - 1) {
            isDeleting = !isDeleting;
            setTimeout(() => loop(), (j + 1) * 150);
          }
          tracker++;
        }
      }
      if (isDeleting) {
        let pLength = phrases[i].length;
        for (let k = pLength; k > 0; k--) {
          ((phrase, iteration) => {
            setTimeout(() => {
              setCurrentPhrase((prev) => {
                let arr = prev.split("");
                arr.pop();
                return arr.join("");
              });
            }, 150 * iteration + (phrase.length - 1) * 150);
          })(phrases[i], k);
          //   console.log(tracker)
          tracker++;
          if (k === 1 && i < phrases.length - 1) {
            // console.log("changing I");
            setTimeout(() => {
              setI((prev) => prev + 1);
            }, 1.5 * tracker * 150);
          }
          if (k === 1 && i === phrases.length - 1) {
            setTimeout(() => {
              setI((prev) => 0);
            }, 1.5 * tracker * 150);
          }
        }
      }
    }
    loop();
  }

  useEffect(() => {
    loopEnclosure();
  }, [i]);

  return (
    <>
      {/* <Stack className="greeting"><p>Hi, you just found yourself a...</p></Stack> */}
      {/* <Stack className="bnwBkg">
    </Stack> */}
      {/* <Stack className="intro"><p>But you can call me </p></Stack> */}
      <div id="typewriterText">
        <p>
          {currentPhrase} <BlinkingCursor />
        </p>
      </div>
    </>
  );
}

export default Typewriter;
