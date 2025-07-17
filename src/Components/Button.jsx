import { useState } from "react";
import Card from "./card";
export default function Button(prop) {
  const [open, setOpen] = useState(false);

  function heandClik() {
    setOpen(!open);
    console.log("ciao");
  }

  return (
    <div key={prop.id}>
      <button onClick={heandClik}>{prop.title}</button>
      <div>{open && <Card desc={prop.desc}></Card>}</div>
    </div>
  );
}
