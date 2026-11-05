import { useState } from 'react'

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  )
}

const StatisticLine = (props) => {
  return (
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </>
  )
}

const Statistics = (props) => {

  const valorations = props.valorations;

  if ( valorations.good + valorations.neutral + valorations.bad != 0 ) {
    return (
    <>
    <table>
      <thead>
        <tr>
          <th><h2>Statistics</h2></th>
        </tr>
      </thead>
      <tbody>
        <StatisticLine text="Good" value={valorations.good} />
        <StatisticLine text="Neutral" value={valorations.neutral} />
        <StatisticLine text="Bad" value={valorations.bad} />
        
        <StatisticLine text="Total" value={valorations.good + valorations.neutral + valorations.bad} />
        <StatisticLine text="Average" value={(valorations.good - valorations.bad) / (valorations.good + valorations.neutral + valorations.bad)} />
        <StatisticLine text="Positive" value={valorations.good / (valorations.good + valorations.neutral + valorations.bad) * 100 + " %"} />
      </tbody>
    </table>
    </>
    )
  } else { return ( <> <p>No Feedback Given</p> </>); }

}

const App = () => {
  
  const [valorations, setValorations] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleGood = () => setValorations({ ...valorations, good: valorations.good + 1 });
  const handleNeutral = () => setValorations({ ...valorations, neutral: valorations.neutral + 1 });
  const handleBad = () => setValorations({ ...valorations, bad: valorations.bad + 1 });

  return (
    <>
      <h2>Give feedback</h2>
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />
      <Statistics valorations={valorations} />
    </>
  )
}

export default App