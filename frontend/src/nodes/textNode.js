import { useMemo, useState } from "react";
import { BaseNode } from "../Components/BaseNode";

const VARIABLE_REGEX =
  /\{\{\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*\}\}/g;

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(
    data?.text || "{{input}}"
  );

  const variables = useMemo(() => {
    const found = [];

    for (const match of text.matchAll(VARIABLE_REGEX)) {
      if (!found.includes(match[1])) {
        found.push(match[1]);
      }
    }

    return found;
  }, [text]);

  const inputHandles = variables.map((variable) => ({
    id: variable,
  }));

  const lines = text.split("\n").length;

  const longestLine = Math.max(
    ...text.split("\n").map((line) => line.length),
    20
  );

  const nodeWidth = Math.min(
    Math.max(longestLine * 8 + 70, 250),
    520
  );

  const nodeHeight = Math.max(
    140,
    lines * 28 + 120
  );

  return (
    <BaseNode
      id={id}
      title="Text"
      badge="Prompt"
      style={{
        width: nodeWidth,
        minHeight: nodeHeight,
      }}
      inputs={inputHandles}
      outputs={[
        {
          id: "output",
        },
      ]}
      fields={[
        {
          type: "textarea",
          label: "Text",
          value: text,
          rows: lines + 1,
          onChange: setText,
          placeholder:
            "Type here... Use {{variable}} to create inputs.",
          style: {
            minHeight: lines * 24 + 40,
          },
        },
      ]}
    />
  );
};