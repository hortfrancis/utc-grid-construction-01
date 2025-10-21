import { useState } from 'react';
import './Square.css';

export default function Square() {

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(prev => !prev);
  }

  return (
    <div
      className={`Square ${active ? 'active' : ''}`}
      onClick={handleClick}
    />
  );
}