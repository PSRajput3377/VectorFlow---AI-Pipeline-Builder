import { useState } from "react";
import { BaseNode } from "../Components/BaseNode";

export const ConditionNode = ({ id }) => {
  const [rule, setRule] = useState("x > 0");

  return (
    <BaseNode
      id={id}
      title="Condition"
      badge="Logic"
      inputs={[
        {
          id: "input",
        },
      ]}
      outputs={[
        {
          id: "true",
        },
        {
          id: "false",
        },
      ]}
      fields={[
        {
          type: "text",
          label: "Rule",
          value: rule,
          onChange: setRule,
        },
      ]}
    />
  );
};