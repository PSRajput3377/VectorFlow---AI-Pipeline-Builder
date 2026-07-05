import { DraggableNode } from "./draggableNode";

const nodes = [
  {
    type: "customInput",
    label: "Input",
    icon: "📥",
    description: "Pipeline input",
  },
  {
    type: "customOutput",
    label: "Output",
    icon: "📤",
    description: "Pipeline output",
  },
  {
    type: "text",
    label: "Text",
    icon: "📝",
    description: "Prompt builder",
  },
  {
    type: "llm",
    label: "LLM",
    icon: "🤖",
    description: "Language model",
  },
  {
    type: "api",
    label: "API",
    icon: "🌐",
    description: "REST endpoint",
  },
  {
    type: "database",
    label: "Database",
    icon: "🗄️",
    description: "Data source",
  },
  {
    type: "image",
    label: "Image",
    icon: "🖼️",
    description: "Image processing",
  },
  {
    type: "condition",
    label: "Condition",
    icon: "🔀",
    description: "Branch logic",
  },
  {
    type: "delay",
    label: "Delay",
    icon: "⏱️",
    description: "Wait node",
  },
];

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        padding: "20px",
        overflowY: "auto",
        flex: 1,
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: 18,
          color: "#1e293b",
        }}
      >
        Pipeline Nodes
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {nodes.map((node) => (
          <DraggableNode
            key={node.type}
            type={node.type}
            label={node.label}
            icon={node.icon}
            description={node.description}
          />
        ))}
      </div>
    </div>
  );
};