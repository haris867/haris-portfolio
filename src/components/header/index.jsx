import React, { useRef, useEffect } from "react";
import { FaEnvelope, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import HuLogo from "../logo";

export default function Header() {
  const svgRef = useRef();

  useEffect(() => {
    if (svgRef.current) {
      const strokePath = svgRef.current.querySelector(".restart-animation");
      if (strokePath) {
        strokePath.addEventListener("click", restartAnimation);

        function restartAnimation() {
          if (this && this.parentNode) {
            const clonedElement = this.cloneNode(true);
            this.parentNode.replaceChild(clonedElement, this);
            clonedElement.addEventListener("click", restartAnimation);
          }
        }
      }
    }
  }, []);
  return (
    <header className="d-flex justify-content-between align-items-center fade-in">
      <div className="header-content">
        <div className="logo">
          <HuLogo />
        </div>
        <div className="icons m-3">
          <a href="https://github.com/haris867">
            <FaGithubSquare />
          </a>
          <a href="https://www.linkedin.com/in/haris-usman-3bb83a204/">
            <FaLinkedin />
          </a>
          <a href="mailto:haris.usman@hotmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </header>
  );
}
