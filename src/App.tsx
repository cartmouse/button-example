import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/button/Button";

const App = () => {
  const [progressToClick, setProgressToClick] = useState(0);
  const [intervalRef, setIntervalRef] = useState<NodeJS.Timer | undefined>();

  const onClick = () => {
    setProgressToClick(0);
    const interval = setInterval(() => {
      setProgressToClick((p) => p + 0.01);
    }, 10);
    setIntervalRef(interval);
  };

  useEffect(() => {
    if (progressToClick >= 1) {
      clearInterval(intervalRef);
    }
  }, [progressToClick]);

  return (
    <div className="App">
      <div className="button-container">
        <Button progressToClick={progressToClick} onClick={onClick} />
      </div>
    </div>
  );
};

export default App;
