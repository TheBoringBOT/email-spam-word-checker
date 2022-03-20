import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import "./App.css";
import detective from "./assets/detective.svg";

import Layout from "./components/layouts/Layout";
import Preloader from "./components/layouts/parts/Preloader";
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

  const [loading, setLoading] = useState(true);

  // hide preloader after
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading && <Preloader />}

      <Layout loading={loading}>
        <div className="flex justify-center items-center flex-col py-6">
          <Transition
            appear={true}
            show={!loading}
            enter="transform transition duration-[300ms]"
            enterFrom="opacity-0 -translate-y-[-30px] scale-80"
            enterTo="opacity-100 -translate-y-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 rotate-0 scale-100 "
            leaveTo="opacity-0 scale-95 "
          >
            <h1 className="flex  align-middle items-center text-5xl text-text-primary font-bold">
              <img width="50" src={detective} alt="" /> Spam Checker
            </h1>
          </Transition>
          <Transition
            appear={true}
            show={!loading}
            enter="transform transition duration-[600ms]"
            enterFrom="opacity-0 -translate-y-[-30px] scale-80"
            enterTo="opacity-100 -translate-y-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 rotate-0 scale-100 "
            leaveTo="opacity-0 scale-95 "
          >
            <h2 className="pt-1 text-text-primary">
              Paste your email text content here and detect known spammy words.
            </h2>
          </Transition>
        </div>
        <div className=" mx-auto grid overflow-hidden grid-cols-3 grid-rows-1 gap-3 my-auto pb-5  min-h-[70vh] ">
          <div className="box row-span-2 col-span-3 lg:col-span-2 ">
            {/* left content input */}
            <Transition
              appear={true}
              show={!loading}
              className="h-full"
              enter="transform transition duration-[900ms]"
              enterFrom="opacity-0 -translate-y-[-30px] scale-80"
              enterTo="opacity-100 -translate-y-0 scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo="opacity-0 scale-95 "
            >
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
            </Transition>
          </div>

          {/* right analysis */}

          <div className="box row-span-2 col-span-3 lg:col-span-1">
            <Transition
              appear={true}
              show={!loading}
              className="h-full w-full"
              enter="transform transition duration-[1100ms]"
              enterFrom="opacity-0 -translate-y-[-30px] scale-80"
              enterTo="opacity-100 -translate-y-0 scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo="opacity-0 scale-95 "
            >
              <div className="shadow-lg shadow-text-secondary/2  bg-white text-gray-100 flex items-center justify-center w-full  h-full text-2xl min-h-[200px] font-bold rounded"></div>
            </Transition>
          </div>
        </div>
      </Layout>
    </>
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
