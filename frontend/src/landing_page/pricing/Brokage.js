import React from 'react';

function Brokage() {
    return ( 
        <div className="container">
       <div className="row p-5 mt-5 text-center border-top">
          <div className="col-8 p-4">
            <a href='#' style={{textDecoration:"none"}}><h3>Brokerage calculator</h3></a>
            
                <ul style={{textAlign:"left"}}>
                    <li>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</li>
                    <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                    <li>MTF Brokerage: 0.03% or Rs. 20/executed order, whichever is lower.</li>
                    <li>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee</li>
                    <li>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</li>

                </ul>
          </div>
          <div className="col-4 p-4">
          <a href="#"style={{textDecoration:"none"}}><h3>List of charges</h3></a>
          </div>
          </div>
      </div>
     );
}

export default Brokage;