"use client";
import { useState } from "react";

export default function HamMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div id="ham-container">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="hamburger"
      >
        ☰
      </button>

      {open && (
        <nav>
          <ul>
            <li><a href="#one">Item One</a></li>
            <li><a href="#two">Item Two</a></li>
            <li><a href="#three">Item Three</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
}
