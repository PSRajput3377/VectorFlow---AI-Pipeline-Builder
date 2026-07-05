import { useState } from "react";
import { BaseNode } from "../Components/BaseNode";

export const InputNode = ({ id, data }) => {
  const [name, setName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );

  const [type, setType] = useState(
    data?.inputType || "Text"
  );

  return (
    <BaseNode
      id={id}
      title="Input"
      badge="Source"
      outputs={[
        {
          id: "value",
        },
      ]}
      fields={[
        {
          type: "text",
          label: "Name",
          value: name,
          onChange: setName,
          placeholder: "Input name",
        },
        {
          type: "select",
          label: "Type",
          value: type,
          options: ["Text", "File"],
          onChange: setType,
        },
      ]}
    />
  );
};