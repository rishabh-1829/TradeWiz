import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "20px auto",
        fontFamily: "Inter, sans-serif",
        color: "#111827",
      }}
    >
      {/* Top Banner */}
      <div
        style={{
          background: "linear-gradient(to right, #2563eb, #3b82f6)",
          borderRadius: "12px",
          padding: "16px 20px",
          color: "white",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ margin: 0, fontWeight: 500, fontSize: "15px" }}>
          Instant, zero-cost fund transfers with UPI
        </p>
        <div>
          <Link
            className="btn"
            style={{
              background: "#10b981",
              color: "white",
              padding: "8px 14px",
              borderRadius: "8px",
              marginRight: "10px",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Add funds
          </Link>
          <Link
            className="btn"
            style={{
              background: "white",
              color: "#2563eb",
              padding: "8px 14px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500,
              border: "1px solid #e5e7eb",
            }}
          >
            Withdraw
          </Link>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
        }}
      >
        {/* Equity Card */}
        <div
          style={{
            background: "white",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            padding: "20px",
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "15px",
              color: "#1f2937",
            }}
          >
            Equity
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "14px",
              }}
            >
              <p>Available margin</p>
              <p style={{ fontWeight: 600, color: "#16a34a" }}>₹4,043.10</p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "14px",
              }}
            >
              <p>Used margin</p>
              <p style={{ fontWeight: 600 }}>₹3,757.30</p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "14px",
              }}
            >
              <p>Available cash</p>
              <p style={{ fontWeight: 600 }}>₹4,043.10</p>
            </div>

            <hr />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              <div>
                <p style={{ fontSize: "13px", color: "#6b7280" }}>
                  Opening Balance
                </p>
                <p style={{ fontWeight: 500 }}>₹4,043.10</p>
              </div>
              <div>
                <p style={{ fontSize: "13px", color: "#6b7280" }}>
                  Closing Balance
                </p>
                <p style={{ fontWeight: 500 }}>₹3,736.40</p>
              </div>
              <div>
                <p style={{ fontSize: "13px", color: "#6b7280" }}>Payin</p>
                <p style={{ fontWeight: 500 }}>₹4,064.00</p>
              </div>
              <div>
                <p style={{ fontSize: "13px", color: "#6b7280" }}>SPAN</p>
                <p style={{ fontWeight: 500 }}>₹0.00</p>
              </div>
              <div>
                <p style={{ fontSize: "13px", color: "#6b7280" }}>
                  Delivery margin
                </p>
                <p style={{ fontWeight: 500 }}>₹0.00</p>
              </div>
              <div>
                <p style={{ fontSize: "13px", color: "#6b7280" }}>Exposure</p>
                <p style={{ fontWeight: 500 }}>₹0.00</p>
              </div>
              <div>
                <p style={{ fontSize: "13px", color: "#6b7280" }}>
                  Options premium
                </p>
                <p style={{ fontWeight: 500 }}>₹0.00</p>
              </div>
            </div>

            <hr />

            <div>
              <p style={{ fontSize: "13px", color: "#6b7280" }}>
                Collateral (Liquid funds)
              </p>
              <p style={{ fontWeight: 500 }}>₹0.00</p>
            </div>
            <div>
              <p style={{ fontSize: "13px", color: "#6b7280" }}>
                Collateral (Equity)
              </p>
              <p style={{ fontWeight: 500 }}>₹0.00</p>
            </div>
            <div>
              <p style={{ fontSize: "13px", color: "#6b7280" }}>
                Total Collateral
              </p>
              <p style={{ fontWeight: 500 }}>₹0.00</p>
            </div>
          </div>
        </div>

        {/* Commodity Card */}
        <div
          style={{
            background: "white",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <p style={{ marginBottom: "12px", fontSize: "14px" }}>
            You don't have a commodity account
          </p>
          <Link
            style={{
              background: "#2563eb",
              color: "white",
              padding: "8px 14px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500,
              display: "inline-block",
            }}
          >
            Open Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Funds;
