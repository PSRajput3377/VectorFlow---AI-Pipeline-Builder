import { BaseNode } from "../Components/BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      badge="AI"
      inputs={[
        {
          id: "system",
        },
        {
          id: "prompt",
        },
      ]}
      outputs={[
        {
          id: "response",
        },
      ]}
    >
      <div className="node-description">
        Large Language Model that processes prompts and returns generated responses.
      </div>
    </BaseNode>
  );
};