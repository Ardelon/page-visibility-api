function StepCounter({ stepCount, setStepCount, maxStep }) {
  const increment = () => {
    setStepCount(Math.min(stepCount + 1, maxStep));
  };
  const decrement = () => {
    setStepCount(Math.max(stepCount - 1, 0));
  };

  return (
    <div className="step-counter">
      <button className="step-counter-button" onClick={decrement}>
        -
      </button>
      <div className="step-counter-display">{stepCount}</div>
      <button className="step-counter-button" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default StepCounter;
