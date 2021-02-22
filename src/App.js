import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';

function App() {
  const counter = useSelector( state => state.myCounter);
  const isLogged = useSelector( state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))} >+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable information</h3> : "Sorry yu can't see that"}
      
    </div>
  );
}

export default App;
