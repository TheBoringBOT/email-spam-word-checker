import React from "react";

export default function Footer() {
  return (
    <div className="mt-auto flex flex-col md:flex-row justify-center items-center text-center md:justify-between py-5 px-3 text-text-secondary">
      <span className="text-sm mb-3 md:mb-0">
        “Either you run the day or the day runs you.” — Jim Rohn
      </span>
      <span className="text-sm">
        By Studio Moo&nbsp;
        <a
          href="https://studiomoo.se/?utm_source=email%20spam%20checker&utm_medium=website%20footer&utm_campaign=none"
          className=" pt-5 md:pt-0 transition  duration-300 ease-in-out text-text-primary border-b-2 border-accent2  hover:fill-text-primary font-bold"
        >
          webbyrå Stockholm
        </a>
      </span>
    </div>
  );
}
