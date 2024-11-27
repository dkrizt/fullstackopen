import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleNextAnecdote = () => {
    setSelected(() => {
      const randomIndex = Math.floor(Math.random() * anecdotes.length);
      return randomIndex;
    });
  };

  const handleAddVote = () => {
    setVotes((prevVotes) => {
      const updatedVotes = [...prevVotes]; // Create a new array
      updatedVotes[selected] += 1; // Increment the vote for the selected anecdote
      return updatedVotes; // Return the updated array
    });
  };

  const getAnecdoteWithHighestVotes = () => {
    const maxVotes = Math.max(...votes); // Find the highest vote count
    const index = votes.indexOf(maxVotes); // Get the index of the highest vote
    return anecdotes[index]; // Return the corresponding anecdote
  };

  return (
    <div>
    <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]} <br /> has {votes[selected]} votes
      </div>
      <button onClick={handleAddVote}>vote</button>
      <button onClick={handleNextAnecdote}>Next anecdote</button>

      <h1>Anectdote with most votes</h1>
      <p>{getAnecdoteWithHighestVotes()}</p>
      <p>with {Math.max(...votes)} votes</p>

    </div>
  );
};

export default App;
