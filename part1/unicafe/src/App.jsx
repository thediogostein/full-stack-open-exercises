import { useState } from 'react';
import { Statistics } from './components/Statistics';
import { Button } from './components/Button';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood((prevGood) => prevGood + 1);
  };

  const handleClickNeutral = () => {
    setNeutral((prevNeutral) => prevNeutral + 1);
  };

  const handleClickBad = () => {
    setBad((prevBad) => prevBad + 1);
  };

  return (
    <>
      <h2>give feedback</h2>

      <Button text="good" handleClick={handleClickGood} />
      <Button text="neutral" handleClick={handleClickNeutral} />
      <Button text="bad" handleClick={handleClickBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
