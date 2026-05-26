import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownPage({ file }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [file]);

  return (
    <div className="markdown-container">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}