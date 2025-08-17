import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    const API_URL =
      process.env.REACT_APP_API_URL || "https://tradewiz-1.onrender.com";

    axios
      .get(`${API_URL}/allHoldings`)
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
      });
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  // Inline styles
  const styles = {
    container: {
      maxWidth: "1100px",
      margin: "30px auto",
      padding: "20px",
      background: "#f9fafc",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
    title: {
      fontSize: "22px",
      fontWeight: "600",
      marginBottom: "20px",
      color: "#333",
      textAlign: "center",
    },
    tableWrapper: {
      overflowX: "auto",
      marginBottom: "30px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      background: "#fff",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    },
    th: {
      padding: "12px 15px",
      background: "#2c7be5",
      color: "white",
      textAlign: "left",
      fontSize: "14px",
    },
    td: {
      padding: "12px 15px",
      fontSize: "14px",
      borderBottom: "1px solid #eee",
    },
    profit: { color: "green", fontWeight: "600" },
    loss: { color: "red", fontWeight: "600" },
    row: {
      display: "flex",
      justifyContent: "space-around",
      margin: "20px 0",
      textAlign: "center",
    },
    col: {
      background: "#fff",
      padding: "15px",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      flex: 1,
      margin: "0 10px",
    },
    colH5: {
      fontSize: "18px",
      marginBottom: "5px",
      color: "#2c7be5",
      fontWeight: "600",
    },
    colP: {
      fontSize: "13px",
      color: "#666",
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>📊 Holdings ({allHoldings.length})</h3>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Instrument</th>
              <th style={styles.th}>Qty.</th>
              <th style={styles.th}>Avg. cost</th>
              <th style={styles.th}>LTP</th>
              <th style={styles.th}>Cur. val</th>
              <th style={styles.th}>P&L</th>
              <th style={styles.th}>Net chg.</th>
              <th style={styles.th}>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;

              return (
                <tr key={index}>
                  <td style={styles.td}>{stock.name}</td>
                  <td style={styles.td}>{stock.qty}</td>
                  <td style={styles.td}>{stock.avg.toFixed(2)}</td>
                  <td style={styles.td}>{stock.price.toFixed(2)}</td>
                  <td style={styles.td}>{curValue.toFixed(2)}</td>
                  <td style={{ ...styles.td, ...(isProfit ? styles.profit : styles.loss) }}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td style={{ ...styles.td, ...(isProfit ? styles.profit : styles.loss) }}>
                    {stock.net}
                  </td>
                  <td
                    style={{
                      ...styles.td,
                      ...(stock.isLoss ? styles.loss : styles.profit),
                    }}
                  >
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary row */}
      <div style={styles.row}>
        <div style={styles.col}>
          <h5 style={styles.colH5}>
            29,875.<span>55</span>
          </h5>
          <p style={styles.colP}>Total investment</p>
        </div>
        <div style={styles.col}>
          <h5 style={styles.colH5}>
            31,428.<span>95</span>
          </h5>
          <p style={styles.colP}>Current value</p>
        </div>
        <div style={styles.col}>
          <h5 style={styles.colH5}>1,553.40 (+5.20%)</h5>
          <p style={styles.colP}>P&L</p>
        </div>
      </div>

      {/* Graph Section */}
      <VerticalGraph data={data} />
    </div>
  );
};

export default Holdings;
