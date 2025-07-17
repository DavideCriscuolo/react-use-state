export default function Card(prop) {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{prop.title}</h4>
        <p className="card-text"> {prop.desc}</p>
      </div>
    </div>
  );
}
