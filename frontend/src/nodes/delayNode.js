import { useState } from "react";
import { BaseNode } from "../Components/BaseNode";

export const DelayNode = ({ id }) => {
  const [seconds, setSeconds] = useState(1);

  return (
    <BaseNode
      id={id}
      title="Delay"
      badge="Timer"
      inputs={[
        {
          id: "input",
        },
      ]}
      outputs={[
        {
          id: "output",
        },
      ]}
      fields={[
        {
          type: "number",
          label: "Seconds",
          value: seconds,
          onChange: setSeconds,
        },
      ]}
    />
  );
};