import "./Style/donate.css";
import React, { useState } from "react";


function Donate() {
  const [frequency, setFrequency] = useState("monthly");
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [showDeclaration, setShowDeclaration] = useState(false);

  const amounts = {
    monthly: ["800", "1200", "1800"],
    onetime: ["2000", "5000", "10000"],
  };
  return (
    <div className="donate-container">
      
       <div className="donate-form">
        <h2 className="title">Donate</h2>
        <div className="form-section">
          <h4>Choose the frequency of your donation</h4>
          {["monthly", "onetime"].map((f) => (
            <label key={f}>
              <input
                type="radio"
                name="frequency"
                value={f}
                checked={frequency === f}
                onChange={(e) => {
                  setFrequency(e.target.value);
                  setAmount("");
                  setCustomAmount("");
                }}
              />
              {f === "monthly" ? "Monthly" : "One Time"}
            </label>
          ))}
        </div>

        {/* Amounts */}
        <div className="form-section">
          <h4>Choose the amount of your donation</h4>
          <div className="amount-options">
            {amounts[frequency].map((amt) => (
              <label
                key={amt}
                className={`amount-box ${amount === amt ? "active" : ""}`}
              >
                <input
                  type="radio"
                  name="amount"
                  value={amt}
                  checked={amount === amt}
                  onChange={(e) => setAmount(e.target.value)}
                />
                ₹{amt}
              </label>
            ))}

            {/* Other option */}
            <label
              className={`amount-box other-box ${
                amount === "other" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                name="amount"
                value="other"
                checked={amount === "other"}
                onChange={() => setAmount("other")}
              />
              {amount === "other" ? (
                <input
                  type="number"
                  className="other-input"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  autoFocus
                />
              ) : (
                "Other"
              )}
            </label>
          </div>
        </div>

      <div className="form-section">
          <h4>Who is making this donation?</h4>
          <div className="input-row">
            <select>
              <option>Mr.</option>
              <option>Ms.</option>
              <option>Mrs.</option>
            </select>
            <input type="text" placeholder="First Name *" />
            <input type="text" placeholder="Last Name *" />
          </div>
          <div className="input-row">
            <input type="email" placeholder="Email ID *" />
            <input type="tel" placeholder="Mobile Number *" />
          </div>
          <input type="date" placeholder="Date of Birth *" />
        </div> 

           <div className="form-section">
          <h4>Unique Identification</h4>
          <div className="input-row">
            <select>
              <option>PAN Card</option>
              <option>Aadhar</option>
              <option >Driving license</option>
              <option >VoterID</option>
            </select>
            <input type="text" placeholder="Enter ID *" />
          </div>
          <textarea placeholder="Address *"></textarea>
        </div>

        <div className="form-section">
          <h4>Please Select Donation Mode</h4>
          <select>
            <option>E-Mandate</option>
            <option>UPI</option>
          </select>
          <div className="input-row">
            <input type="text" placeholder="Bank Name" />
            <input type="text" placeholder="IFSC Code" />
          </div>
          <div className="input-row">
            <select>
              <option>Savings</option>
            </select>
            <input type="text" placeholder="Account Number" />
          </div>
        </div>
        <div className="form-section checkbox">
          <input type="checkbox" /> I am an Indian Citizen and I have read &
          understood the <a onClick={() => setShowDeclaration(true)}> declaration.</a>
        </div>
        <button className="donate-btn">Proceed to Verify Details</button>
      </div>
      {showDeclaration && (
  <div className="floating-overlay">
    <div className="floating-declaration">
      <div className="declaration-header">
        <h2>Declaration & Guidelines</h2>
        <button className="close-btn" onClick={() => setShowDeclaration(false)}>✖</button>
      </div>
      <div className="declaration-body">
        <p>
          (Put your declaration text here — it can be long. This box is scrollable
          so the user can read everything.)
        </p>
        <p>
          Donations are accepted only from Indian citizens. Please ensure details
          provided are correct.
        </p>
      </div>
      <div className="declaration-footer">
        <button onClick={() => setShowDeclaration(false)}>I Agree</button>
      </div>
    </div>
  </div>
)}


      <div className="donate-info">
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/kffacxfA7G4"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>

        <div className="info-box">
          <h3>Contact Us</h3>
          <p>Email: support@example.org</p>
          <p>Call: 1800 425 4594</p>

          <h3>Tax Exemption Details</h3>
          <p>Your contribution has an exemption of 50% under section 80G of the IT Act 1961.</p>

          <h3>Terms & Conditions</h3>
          <p>Donations will be accepted only from Indian citizens.</p>
          <p>No donations from corporations or government entities.</p>
          <p>We accept only digital/cheque donations, never cash.</p>
        </div>
      </div>  
    </div>
  );
}

export default Donate; 
