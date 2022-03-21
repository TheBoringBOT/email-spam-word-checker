import React, { useState, useEffect } from "react";
import HighlightWithinTextarea from "react-highlight-within-textarea";
import { useCopyToClipboard, useDebounce } from "react-use";

const TextArea = ({ currentText, defaultText, setCurrentText }) => {
  // copy to clipboard
  const [state, copyToClipboard] = useCopyToClipboard(defaultText);
  const [copied, setCopied] = useState(false);

  // Copy to clipboard
  const runCopyToClipboard = (text) => {
    setCopied(true);
    copyToClipboard(text);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const highlight = [
    {
      highlight: "friend",
      className: "bg-accent",
    },
    {
      highlight: "blueberry",
      className: "bg-accent2",
    },
    {
      highlight: /ba(na)*/gi,
      className: "yellow",
    },
  ];

  return (
    <>
      <div className=" h-full flex flex-col w-full">
        <div className="area bg-white h-full solid-shadow-2 px-5 py-10 text-slate-500 mono-font text-2xl font-medium">
          <HighlightWithinTextarea
            value={currentText}
            onChange={(value) => setCurrentText(value)}
            highlight={highlight}
          />
        </div>
        <button
          className={` backdrop-blur-sm transition duration-300 ease-in-out font-medium text-text-secondary absolute bottom-1 right-1 p-3   text-sm hover:bg-accent
                      ${copied ? "bg-accent" : "bg-accent/40"} ${
            currentText === "" && "hidden"
          }
                 `}
          onClick={() => runCopyToClipboard(currentText)}
        >
          {copied ? "🕺🏻 Copied Text" : "Copy To Clipboard"}
        </button>
      </div>
    </>
  );
};

export default TextArea;
