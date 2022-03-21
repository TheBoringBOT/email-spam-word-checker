import React, { useState, useEffect } from "react";
import HighlightWithinTextarea from "react-highlight-within-textarea";
import { useCopyToClipboard, useDebounce } from "react-use";
import SpamWords from "../../../data/SpamWordsList";

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
      highlight: SpamWords.urgent,
      className: "bg-urgent",
    },
    {
      highlight: SpamWords.shady,
      className: "bg-shady",
    },
    {
      highlight: SpamWords.money,
      className: "bg-money",
    },
    {
      highlight: SpamWords.overpromise,
      className: "bg-overpromise",
    },
    {
      highlight: SpamWords.general,
      className: "bg-general",
    },
    {
      highlight: SpamWords.profanity,
      className: "bg-profanity",
    },
  ];

  return (
    <>
      <div className=" h-full flex flex-col w-full">
        <div className="bg-white h-full  border-2 border-text-primary solid-shadow-2 px-5 py-10 text-slate-500 mono-font text-2xl overflow overflow-auto max-h-[70vh] font-medium">
          <HighlightWithinTextarea
            spellcheck="true"
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
