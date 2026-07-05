import { useState } from "react";
import { BaseNode } from "../Components/BaseNode";

export const APINode = ({ id }) => {
  const [endpoint, setEndpoint] = useState("");

  return (
    <BaseNode
      id={id}
      title="API"
      badge="REST"
      inputs={[
        {
          id: "request",
        },
      ]}
      outputs={[
        {
          id: "response",
        },
      ]}
      fields={[
        {
          type: "text",
          label: "Endpoint",
          value: endpoint,
          onChange: setEndpoint,
          placeholder: "https://api.example.com",
        },
      ]}
    />
  );
};