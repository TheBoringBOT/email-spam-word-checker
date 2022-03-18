import { useState } from "react";
import "./App.css";

import Layout from "./components/layouts/Layout";
import useCheckSpam from "./hooks/useCheckSpam";

function App() {
  const [currentText, setCurrentText] = useState("");
  const [currentTrue, setCurrentTrue] = useState("no");
  // const spamWords = useCheckSpam();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { text } = e.target.elements;
    setCurrentText(text.value);
    console.table(Object.values(testWords));
  };

  return (
    <Layout>
      <h1 style={{ color: "red" }}>{currentTrue}</h1>
      <h2>{currentText}</h2>
      <form onSubmit={handleSubmit}>
        <textarea rows="4" cols="50" id="text" />
        <button type="submit">Evaluate</button>
      </form>
    </Layout>
  );
}

const testWords = {
  a: "dick",
  b: "fish",
};

export default App;
