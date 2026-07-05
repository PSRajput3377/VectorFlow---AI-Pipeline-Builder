import { useState } from "react";
import { BaseNode } from "../Components/BaseNode";

export const ImageNode = ({ id }) => {
  const [format, setFormat] = useState("PNG");

  return (
    <BaseNode
      id={id}
      title="Image"
      badge="Media"
      inputs={[
        {
          id: "image",
        },
      ]}
      outputs={[
        {
          id: "output",
        },
      ]}
      fields={[
        {
          type: "select",
          label: "Format",
          value: format,
          options: ["PNG", "JPG", "WEBP"],
          onChange: setFormat,
        },
      ]}
    />
  );
};