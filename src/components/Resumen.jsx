import React from "react";
import ReactMarkdown from "react-markdown";
import resumen from "../../docs_karcha/01_resumen_karcha.md?raw";

export default function Resumen() {
  return (
    <div className="markdown-container">
      <ReactMarkdown>{resumen}</ReactMarkdown>
    </div>
  );
}
