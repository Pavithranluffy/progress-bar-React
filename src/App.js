import { useEffect, useState } from "react";
import "./styles.css";

const ProgressBar = ({ progress }) => {
  const [animationProgressbar, setAnimationPrgress] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setAnimationPrgress(progress);
    }, 100);
  }, [progress]);
  return (
    <div className="outer-container">
      <div
        className="inner-container"
        style={{
          // width: `${progress}%`
          transform: `translateX(${animationProgressbar - 100}%)`,
        }}
      >
        <span className="text-container"> {animationProgressbar}</span>
      </div>
    </div>
  );
};
const ProgressBarWidth = ({ progress }) => {
  const [animationProgressbar, setAnimationPrgress] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setAnimationPrgress(progress);
    }, 100);
  }, [progress]);
  return (
    <div className="outer-container">
      <div
        className="inner-container"
        style={{
          width: `${animationProgressbar}%`,
          //transform: `translateX(${animationProgressbar - 100}%)`,
        }}
      >
        <span className="text-container"> {animationProgressbar}</span>
      </div>
    </div>
  );
};

export default function App() {
  const BarsList = [0, 3, 5, 10, 20, 30, 60, 85, 100];
  return (
    <div className="App">
      <div>
        <h1>Progress Bar Using TranslateX</h1>
        {BarsList.map((items) => (
          <ProgressBar key={items} progress={items} />
        ))}
      </div>
      <div>
        <h1>Progress Bar Using Width</h1>
        {BarsList.map((items) => (
          <ProgressBarWidth key={items} progress={items} />
        ))}
      </div>
    </div>
  );
}
