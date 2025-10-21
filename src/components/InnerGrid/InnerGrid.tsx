import Square from '../Square/';
import './InnerGrid.css';

export default function InnerGrid() {
  // Create a 2x2 grid 
  return (
    <div className='InnerGrid'>
      {Array.from({ length: 4 }).map((_, index) => (
        <Square key={index} />
      ))}
    </div>
  )
}
