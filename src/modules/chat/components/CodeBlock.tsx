import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
          padding: "5px",
          backgroundColor: "#333",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          fontSize: "12px",
        }}
      >
        {copied ? "Copiado!" : "Copiar"}
      </button>
      <SyntaxHighlighter language={language} style={atomDark} showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
