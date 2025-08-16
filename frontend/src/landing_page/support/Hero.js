import React from 'react';

function Hero(){
    return(
        <section className='container-fluid 'id='containerstyle'>
        <div className=' p-3'id='supportwraper'>
            <h1 style={{color:"white"}}>Support portal</h1>
            <a href='#'>Track ticket</a>
        </div>

        <div className='row p-5 mb-5 mt-5 '>
        <div className='col-6  ps-5'>
            <h1 className='fs-3' style={{color:"white"}}>Search for an answer or browse help topics to create a ticket</h1>
            <input placeholder='Eg. how can i activate F&O...'></input>
        <br></br>
            <a href='#'> Track account opening </a>                                                                     
            <a href='#'> Track segment activation </a>
            <a href='#'> Intraday margins Kite </a>
            <a href='#'> user manual </a>
        </div>
        <div className='col-6 ps-5'>
            <h1 className='fs-3'style={{color:"white"}}>Featured</h1>
            <ol style={{color:"white"}}>
            <li><a href='#'>Rights Entitlements listing in January 2025</a></li>
            <li><a href='#'>Surveillance measure on scrips - January 2025</a> </li>
            </ol>
        </div>
        </div>
        </section>
    );
}

export default Hero;

