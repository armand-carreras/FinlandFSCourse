import { useState } from 'react'

const App = () => {
  const [ valorations, setValorations ] = useState({ good:0, neutral:0, bad:0 })
 
  
  return (
    <>
    <h2>Give feedback</h2>
    <button onClick={() => setValorations({ ...valorations, good: valorations.good + 1 })}>Good</button>
    <button onClick={() => setValorations({ ...valorations, neutral: valorations.neutral + 1 })}>Neutral</button>
    <button onClick={() => setValorations({ ...valorations, bad: valorations.bad + 1 })}>Bad</button>
    <h2>Statistics</h2>
    <p>Good: {valorations.good}</p>
    <p>Neutral: {valorations.neutral}</p>
    <p>Bad: {valorations.bad}</p>
    </>
  )
}

export default App