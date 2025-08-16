import React from 'react';


function Universe() {
    return ( 
        <div className="container mt-5">
        <div className="row text-center">
            <h1><b>The Zerodha Universe</b></h1>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
            <div className="col-4 p-3 mt-5">
            <img src="media/zerodhaFundHouse.png" style={{width:"50%"}}></img>
            <p className='text-muted mt-4'>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
</p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/sensibullLogo.svg" style={{width:"50%"}}></img>
            <p className='text-muted mt-4'>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.

</p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/streakLogo.png" style={{width:"50%"}}></img>
            <p className='text-muted'>Systematic trading platform
that allows you to create and backtest
strategies without coding.
</p>    
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/smallcaseLogo.png"></img>
            <p className='text-muted'>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
</p>    
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/dittoLogo.png" style={{width:"50%"}}></img>
            <p className='text-muted'>Personalized advice on life
and health insurance. No spam
and no mis-selling.
</p>    
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/smallcaseLogo.png"></img>
            <p className='text-muted'>Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.
</p>    
          </div>
          <button className="p-2 btn btn-primary fs-5 mb-5" style={{width: "20%", margin: "0px auto"}}>Signup for free</button>
        </div>
        </div>
     );
}

export default Universe;