import { useState } from "react";
import "./App.css";
import detective from "./assets/detective.svg";

import Layout from "./components/layouts/Layout";
import useCheckSpam from "./hooks/useCheckSpam";

function App() {
  const [currentText, setCurrentText] = useState("");
  const [currentTrue, setCurrentTrue] = useState("no");
  const [defaultValue, setDefaultValue] = useState(defaultText);
  // const spamWords = useCheckSpam();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { text } = e.target.elements;
    setCurrentText(text.value);
  };

  return (
    <Layout>
      <div className="flex justify-center items-center flex-col py-6">
        <h1 className="flex  align-middle items-center text-5xl text-text-primary font-bold">
          <img width="50" src={detective} alt="" /> Spam Checker
        </h1>
        <h2 className="pt-1 text-text-primary">
          Paste your email text content here and detect known spammy words.
        </h2>
      </div>
      <div className=" mx-auto grid overflow-hidden grid-cols-3 grid-rows-1 gap-3 my-auto pb-5 h-[70vh] min-h-['800px'] ">
        <div className="box row-span-2 col-span-2 ] ">
          {/* left content input */}
          <div className=" relative text-gray-100 flex items-center justify-center min-h-5  w-full h-full text-2xl font-bold rounded  flex-col">
            <form
              onSubmit={handleSubmit}
              className=" h-full flex flex-col w-full"
            >
              <textarea
                defaultValue={defaultValue}
                rows="10"
                id="text"
                className=" text-xl px-4 py-10 h-full shadow-lg shadow-text-secondary/2 bg-white w-full text-slate-500 "
              />
            </form>{" "}
          </div>
        </div>
        {/* right analysis */}
        <div className="box row-span-2">
          <div className="shadow-lg shadow-text-secondary/2  bg-white text-gray-100 flex items-center justify-center w-full h-full text-2xl font-bold rounded"></div>
        </div>
      </div>
    </Layout>
  );
}

const testWords = {
  a: "dick",
  b: "fish",
};

const defaultText = `Dear friend,
  
I am a Financial Consultant in control of privately owned funds placed for long term investments.

My client intends to invest these funds in projects. I am willing to finance projects at a guaranteed 5% ROI per annum for projects ranging from 2 years term and above but not exceeding 12 years.

Please answer ASAP.
`;

export default App;
