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
  };

  return (
    <Layout>
      <div className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-3 my-auto pb-5  ">
        <div className="box row-span-2 col-span-2 min-h-[80vh] ">
          {/* left content input */}
          <div className="shadow-lg bg-white text-gray-100 flex items-center justify-center min-h-5  w-full h-full text-2xl font-bold rounded p-5 flex-col">
            <h2>{currentText}</h2>
            <form onSubmit={handleSubmit} className="  flex flex-col w-full">
              <textarea
                rows="10"
                id="text"
                className="text-xl p-4 bg-slate-100 w-full text-slate-500"
              />
              <button
                className=" mt-5 block bg-accent w-full px-2 py-3 rounded"
                type="submit"
              >
                Evaluate
              </button>
            </form>{" "}
          </div>
        </div>
        {/* right analysis */}
        <div className="box row-span-2">
          <div className="shadow-lg bg-white text-gray-100 flex items-center justify-center w-full h-full text-2xl font-bold rounded"></div>
        </div>
      </div>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 style={{ color: "red" }}>{currentTrue}</h1>
      <h2>{currentText}</h2>
      <form onSubmit={handleSubmit}>
        <textarea rows="4" cols="50" id="text" />
        <button type="submit">Evaluate</button>
      </form> */}
    </Layout>
  );
}

const testWords = {
  a: "dick",
  b: "fish",
};

export default App;
