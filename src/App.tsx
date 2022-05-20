import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/button/Button";
import darken from "./darken";

const defaultAppStyle = {
  backgroundColor: "#264653",
};

const App = () => {
  const [progressToClick, setProgressToClick] = useState(0);
  const [intervalRef, setIntervalRef] = useState<NodeJS.Timer | undefined>();
  const [appStyle, setAppStyle] = useState(defaultAppStyle);

  const simulateTouchFree = () => {
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
};

export default App;
