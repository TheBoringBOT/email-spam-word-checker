import React from "react";

export default function Footer() {
  return (
    <div className="mt-auto flex flex-col md:flex-row justify-center items-center text-center md:justify-between py-5 px-3 text-text-secondary">
      <span className="text-sm mb-3 md:mb-0">
        “Either you run the day or the day runs you.” — Jim Rohn
      </span>
      <span className="text-sm">
        &copy; {new Date().getFullYear()} By <strong>TheBoringBot</strong> in 🇸🇪
      </span>
    </div>
  );
}
