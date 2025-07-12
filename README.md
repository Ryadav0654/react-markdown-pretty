# react-github-markdown-pretty

Render beautiful, modern, GitHub‑styled Markdown in your React / Next.js app with a single component.

> 📄 Just install & use:
> ```jsx
> import ReactGithubMarkdownPretty from 'react-github-markdown-pretty';
>
> <ReactGithubMarkdownPretty>{markdown}</ReactGithubMarkdownPretty>
> ```

![Screenshot](https://raw.githubusercontent.com/Ryadav0654/react-markdown-pretty/main/assets/screenshot.png)

---

## ✨ Features

✅ Zero‑config, drop‑in React component  
✅ GitHub‑style markdown (via [github-markdown-css](https://github.com/sindresorhus/github-markdown-css))  
✅ Modern, lightweight & fast  
✅ Works great with Next.js, Vite, CRA, etc.  
✅ XSS‑safe rendering with DOMPurify  
✅ Supports tables, code blocks, lists, blockquotes, headings & more

---

## 📦 Install

```bash
npm install react-markdown-pretty
# or
yarn add react-markdown-pretty
# or
pnpm add react-markdown-pretty
````

---

## ⚡ Usage

```jsx
import ReactGithubMarkdownPretty from 'react-github-markdown-pretty';

export default function MyPage() {
  const markdown = `
# Hello, world!

This is **markdown** rendered beautifully in React.

- Item 1
- Item 2
- Item 3

\`\`\`js
console.log('It even supports code blocks!');
\`\`\`
  `;

  return (
    <ReactGithubMarkdownPretty>
      {markdown}
    </ReactGithubMarkdownPretty>
  );
}
```

✨ That’s it! Your markdown is rendered safely & styled like GitHub.

---

## 🎨 Custom Styling

By default it uses the light GitHub theme.
To override colors or style further, add custom CSS:

```css
.markdown-body {
  /* your custom styles */
}
```

---

## 🛡 Security

All HTML generated from markdown is sanitized with [DOMPurify](https://github.com/cure53/DOMPurify)
✅ Safe from XSS

---

## ⚙️ Props

| Prop      |   Type | Default |                                    Description |
| --------- | -----: | ------: | ---------------------------------------------: |
| children  | string |       – |                        Markdown text to render |
| className | string |       – | Optional extra class names for the wrapper div |

---

## 🧪 Local dev & build

Clone and build locally:

```bash
git clone https://github.com/yourusername/react-markdown-pretty.git
cd react-markdown-pretty
npm install
npm run build
```

---

## 📜 License

MIT © [Ravindra Yadav](https://github.com/Ryadav0654)

---

## ⭐ Like it?

Give a ⭐ on [GitHub](https://github.com/Ryadav0654/react-markdown-pretty)!
Your support helps keep it maintained ✨


