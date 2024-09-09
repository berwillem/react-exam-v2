import "./Card.css";

export default function Card({ title = "default", btn, input, style }) {
  return (
    <div className="card" style={style}>
      <h1>{title}</h1>
      {input}
      {btn}
    </div>
  );
}
