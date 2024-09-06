import { useState } from "react";
import "./App.css";
import Action from "./components/gameScreen/ActionBoard/Action";
import ActionBoard from "./components/gameScreen/ActionBoard/ActionBoard";
import CardInfo from "./components/gameScreen/CardInfo/CardInfo";
import Caller from "./components/Caller/Caller";

function App() {
  return (
    <>
      {/* <CardInfo /> */}
      <Action />
    </>
  );
}

export default App;
