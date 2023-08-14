import React from "react";
import "./Pricing.css";


const Pricing = () => {
  return (
    <>
      <div className="Pricingpagemain">
        <h1 className="pp1">Plans & Pricing</h1>
        <p className="ppara">
          We’re working on a suit of tools to make managing complex systems
          <br />
          easier, for everyone. We can’t wait to hear what you think
        </p>
        <div className="card1">
          <h2 className="card1h">Standard</h2>
          <p className="card1p">Hit the Ground Running</p>
          <h1 className="card1h2">
            $29.95/<span className="card1span">month</span>
          </h1>
          <p className="listpara">✓ Unlimited boards</p>
          <p className="listpara">✓ Free SENDER ID</p>
          <p className="listpara">✓ IP address login</p>
          <p className="listpara">✓ Buy SMS credits for $0.1 / credit</p>
          <p className="listpara">✓ GST included in pricing</p>
          <p className="listpara">✓ Credits do not expire</p>
          <button className="cardbtn">Get Started</button>
        </div>

        <div className="card2">
          <h2 className="card1h">Pro</h2>
          <p className="card1p">Power up your business</p>
          <h1 className="card1h2">
            $39.95/<span className="card1span">month</span>
          </h1>
          <p className="listpara">✓Everything in Standard</p>
          <p className="listpara">✓ Two way messaging</p>
          <p className="listpara">✓ One chatbot</p>
          <button className="cardbtn1">Coming Soon</button>
        </div>

        <div className="card3">
          <h2 className="card1h">Pro Plus</h2>
          <p className="card1p">Customized just for you</p>
          <h1 className="card1h2">
            $89.95/<span className="card1span">month</span>
          </h1>
          <p className="listpara">✓ Everything in Pro</p>
          <p className="listpara">✓ Print address labels locally</p>
          <p className="listpara">✓ Integration with Australia Post</p>
          <button className="cardbtn1">Coming Soon</button>
        </div>
      </div>

      <div className="Pricingpagemain2">
        <h2 className="sclogo">Note:</h2>
        <p className="scl1">1. Pricing is subject to change.</p>
        <p className="scl2">
        2.  Transactions are processed in Australian Dollars (AUD). Transactions
          are processed in Australian Dollars (AUD).
        </p>
        <p className="scl3">
        3.  We use Stripe to process your payment. It's the same payment provider
          used by products such as Twitter, Pinterest, and Lyft. We do not
          handle your credit card information directly.
        </p>
      </div>

     

      <div className="main8">
        <h2 className="logo1">
          Concert<span className="rx">Rx</span>
        </h2>
        <div className="headingmain">
          <h3 className="footheading">Products</h3>
          <h3 className="footheading">Use Cases</h3>
          <h3 className="footheading">Company</h3>
          <h3 className="footheading">Support</h3>
          <h3 className="footheading">Contact Us</h3>
          <p className="fheading1">Login</p>
          <p className="fheading1">Pricing</p>
          <p className="fheading1">.....</p>
          <p className="fheading1">...</p>

          <p className="fheading2 head">Ozempic Waiting List</p>
          <p className="fheading2">Compounding Workflow</p>
          <p className="fheading2">Vaccination Journey </p>
          <p className="fheading2">Special Orders</p>
          <p className="fheading2">Drug Journeys</p>

          <p className="fheading3 head1">About Us</p>
          <p className="fheading3 ">Careers</p>
          <p className="fheading3 ">FAQs</p>

          <p className="fheading4 head2 ">
            <span className="sheading"> Australia:</span> 0482 097 007
          </p>
          <p className="fheading4  ">United Kingdom:0832267</p>

          <p className="fheading5  head3 ">
            Level 29/66-84 Goulburn St
            <br /> Sydney NSW 2000
          </p>
          <p className="fheading5  ">faislatalha1103@gmail.com</p>
        </div>

        <p className="terms">Terms and Conndition Apply</p>
        <p className="Powered">Powered by</p>
        <h2 className="Giga">GiGaRx</h2>
        <p className="cap">Capital</p>
      </div>

      {/* the last one */}

      <div className="main9">
        <p className="last1">Want to receive product updates? </p>
        <p className="last2">
          To opt-in to our text message update service.
          <br /> Text YES to +61482 097 007 OR Scan the QR code.
          <br />
          You can send STOP to unsubscribe anytime.
        </p>
        <img className="img5" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/QR-code-obituary.svg/220px-QR-code-obituary.svg.png"></img>
        
        <p className="lastpara">Copyright © 2022 GigaRx Capital Pty Ltd and/or its subsidiaries or affiliates. All Rights Reserved. ConcertRx, ScriptCards, ShrinkMan, StoreOps and<br/> certain product names used herein are trademarks or registered trademarks of GigaRx Capital Pty Ltd and/or one of its subsidiaries or affiliates in<br/> Australia and/or other countries. Any other trademarks contained here in are the property of their respective owners.</p>
      </div>

    </>
  );
};

export default Pricing;
