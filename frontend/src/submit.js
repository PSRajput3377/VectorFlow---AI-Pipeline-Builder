import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes,
          edges,
        }),
      });

      const result = await response.json();

      alert(
        `Pipeline Summary

Nodes : ${result.num_nodes}
Edges : ${result.num_edges}
DAG   : ${result.is_dag ? "Yes ✅" : "No ❌"}`
      );
    } catch (error) {
      console.error(error);

      alert("Unable to connect to backend.");
    }
  };

  return (
    <button
      onClick={handleSubmit}
      style={{
        background: "#2563eb",
        color: "white",
        border: "none",
        padding: "12px 28px",
        borderRadius: "10px",
        fontWeight: 600,
        fontSize: "15px",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(37,99,235,.3)",
      }}
    >
      Submit Pipeline
    </button>
  );
};