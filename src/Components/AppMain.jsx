import Button from "./Button";
import { lenguages } from "../data/ListLenguages";
export default function AppMain() {
  return (
    <main>
      <div className="container d-flex justify-content-center  gap-5">
        {lenguages.map((leanguage) => {
          return (
            <Button
              key={leanguage.id}
              title={leanguage.title}
              desc={leanguage.desc}
            ></Button>
          );
        })}
      </div>
    </main>
  );
}
