import './InnerGrid.css';

export default function InnerGrid() {
  return (
    // Create a 2x2 grid 
    <div className='InnerGrid'>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} />
      ))}
    </div>
  )
}
