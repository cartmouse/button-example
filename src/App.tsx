import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/button/Button";
import darken from "./darken";

const defaultAppStyle = {
  backgroundColor: "#264653",
};

export default function App() {
  // ================================= States =================================
  const [progressToClick, setProgressToClick] = useState(0);
  const [appStyle, setAppStyle] = useState(defaultAppStyle);
  const [intervalRef, setIntervalRef] = useState<NodeJS.Timer | undefined>();

  // ============================= Event Handlers =============================

  const simulateTouchFree = () => {
    // Simulates the user moving their hand towards the screen

    if (![0, 1].includes(progressToClick)) {
      return;
    }
    setProgressToClick(0);
    const interval = setInterval(() => {
      setProgressToClick((p) => p + 0.02);
    }, 10);
    setIntervalRef(interval);
  };

  const onClick = (colour: string) => {
    setAppStyle((s) => ({ ...s, backgroundColor: darken(colour, 80) }));
  };

  // ================================ Effects ================================
  useEffect(() => {
    if (progressToClick >= 1) {
      setProgressToClick(1);
      clearInterval(intervalRef);
    }
  }, [progressToClick, intervalRef]);

  return (
    <div className="App" style={appStyle}>
      <div className="button-container">
        <Button
          progressToClick={progressToClick}
          colour="#2a9d8f"
          clickCallback={onClick}
          simulateTouchFree={simulateTouchFree}
        />
        <Button
          progressToClick={progressToClick}
          colour="#e9c46a"
          clickCallback={onClick}
          simulateTouchFree={simulateTouchFree}
        />
        <Button
          progressToClick={progressToClick}
          colour="#f4a261"
          clickCallback={onClick}
          simulateTouchFree={simulateTouchFree}
        />
        <Button
          progressToClick={progressToClick}
          colour="#e76f51"
          clickCallback={onClick}
          simulateTouchFree={simulateTouchFree}
        />
      </div>
    </div>
  );
}
