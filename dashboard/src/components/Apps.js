import React from "react";

const appsData = [
  {
    name: "Streak",
    description:
      "Algo trading platform to create, backtest, and deploy strategies without coding.",
    icon: "📊",
  },
  {
    name: "Sensibull",
    description:
      "Options trading platform with strategies, analysis, and virtual trading.",
    icon: "📈",
  },
  {
    name: "Smallcase",
    description:
      "Thematic investment platform to buy curated stock portfolios in one click.",
    icon: "📦",
  },
  {
    name: "GoldenPi",
    description:
      "Simplified bond and fixed-income investments for better returns.",
    icon: "💰",
  },
];

const Apps = () => {
  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "30px auto",
        padding: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "25px",
      }}
    >
      {appsData.map((app, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #eaeaea",
            borderRadius: "12px",
            padding: "20px",
            background: "white",
            boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>
            {app.icon}
          </div>
          <h3 style={{ margin: "0 0 10px", color: "#222" }}>{app.name}</h3>
          <p
            style={{
              fontSize: "14px",
              color: "#555",
              marginBottom: "20px",
              lineHeight: "1.5",
            }}
          >
            {app.description}
          </p>
          <button
            disabled
            style={{
              padding: "8px 16px",
              background: "#ccc",
              color: "#666",
              border: "none",
              borderRadius: "6px",
              fontSize: "14px",
              cursor: "not-allowed",
              fontWeight: "500",
            }}
          >
            Coming Soon
          </button>
        </div>
      ))}
    </div>
  );
};

export default Apps;
