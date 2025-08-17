import React from 'react';

function Footer() {
    return ( 
        <footer style={{backgroundColor:"rgb(250 250 250)"}}>
        <div className='container border-top mt-5'>
            <div className='row mt-5'>
                <div className='col'>
                    <img src="media/new.png" style={{width:"80%"}} alt="TradeWiz Logo" />
                    <p>
                    &copy;2010 - 2024, TradeWiz Broking Pvt. Ltd. All rights reserved.
                    </p>
                </div>
                <div className='col'> 
                    <p>Company</p>
                   <a href='#' style={{textDecoration:"none"}}>About</a><br />
                   <a href='#' style={{textDecoration:"none"}}>Products</a><br />
                   <a href='#' style={{textDecoration:"none"}}>Pricing</a><br />
                   <a href='#' style={{textDecoration:"none"}}>Referral programme</a><br />
                   <a href='#' style={{textDecoration:"none"}}>Careers</a><br />
                   <a href='#' style={{textDecoration:"none"}}>TradeWiz Tech</a><br />
                   <a href='#' style={{textDecoration:"none"}}>Press & Media</a><br />
                   <a href='#' style={{textDecoration:"none"}}>CSR</a><br />
                </div>
               
                <div className='col'>
                <p>Support</p>
                <a href='#' style={{textDecoration:"none"}}>Contact us</a><br />
                   <a href='#' style={{textDecoration:"none"}}>Support portal</a><br />
                   <a href='#' style={{textDecoration:"none"}}>Blog</a><br />
                   <a href='#' style={{textDecoration:"none"}}>List of charges</a><br />
                   <a href='#' style={{textDecoration:"none"}}>Downloads & resources</a><br />
                   <a href='#' style={{textDecoration:"none"}}>Videos</a><br />
                   <a href='#' style={{textDecoration:"none"}}>Market overview</a><br />
                   <a href='#' style={{textDecoration:"none"}}>How to file a complaint?</a><br />
                   <a href='#' style={{textDecoration:"none"}}>Status of your complaints</a><br />
                </div>

                <div className='col'>
                <p>Account</p>
                <a href='#' style={{textDecoration:"none"}}>Open an Account</a><br />
                   <a href='#' style={{textDecoration:"none"}}>Fund transfer</a><br />
                </div>
            </div>

        <div className='mt-5 text-muted' style={{fontSize:"14px"}}  >
            <p>
            TradeWiz Broking Pvt. Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ0000XXXX 
            CDSL/NSDL: Depository services through TradeWiz Broking Pvt. Ltd. – SEBI Registration no.: IN-DP-XXX-20XX 
            Commodity Trading through TradeWiz Commodities Pvt. Ltd. MCX: XXXXX; NSE: XXXXX – SEBI Registration no.: INZ0000XXXX 
            Registered Address: TradeWiz Broking Pvt. Ltd., [Your Address], [City] - [PIN], [State], India. 
            For any complaints pertaining to securities broking please write to complaints@tradewiz.com, 
            for DP related to dp@tradewiz.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
            </p>

            <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: 
            Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances. 
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </p>

            <p>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
            </p>

            <p>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system 
            w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP 
            directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the 
            consolidated account statement issued by NSDL/CDSL every month.
            </p>

            <p>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive 
            information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest 
            of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered 
            intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." 
            Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and 
            sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds 
            will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf 
            of others. If you find anyone claiming to be part of TradeWiz and offering such services, please report it to us immediately.
            </p>
        </div>
        </div>
        </footer>
     );
}

export default Footer;
