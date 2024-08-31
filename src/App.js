import "./styles.css";

import { BtnContainer, Header } from "./script.js";

export default function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s"
        alt=""
        className="banner"
      />
      <Header />

      <BtnContainer />
    </div>
  );
}
