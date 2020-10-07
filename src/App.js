import React, {useState} from "react";
import marked from 'marked';
import "./style.css";

const initialMarkdown = `

Hello **how** *are* you ?

- Item 1
- Item 2
- Item 3

> we love REACT.JS`;

export default function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  function handleChange(e) {
    setMarkdown(e.target.value)
  }

  return (
    <div className="app">
      <textarea
        value={markdown}
        onChange={handleChange}
      ></textarea>
      <div 
        className="preview"
        dangerouslySetInnerHTML={
          {
            __html: marked(markdown)
          }
        }
      >
      </div>
    </div>
  );
}
