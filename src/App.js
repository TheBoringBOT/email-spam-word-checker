import { useState, useEffect, useCallback } from "react";
import { Transition } from "@headlessui/react";
import { useReadingTime } from "react-hook-reading-time";

// styles
import "./App.css";
import detective from "./assets/detective.svg";

//content
import Layout from "./components/layouts/Layout";
import Preloader from "./components/layouts/parts/Preloader";

// components
import TextArea from "./components/layouts/parts/TextArea";

// data
import defaultText from "./data/DefaultText";

function App() {
  //preloader state
  const [loading, setLoading] = useState(true);
  // current Text in textarea
  const [currentText, setCurrentText] = useState(defaultText);

  // Main hook for analysis
  const {
    text, // 1 min read
    minutes, // 1
    words, // 168
  } = useReadingTime(currentText);

  // hide preloader after 2s
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading && <Preloader />}

      <Layout loading={loading}>
        <div className=" text-center flex justify-center items-center flex-col py-6">
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
            <h1 className="flex  flex-col md:flex-row align-middle items-center text-3xl md:text-5xl text-text-primary font-bold">
              <img width="50" src={detective} alt="" />{" "}
              <span>Spam Checker</span>
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
            <h2 className="pt-1 text-text-primary text-md md:text-lg">
              Paste your email text content here and detect known spammy words.
            </h2>
          </Transition>
        </div>
        <div className=" mx-auto grid overflow-hidden grid-cols-3 grid-rows-1 gap-3 my-auto pb-5  min-h-[70vh] px-5 ">
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
              <div className=" relative text-gray-100 flex items-center justify-center min-h-5  w-full h-full text-2xl font-bold  flex-col">
                <TextArea
                  currentText={currentText}
                  setCurrentText={setCurrentText}
                />
                {/* Copy text */}
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
              <div className="border-2 border-text-primary solid-shadow-2 bg-white text-text-primary flex pt-10 px-5  justify-start w-full  h-full text-xl min-h-[200px] font-bold">
                <ul className="w-full">
                  <li className="my-3 flex justify-between w-full items-center">
                    <span>Word Count:</span>
                    <span
                      className={` p-1 ${
                        words <= 180 ? "bg-mint" : "bg-warning"
                      }`}
                    >
                      {words}
                    </span>
                  </li>
                  <li className="my-3 flex justify-between w-full items-center">
                    <span>Read Time:</span>
                    <span
                      className={`  p-1 ${
                        minutes <= 1.5 && minutes > 0 ? "bg-mint" : "bg-warning"
                      }`}
                    >
                      {currentText ? text : "---"}
                    </span>
                  </li>
                  <li className="my-10"></li>
                  <li className="my-3 flex border-2 border-text-primary bg-urgent  solid-shadow-2 p-2 rounded  justify-between w-full items-center">
                    <span className="">Urgent 🚨</span>
                  </li>
                  <li className="my-3 flex border-2 border-text-primary bg-profanity  solid-shadow-2 p-2 rounded  justify-between w-full items-center">
                    <span className="">Profanity 🙉</span>
                  </li>
                  <li className="my-3 flex border-2 border-text-primary bg-money  solid-shadow-2 p-2 rounded  justify-between w-full items-center">
                    <span className="">Money 💸</span>
                  </li>
                  <li className="my-3 flex border-2 border-text-primary bg-shady solid-shadow-2 p-2 rounded  justify-between w-full items-center">
                    <span className="">Shady 🌚</span>
                  </li>
                  <li className="my-3 flex border-2 border-text-primary bg-overpromise solid-shadow-2 p-2 rounded  justify-between w-full items-center">
                    <span className="">Overpromise 🧙‍♂️</span>
                  </li>
                  <li className="my-3 flex border-2 border-text-primary bg-general solid-shadow-2 p-2 rounded  justify-between w-full items-center">
                    <span className="">General 👎</span>
                  </li>
                </ul>
              </div>
            </Transition>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
