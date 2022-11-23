import { useEffect, useState, useContext } from 'react';
import { Web3Context } from '../context/Web3Context';

const Web3Component = () => {

  const { getAllFundsList } = useContext(Web3Context);

  const [stateVariable, setStateVariable] = useState([])

  const readData = () => {
    getAllFundsList()
  }

  const writeData = () => {

  }



  return (
    <>
      <div style={{ margin: '2rem' }}>
        <p>State Variable:</p>
        <button onClick={readData} style={{ border: '1px solid black', padding: '1rem' }}>
          Read state
        </button>
        <br />
        <br />
        <p>Change state Variable:</p>
        <button onClick={writeData} style={{ border: '1px solid black', padding: '1rem' }}>
          Write state
        </button>
        <br />
        <br />
        <br />
        <div>Funds:</div>
        {
          stateVariable.length !== 0 &&
          stateVariable.map((item, i) =>
            <div key={i} style={{ border: '1px solid black', margin: '1rem 0' }}>
              <p>Name: {item.name}</p>
              <p>Description: {item.description}</p>
              <p>target: {item.target}</p>
              <p>Min. Contribution: {item.minContribution}</p>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Web3Component