import logo from './logo.svg';
import './App.css';

function App() {
  return (
   
    const { useState } = React; 

  const [count, setCount] = useState(0); 

 
    <div className="app">
    
      <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>
        {count}
      </h1>
      <div className="button__wrapper">
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}



export default App;
