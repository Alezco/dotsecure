import React, { useEffect, useState } from "react";
import { securedStates } from "../states";
import { useInterval } from "../hooks/useInterval";
import ProgressBar from "./ProgressBar";

const PROGRESS_INTERVAL = 1500;

const secureElements = [
  "Securing your app...",
  "Disrupting the blockchain...",
  "Calling russian hackers...",
  "Reconstructing deep learning networks...",
  "Rehydrating database..."
]

const containerStyles = {
  display: "flex",
  alignItems: "center"
}

const Securing = ({ setSecuredState }) => {
  const [displayedText, setDisplayedText] = useState(secureElements[0]);
  const [iterations, setIterations] = useState(0);

  const timer = useInterval(() => {
    setDisplayedText(secureElements[iterations]);
    setIterations(iterations + 1);
  }, PROGRESS_INTERVAL)

  useEffect(() => {
    return () => {
      if (iterations >= secureElements.length - 1) {
        clearInterval(timer)
        setTimeout(() => {
          setSecuredState(securedStates.SECURED)
        }, PROGRESS_INTERVAL);
      }
    }
  }, [iterations, setSecuredState, timer]);

  return (
    <div style={{width: "100%"}}>
      <div style={containerStyles}>
        <ProgressBar completed={iterations / secureElements.length * 100} />
      </div>
      <div>{displayedText}</div>
    </div>
  );
}

export default Securing;
