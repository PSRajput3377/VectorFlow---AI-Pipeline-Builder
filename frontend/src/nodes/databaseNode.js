import { useState } from "react";
import { BaseNode } from "../Components/BaseNode";

export const DatabaseNode = ({ id }) => {
  const [table, setTable] = useState("users");

  return (
    <BaseNode
      id={id}
      title="Database"
      badge="SQL"
      inputs={[
        {
          id: "query",
        },
      ]}
      outputs={[
        {
          id: "result",
        },
      ]}
      fields={[
        {
          type: "text",
          label: "Table",
          value: table,
          onChange: setTable,
        },
      ]}
    />
  );
};