import { useState } from "react";
import Card from "./card";
export default function Button(prop) {
  const [open, setOpen] = useState(false);

  function heandClik() {
    setOpen(!open);
    console.log("ciao");
  }

  return (
    <div>
      <div key={prop.id}>
        <button className="btn btn-primary my-5" onClick={heandClik}>
          {prop.title}
        </button>
      </div>
      <div>{open && <Card title={prop.title} desc={prop.desc}></Card>}</div>
    </div>
  );
}
