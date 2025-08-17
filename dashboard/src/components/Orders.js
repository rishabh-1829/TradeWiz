import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

  // ✅ Fetch orders
  const fetchOrders = () => {
    axios
      .get(`${API_URL}/AllOrders`)
      .then((res) => setAllOrders(res.data))
      .catch((err) => console.error("Error fetching orders:", err));
  };

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "10px auto", // ⬅️ reduced from 40px
        padding: "10px", // ⬅️ compact padding
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "left",
          marginBottom: "15px", // ⬅️ tighter gap below heading
          fontSize: "22px",
          fontWeight: "700",
          color: "#1f2937",
          letterSpacing: "-0.3px",
        }}
      >
        Live Orders
      </h2>

      {allOrders.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            fontSize: "14px",
            background: "#f9fafb",
            padding: "15px", // ⬅️ less padding
            borderRadius: "8px",
          }}
        >
          No orders found.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px", // ⬅️ reduced spacing between cards
          }}
        >
          {allOrders.map((order) => (
            <div
              key={order._id}
              style={{
                background: "white",
                padding: "14px", // ⬅️ smaller padding inside card
                borderRadius: "10px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 8px rgba(0,0,0,0.05)";
              }}
            >
              {/* Header Section */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px", // ⬅️ tighter
                }}
              >
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    color: "#111827",
                  }}
                >
                  {order.name}
                </span>
                <span
                  style={{
                    padding: "2px 8px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: "500",
                    backgroundColor:
                      order.mode.toLowerCase() === "buy"
                        ? "rgba(16,185,129,0.1)"
                        : "rgba(239,68,68,0.1)",
                    color:
                      order.mode.toLowerCase() === "buy"
                        ? "#059669"
                        : "#dc2626",
                  }}
                >
                  {order.mode}
                </span>
              </div>

              {/* Details */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "13px",
                  color: "#374151",
                }}
              >
                <span>
                  Qty:{" "}
                  <b style={{ fontWeight: "600", color: "#111827" }}>
                    {order.qty}
                  </b>
                </span>
                <span>
                  Price:{" "}
                  <b style={{ fontWeight: "600", color: "#2563eb" }}>
                    ₹{order.price}
                  </b>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
