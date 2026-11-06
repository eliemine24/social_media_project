import { useState } from 'react';

export default function App(){

  const [count, setCount] = useState(5);

  function handleClick(){

    if (count > 0) { setCount(count - 1) }
    else {setCount("STOOOP")}
  }

  //====================

  return (
    <div>
      <h1>Décompte enfaitent</h1>
      <Boutton count={count} onClick={handleClick} />
      <Boutton count={count} onClick={handleClick} />
      <Alerte />
    </div>
  )
}

function Alerte() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

function Boutton({count, onClick}){

  return (
    <button onClick={onClick}>
      décompte : {count}
    </button>
  )
}