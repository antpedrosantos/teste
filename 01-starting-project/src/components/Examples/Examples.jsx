import { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "../TabButton/TabButton.jsx";

export default function Examples() {
  let tabContent = <p>Please select a topic</p>;

  function handleClick(selectedButton) {
    return setSelectedTopic(selectedButton);
  }

  const [selecteTopic, setSelectedTopic] = useState();

  if (selecteTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selecteTopic].title}</h3>
        <p>{EXAMPLES[selecteTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selecteTopic].code}</code>
        </pre>
      </div>
    );
  }

  const topics = [];
  for (const key in EXAMPLES) {
    if (Object.hasOwnProperty.call(EXAMPLES, key)) {
        topics.push(key);  
          
    }
  }

  console.log(topics)

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {topics.map((topic) => (
          <TabButton
            onSelect={() => handleClick(topic)}
            isSelected={selecteTopic === topic}
          >{topic}</TabButton>
        ))}
      </menu>
      <div>{tabContent}</div>
    </section>
  );
}
