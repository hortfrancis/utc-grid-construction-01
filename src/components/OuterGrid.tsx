import './OuterGrid.css';

export default function OuterGrid() {



  return (
    <div className="OuterGrid">
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} />
      ))}
    </div>
  );
}
