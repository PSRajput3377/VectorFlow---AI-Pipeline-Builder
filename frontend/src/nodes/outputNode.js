import { useState } from "react";
import { BaseNode } from "../Components/BaseNode";

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );

  const [type, setType] = useState(
    data?.outputType || "Text"
  );

  return (
    <BaseNode
      id={id}
      title="Output"
      badge="Sink"
      inputs={[
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
          placeholder: "Output name",
        },
        {
          type: "select",
          label: "Type",
          value: type,
          options: ["Text", "Image"],
          onChange: setType,
        },
      ]}
    />
  );
};