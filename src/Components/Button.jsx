import { useState } from "react";
import Card from "./card";
export default function Button(prop) {
  const [markup, setMarkup] = useState();

  function heandClik() {
    setMarkup(prop.desc);
  }

  return (
    <div key={prop.id}>
      <button onClick={heandClik}>{prop.title}</button>
    </div>
  );
}
