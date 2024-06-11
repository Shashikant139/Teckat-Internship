import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './vite.svg'; // Fix: removed leading slash
import './App.css';

function App() {
  const [data, setData] = useState(0); // Fix: removed type annotation
  const [numberData, setNumberData] = useState(0); // Fix: removed type annotation

  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8];

  const people = [
    { name: "Ram", Age: 23, status: "active" },
    { name: "Ravan", Age: 20, status: "inactive" },
    { name: "lakshman", Age: 26, status: "active" },
  ];

  useEffect(() => {
    // Fix: added a function to be executed when the effect is triggered
    console.log('Effect triggered');
  }, [numberData]);

  const addData = () => {
    setData(data + 1);
    console.log(data + 1);
  };

  const decrementData = () => {
    setNumberData(numberData - 1);
  };

  return (
    <>
      <button title="title" onClick={addData} className={`number ${data}`}>
        addData
      </button>

      <div>Incremented Data: {data}</div>
      <br />

      <button onClick={decrementData} className={`decrement ${numberData}`}>
        decrement
      </button>
      <div>Decrement Data: {numberData}</div>
      {numberArray.map((item, i) => {
        return <div key={i}>{item}</div>;
      })}

      {people.map((item, i) => {
        return (
          <div key={i}>
            {item.status === "active" ? (
              <>
                <div>name: {item.name}</div>
                <div>Age: {item.Age}</div> {/* Fix: capitalized 'Age' */}
                <br />
              </>
            ) : (
              <>
                <div>
                  inactive
                </div>
                <br />
              </>
            )}
          </div>
        );
      })}
    </>
  );
}

export default App;