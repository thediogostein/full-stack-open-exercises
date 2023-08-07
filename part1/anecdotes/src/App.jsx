import { useState } from 'react';
import { Button } from './components/Button';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [index, setIndex] = useState(0);
  const [votesArr, setVotesArr] = useState(new Array(anecdotes.length).fill(0));

  const max = Math.max(...votesArr);
  const indexOfMax = votesArr.indexOf(max);

  const getRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setIndex(randomIndex);
  };

  const vote = () => {
    const copyOfVotesArr = [...votesArr];
    copyOfVotesArr[index] += 1;

    setVotesArr(copyOfVotesArr);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[index]}</p>
      <p>has {votesArr[index]} votes</p>
      <Button handleClick={vote} btnText="vote" />
      <Button handleClick={getRandomAnecdote} btnText="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[indexOfMax]}</p>
      <p>has {max} votes</p>
    </div>
  );
};

export default App;
