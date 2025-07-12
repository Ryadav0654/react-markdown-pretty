import { jsx as _jsx } from "react/jsx-runtime";
import { marked } from "marked";
import DOMPurify from "dompurify";
import "github-markdown-css/github-markdown-light.css";
export default function ReactMarkdownPretty(_a) {
    var children = _a.children, className = _a.className;
    // marked.parse should return string if no async plugins used
    var raw = marked.parse(children);
    var html = DOMPurify.sanitize(raw);
    return (_jsx("div", { className: "markdown-body ".concat(className || ""), dangerouslySetInnerHTML: { __html: html } }));
}
