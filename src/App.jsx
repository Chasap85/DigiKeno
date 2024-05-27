import { useState } from "react";
import "./App.css";
import Action from "./components/gameScreen/ActionBoard/Action";
import ActionBoard from "./components/gameScreen/ActionBoard/ActionBoard";
import Header from "./components/Header/Header";
import CardInfo from "./components/gameScreen/CardInfo/CardInfo";
import Caller from "./components/Caller/Caller";

function App() {
  return (
    <>
      <Header />
      <div
        className="grid m-2 gap-2 rounded"
        style={{ gridTemplateColumns: "1fr 2.3fr .7fr" }}
      >
        <CardInfo />
        <div>
          <Action />
        </div>
        <Caller />
      </div>
    </>
  );
}

export default App;
