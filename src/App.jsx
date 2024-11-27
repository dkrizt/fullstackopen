import { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => setGood((prev) => prev + 1);
  const handleClickNeutral = () => setNeutral((prev) => prev + 1);
  const handleClickBad = () => setBad((prev) => prev + 1);

  const sum = good + neutral + bad;
  const average = sum / 3;
  const positive = (good / sum) * 100;

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleClickGood} buttonText="good"/>
      <Button handleClick={handleClickNeutral} buttonText="neutral"/>
      <Button handleClick={handleClickBad} buttonText="Bad"/>

      <h1>Statistics</h1>

      {sum === 0 ? (
        <p>No feed back given</p>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          sum={sum}
          average={average}
          positive={positive}
        />
      )}
    </div>
  );
};

export default App;
