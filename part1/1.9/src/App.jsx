import { useState } from 'react'

const Statistics = (props) => {

  const valorations = props.valorations;

  if ( valorations.good + valorations.neutral + valorations.bad != 0 ) {
    return (
    <>
      <h2>Statistics</h2>
      <p>Good: {valorations.good}</p>
      <p>Neutral: {valorations.neutral}</p>
      <p>Bad: {valorations.bad}</p>
      <br></br>
      <p>Total: {valorations.good + valorations.neutral + valorations.bad}</p>
      <p>Average: {(valorations.good - valorations.bad) / (valorations.good + valorations.neutral + valorations.bad)}</p>
      <p>Positive: {valorations.good / (valorations.good + valorations.neutral + valorations.bad) * 100} %</p>
    </>
    )
  } else { return ( <> <p>No Feedback Given</p> </>); }

}



const App = () => {
 const [valorations, setValorations] = useState({ good: 0, neutral: 0, bad: 0 });
  
  return (
    <>
      <h2>Give feedback</h2>
      <button onClick={() => setValorations({ ...valorations, good: valorations.good + 1 })}>Good</button>
      <button onClick={() => setValorations({ ...valorations, neutral: valorations.neutral + 1 })}>Neutral</button>
      <button onClick={() => setValorations({ ...valorations, bad: valorations.bad + 1 })}>Bad</button>
      <Statistics valorations={valorations} />
    </>
  )
}

export default App