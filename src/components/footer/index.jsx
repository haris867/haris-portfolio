import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="d-flex align-items-center">
      <div className="footer-content">
        <h1 className="text-center">
          <a href="#top" className="scroll-arrow">
            <AiOutlineArrowUp />
          </a>
        </h1>
      </div>
    </footer>
  );
}
