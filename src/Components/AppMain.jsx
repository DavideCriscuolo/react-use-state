import { useState } from "react";
import Card from "./Card";
import { lenguages } from "../data/ListLenguages";
export default function AppMain() {
  // let leanguage = {}
  const [leanguage, setLeanguage] = useState({
    id: null,
    title: "-",
    desc: "Seleziona un linguaggio",
  });

  function heandClik(index) {
    console.log(index);
    setLeanguage(index);
  }

  return (
    <main>
      <div className="container d-flex justify-content-around ">
        {lenguages.map((leanguage, index) => {
          return (
            <div>
              <div key={leanguage.id}>
                <button
                  className="btn btn-primary my-5"
                  onClick={() => heandClik(leanguage)}
                >
                  {leanguage.title}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <Card title={leanguage.title} desc={leanguage.desc}></Card>
      </div>
    </main>
  );
}
