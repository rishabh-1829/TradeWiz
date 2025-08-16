import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-2'>
            <div className='row'>
                <div className='col-6 p-5 '>
                    <img src="media/largestBroker.svg"></img>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1> Largest Stock broker in India</h1>
                    <p className='mb-5'>2+ million TradeWiz clients contribute to over 15% of all retails order
                        volumes in India daily by trading and investing in:
                    </p>
                    <ul>
                    <div className='row'>
                        <div className='col-6'>
                        <li><p>Futures an Options</p></li>
                        <li><p>Commodity derivatives</p></li>
                        <li><p>Currency derivatives</p></li>
                        </div>
                        <div className='col-6'>
                        <li><p>Stock & IPOs</p></li>
                        <li><p>Direct mutual funds</p></li>
                        <li><p>Bonds and Gov securities</p></li>
                        </div>
                        </div>
                        
                    </ul>
                    <img src='media/pressLogos.png' style={{width:"85%"}}></img>
                </div>
            </div>
        </div>

    );
}

export default Awards;