export const DraggableNode = ({
  type,
  label,
  icon,
  description,
}) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify({
        nodeType,
      })
    );

    event.dataTransfer.effectAllowed = "move";
    event.target.style.cursor = "grabbing";
  };

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, type)}
      onDragEnd={(e) => {
        e.target.style.cursor = "grab";
      }}
      style={{
        background: "white",
        border: "1px solid #dbe4ee",
        borderRadius: 12,
        padding: 14,
        cursor: "grab",
        transition: "all .2s ease",
        boxShadow: "0 2px 6px rgba(0,0,0,.05)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow =
          "0 8px 18px rgba(0,0,0,.10)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.boxShadow =
          "0 2px 6px rgba(0,0,0,.05)";
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: 24,
            width: 36,
            textAlign: "center",
          }}
        >
          {icon}
        </div>

        <div>
          <div
            style={{
              fontWeight: 600,
              color: "#1e293b",
            }}
          >
            {label}
          </div>

          <div
            style={{
              fontSize: 12,
              color: "#64748b",
              marginTop: 3,
            }}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};