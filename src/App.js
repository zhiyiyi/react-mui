import './App.css';
import { useState } from 'react';

const products = [
  { title: 'Cabbage', isFruit: false, id: 1},
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 }
];

function MyButton({ count, onClick}) {
  
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  )
}

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  const listItems = products.map(product => 
    <li
    key={product.id}
    style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}>
      {product.title}
    </li>
    )

  return (
    <div className="App">
      <ul>{listItems}</ul>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>

  );
}
