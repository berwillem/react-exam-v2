import { useState } from "react";
import Card from "../../components/Card/Card";

export default function Services() {
  const [color, setColor] = useState("#ffffff");
  const [text, setText] = useState("");

  const btn = <button onClick={() => alert("clicked")}>click</button>;
  const inputColor = (
    <input type="color" onChange={(e) => setColor(e.target.value)} />
  );
  const inputText = (
    <input type="text" onChange={(e) => setText(e.target.value)} />
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        marginTop: "150px",
      }}
    >
      <Card
        title="Set Background Color"
        type="color"
        input={inputColor}
        style={{ backgroundColor: color }}
      />

      <Card title={text || "Default Text"} type="text" input={inputText} />

      <Card title="Button Card" btn={btn} />
    </div>
  );
}
