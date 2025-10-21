import InnerGrid from '../InnerGrid/';
import './OuterGrid.css';

export default function OuterGrid() {
  // Create a 3x3 grid of InnerGrid components
  return (
    <div className="OuterGrid">
      {Array.from({ length: 9 }).map((_, index) => (
        <InnerGrid key={index} />
      ))}
    </div>
  );
}
