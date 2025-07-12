import React from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import "github-markdown-css/github-markdown-light.css";

interface Props {
  children: string;
  className?: string;
}

export default function ReactMarkdownPretty({ children, className }: Props) {
  // marked.parse should return string if no async plugins used
  const raw = marked.parse(children) as string;
  const html = DOMPurify.sanitize(raw);

  return (
    <div
      className={`markdown-body ${className || ""}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
