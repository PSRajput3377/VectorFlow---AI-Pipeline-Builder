import { Handle, Position } from "reactflow";
import "../styles/node.css";

export const BaseNode = ({
  id,
  title,
  badge,
  inputs = [],
  outputs = [],
  fields = [],
  children,
  style = {},
}) => {
  const renderField = (field) => {
    switch (field.type) {
      case "text":
      case "number":
        return (
          <div className="node-field" key={field.label}>
            <label>{field.label}</label>

            <input
              type={field.type}
              value={field.value}
              placeholder={field.placeholder || ""}
              onChange={(e) => field.onChange(e.target.value)}
            />
          </div>
        );

      case "textarea":
        return (
          <div className="node-field" key={field.label}>
            <label>{field.label}</label>

            <textarea
              rows={field.rows || 4}
              value={field.value}
              placeholder={field.placeholder || ""}
              onChange={(e) => field.onChange(e.target.value)}
              style={field.style || {}}
            />
          </div>
        );

      case "select":
        return (
          <div className="node-field" key={field.label}>
            <label>{field.label}</label>

            <select
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
            >
              {field.options.map((option) => (
                <option
                  key={option}
                  value={option}
                >
                  {option}
                </option>
              ))}
            </select>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="base-node"
      style={style}
    >
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{
            top:
              input.top ??
              `${((index + 1) * 100) / (inputs.length + 1)}%`,
          }}
        />
      ))}

      <div className="node-header">
        <div className="node-title">{title}</div>

        {badge && (
          <div className="node-badge">
            {badge}
          </div>
        )}
      </div>

      <div className="node-content">
        {fields.map(renderField)}
        {children}
      </div>

      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{
            top:
              output.top ??
              `${((index + 1) * 100) / (outputs.length + 1)}%`,
          }}
        />
      ))}
    </div>
  );
};