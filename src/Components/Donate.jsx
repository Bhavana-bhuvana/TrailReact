import "./Style/donate.css";
import React, { useState } from "react";


// // function Donate() {
// //   const [frequency, setFrequency] = useState("monthly");
// //   const [amount, setAmount] = useState("");
// //   const [customAmount, setCustomAmount] = useState("");
// //   const [showDeclaration, setShowDeclaration] = useState(false);
// //   const amounts = {
// //     monthly: ["800", "1200", "1800"],
// //     onetime: ["2000", "5000", "10000"],
// //   };
  

// //   const onSubmit = (data) => {
// //     console.log("Donation Data:", data);
// //   };
// //   return (
// //     <div className="donate-container">
      
// //        <div className="donate-form">
// //         <h2 className="title">Donate</h2>
// //         <div className="form-section">
// //           <h4>Choose the frequency of your donation</h4>
// //           {["monthly", "onetime"].map((f) => (
// //             <label key={f}>
// //               <input
// //                 type="radio"
// //                 name="frequency"
// //                 value={f}
// //                 checked={frequency === f}
// //                 onChange={(e) => {
// //                   setFrequency(e.target.value);
// //                   setAmount("");
// //                   setCustomAmount("");
// //                 }}
// //               />
// //               {f === "monthly" ? "Monthly" : "One Time"}
// //             </label>
// //           ))}
// //         </div>

// //         {/* Amounts */}
//         // <div className="form-section">
//         //   <h4>Choose the amount of your donation</h4>
//         //   <div className="amount-options">
//         //     {amounts[frequency].map((amt) => (
//         //       <label
//         //         key={amt}
//         //         className={`amount-box ${amount === amt ? "active" : ""}`}
//         //       >
//         //         <input
//         //           type="radio"
//         //           name="amount"
//         //           value={amt}
//         //           checked={amount === amt}
//         //           onChange={(e) => setAmount(e.target.value)}
//         //         />
//         //         ₹{amt}
//         //       </label>
//         //     ))}

//         //     {/* Other option */}
//         //     <label
//         //       className={`amount-box other-box ${
//         //         amount === "other" ? "active" : ""
//         //       }`}
//         //     >
//         //       <input
//         //         type="radio"
//         //         name="amount"
//         //         value="other"
//         //         checked={amount === "other"}
//         //         onChange={() => setAmount("other")}
//         //       />
//         //       {amount === "other" ? (
//         //         <input
//         //           type="number"
//         //           className="other-input"
//         //           placeholder="Enter amount"
//         //           value={customAmount}
//         //           onChange={(e) => setCustomAmount(e.target.value)}
//         //           autoFocus
//         //         />
//         //       ) : (
//         //         "Other"
//         //       )}
//         //     </label>
//         //   </div>
//         // </div>

// //       <div className="form-section">
// //           <h4>Who is making this donation?</h4>
// //           <div className="input-row">
// //             <select>
// //               <option>Mr.</option>
// //               <option>Ms.</option>
// //               <option>Mrs.</option>
// //             </select>
// //             <input type="text" placeholder="First Name *" />
// //             <input type="text" placeholder="Last Name *" />
// //           </div>
// //           <div className="input-row">
// //             <input type="email" placeholder="Email ID *" />
// //             <input type="tel" placeholder="Mobile Number *" />
// //           </div>
// //           <input type="date" placeholder="Date of Birth *" />
// //         </div> 

// //            <div className="form-section">
// //           <h4>Unique Identification</h4>
// //           <div className="input-row">
// //             <select>
// //               <option>PAN Card</option>
// //               <option>Aadhar</option>
// //               <option >Driving license</option>
// //               <option >VoterID</option>
// //             </select>
// //             <input type="text" placeholder="Enter ID *" />
// //           </div>
// //           <textarea placeholder="Address *"></textarea>
// //         </div>

// //         <div className="form-section">
// //           <h4>Please Select Donation Mode</h4>
// //           <select>
// //             <option>E-Mandate</option>
// //             <option>UPI</option>
// //           </select>
// //           <div className="input-row">
// //             <input type="text" placeholder="Bank Name" />
// //             <input type="text" placeholder="IFSC Code" />
// //           </div>
// //           <div className="input-row">
// //             <select>
// //               <option>Savings</option>
// //             </select>
// //             <input type="text" placeholder="Account Number" />
// //           </div>
// //         </div>
// //         <div className="form-section checkbox">
// //           <input type="checkbox" /> I am an Indian Citizen and I have read &
// //           understood the <a onClick={() => setShowDeclaration(true)}> declaration.</a>
// //         </div>
// //         <button className="donate-btn">Proceed to Verify Details</button>
// //       </div>
// //       {showDeclaration && (
// //   <div className="floating-overlay">
// //     <div className="floating-declaration">
// //       <div className="declaration-header">
// //         <h2>Declaration & Guidelines</h2>
// //         <button className="close-btn" onClick={() => setShowDeclaration(false)}>✖</button>
// //       </div>
// //       <div className="declaration-body">
// //         <p>
// //           (Put your declaration text here — it can be long. This box is scrollable
// //           so the user can read everything.)
// //         </p>
// //         <p>
// //           Donations are accepted only from Indian citizens. Please ensure details
// //           provided are correct.
// //         </p>
// //       </div>
// //       <div className="declaration-footer">
// //         <button onClick={() => setShowDeclaration(false)}>I Agree</button>
// //       </div>
// //     </div>
// //   </div>
// // )}


// //       <div className="donate-info">
// //         <iframe
// //           width="100%"
// //           height="200"
// //           src="https://www.youtube.com/embed/kffacxfA7G4"
// //           title="YouTube video"
// //           frameBorder="0"
// //           allow="autoplay; encrypted-media"
// //           allowFullScreen
// //         ></iframe>

// //         <div className="info-box">
// //           <h3>Contact Us</h3>
// //           <p>Email: support@example.org</p>
// //           <p>Call: 1800 425 4594</p>

// //           <h3>Tax Exemption Details</h3>
// //           <p>Your contribution has an exemption of 50% under section 80G of the IT Act 1961.</p>

// //           <h3>Terms & Conditions</h3>
// //           <p>Donations will be accepted only from Indian citizens.</p>
// //           <p>No donations from corporations or government entities.</p>
// //           <p>We accept only digital/cheque donations, never cash.</p>
// //         </div>
// //       </div>  
// //     </div>
// //   );
// // }

// // export default Donate; 
// // ----------------------------------------------------------------------------------------------------------------------



// // import { useForm } from "react-hook-form";
// // import { yupResolver } from "@hookform/resolvers/yup";
// // import * as yup from "yup";

// // // ✅ Validation Schema
// // const schema = yup.object().shape({
// //   firstName: yup.string().required("First name is required").min(2, "Too short"),
// //   lastName: yup.string().required("Last name is required"),
// //   email: yup.string().email("Invalid email").required("Email is required"),
// //   mobile: yup.string().matches(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile"),
// //   dob: yup.string().required("Date of Birth is required"),
// //   uniqueId: yup.string().required("Unique ID is required"),
// //   address: yup.string().required("Address is required"),
// //   bankName: yup.string().required("Bank name is required"),
// //   ifsc: yup.string().matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC"),
// //   accountNumber: yup.string().required("Account number is required"),
// // });

// // function Donate() {
// //   const [frequency, setFrequency] = useState("monthly");
// //   const [amount, setAmount] = useState("");
// //   const [customAmount, setCustomAmount] = useState("");
// //   const [showDeclaration, setShowDeclaration] = useState(false);

// //   // ✅ OTP states
// //   const [otpSent, setOtpSent] = useState(false);
// //   const [otpVerified, setOtpVerified] = useState(false);
// //   const [otp, setOtp] = useState("");

// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //     getValues,
// //   } = useForm({
// //     resolver: yupResolver(schema),
// //     mode: "onChange", // real-time validation
// //   });

// //   // ✅ Dummy backend endpoints (replace with real API)
// //   const sendOtp = async () => {
// //     const email = getValues("email");
// //     if (!email) return alert("Enter email first");
// //     // Call backend API here
// //     console.log("Sending OTP to:", email);
// //     setOtpSent(true);
// //   };

// //   const verifyOtp = async () => {
// //     // Call backend verify API
// //     console.log("Verifying OTP:", otp);
// //     if (otp === "123456") {
// //       setOtpVerified(true);
// //       alert("Email verified successfully ✅");
// //     } else {
// //       alert("Invalid OTP ❌");
// //     }
// //   };

// //   const onSubmit = (data) => {
// //     if (!otpVerified) {
// //       alert("Please verify your email with OTP before proceeding");
// //       return;
// //     }
// //     console.log("Donation Data:", { ...data, frequency, amount, customAmount });
// //   };

// //   const amounts = {
// //     monthly: ["800", "1200", "1800"],
// //     onetime: ["2000", "5000", "10000"],
// //   };

// //   return (
// //     <div className="donate-container flex flex-col lg:flex-row gap-6 p-6 lg:p-10 bg-gray-100">
// //       <form
// //         onSubmit={handleSubmit(onSubmit)}
// //         className="donate-form flex-1 bg-white p-6 rounded-xl shadow-md"
// //       >
// //         <h2 className="text-purple-700 font-semibold mb-5 text-2xl">Donate</h2>

// //         {/* Frequency */}
// //         <div className="form-section mb-5">
// //           <h4>Choose the frequency of your donation</h4>
// //           {["monthly", "onetime"].map((f) => (
// //             <label key={f} className="mr-4">
// //               <input
// //                 type="radio"
// //                 value={f}
// //                 checked={frequency === f}
// //                 onChange={(e) => {
// //                   setFrequency(e.target.value);
// //                   setAmount("");
// //                   setCustomAmount("");
// //                 }}
// //               />
// //               {f === "monthly" ? " Monthly" : " One Time"}
// //             </label>
// //           ))}
// //         </div>

// //         {/* Amounts */}
// //         <div className="form-section mb-5">
// //           <h4>Choose the amount of your donation</h4>
// //           <div className="flex gap-3">
// //             {amounts[frequency].map((amt) => (
// //               <label
// //                 key={amt}
// //                 className={`px-4 py-2 border rounded cursor-pointer ${
// //                   amount === amt ? "bg-purple-200 border-purple-500" : ""
// //                 }`}
// //               >
// //                 <input
// //                   type="radio"
// //                   value={amt}
// //                   checked={amount === amt}
// //                   onChange={(e) => setAmount(e.target.value)}
// //                   className="hidden"
// //                 />
// //                 ₹{amt}
// //               </label>
// //             ))}

// //             {/* Other */}
// //             <label
// //               className={`px-4 py-2 border rounded cursor-pointer ${
// //                 amount === "other" ? "bg-purple-200 border-purple-500" : ""
// //               }`}
// //             >
// //               <input
// //                 type="radio"
// //                 value="other"
// //                 checked={amount === "other"}
// //                 onChange={() => setAmount("other")}
// //                 className="hidden"
// //               />
// //               {amount === "other" ? (
// //                 <input
// //                   type="number"
// //                   placeholder="Enter amount"
// //                   value={customAmount}
// //                   onChange={(e) => setCustomAmount(e.target.value)}
// //                   className="border rounded px-2"
// //                 />
// //               ) : (
// //                 "Other"
// //               )}
// //             </label>
// //           </div>
// //         </div>

// //         {/* Donor Info */}
// //         <div className="form-section mb-5">
// //           <h4>Who is making this donation?</h4>
// //           <div className="flex gap-2">
// //             <select className="border rounded px-2">
// //               <option>Mr.</option>
// //               <option>Ms.</option>
// //               <option>Mrs.</option>
// //             </select>
// //             <input
// //               type="text"
// //               placeholder="First Name *"
// //               {...register("firstName")}
// //               className="border rounded px-2 flex-1"
// //             />
// //             {errors.firstName && (
// //               <p className="text-red-500 text-sm">{errors.firstName.message}</p>
// //             )}
// //             <input
// //               type="text"
// //               placeholder="Last Name *"
// //               {...register("lastName")}
// //               className="border rounded px-2 flex-1"
// //             />
// //           </div>
// //           {errors.lastName && (
// //             <p className="text-red-500 text-sm">{errors.lastName.message}</p>
// //           )}

// //           <div className="flex gap-2 mt-3">
// //             <input
// //               type="email"
// //               placeholder="Email ID *"
// //               {...register("email")}
// //               disabled={otpVerified}
// //               className="border rounded px-2 flex-1"
// //             />
// //             {!otpVerified && !otpSent && (
// //               <button
// //                 type="button"
// //                 onClick={sendOtp}
// //                 className="px-3 py-1 bg-purple-500 text-white rounded"
// //               >
// //                 Send OTP
// //               </button>
// //             )}
// //           </div>
// //           {errors.email && (
// //             <p className="text-red-500 text-sm">{errors.email.message}</p>
// //           )}

// //           {/* OTP Input */}
// //           {otpSent && !otpVerified && (
// //             <div className="flex gap-2 mt-2">
// //               <input
// //                 type="text"
// //                 placeholder="Enter OTP"
// //                 value={otp}
// //                 onChange={(e) => setOtp(e.target.value)}
// //                 className="border rounded px-2 flex-1"
// //               />
// //               <button
// //                 type="button"
// //                 onClick={verifyOtp}
// //                 className="px-3 py-1 bg-green-500 text-white rounded"
// //               >
// //                 Verify
// //               </button>
// //             </div>
// //           )}

// //           {otpVerified && (
// //             <p className="text-green-600 mt-1">✅ Email Verified</p>
// //           )}

// //           <div className="flex gap-2 mt-3">
// //             <input
// //               type="tel"
// //               placeholder="Mobile Number *"
// //               {...register("mobile")}
// //               className="border rounded px-2 flex-1"
// //             />
// //           </div>
// //           {errors.mobile && (
// //             <p className="text-red-500 text-sm">{errors.mobile.message}</p>
// //           )}

// //           <input
// //             type="date"
// //             {...register("dob")}
// //             className="border rounded px-2 mt-3"
// //           />
// //           {errors.dob && (
// //             <p className="text-red-500 text-sm">{errors.dob.message}</p>
// //           )}
// //         </div>

// //         {/* Unique ID */}
// //         <div className="form-section mb-5">
// //           <h4>Unique Identification</h4>
// //           <div className="flex gap-2">
// //             <select className="border rounded px-2">
// //               <option>PAN Card</option>
// //               <option>Aadhar</option>
// //               <option>Driving license</option>
// //               <option>VoterID</option>
// //             </select>
// //             <input
// //               type="text"
// //               placeholder="Enter ID *"
// //               {...register("uniqueId")}
// //               className="border rounded px-2 flex-1"
// //             />
// //           </div>
// //           {errors.uniqueId && (
// //             <p className="text-red-500 text-sm">{errors.uniqueId.message}</p>
// //           )}
// //           <textarea
// //             placeholder="Address *"
// //             {...register("address")}
// //             className="border rounded px-2 w-full mt-3"
// //           ></textarea>
// //           {errors.address && (
// //             <p className="text-red-500 text-sm">{errors.address.message}</p>
// //           )}
// //         </div>

// //         {/* Payment Mode */}
// //         <div className="form-section mb-5">
// //           <h4>Please Select Donation Mode</h4>
// //           <select className="border rounded px-2 mb-2 w-full">
// //             <option>E-Mandate</option>
// //             <option>UPI</option>
// //           </select>
// //           <div className="flex gap-2">
// //             <input
// //               type="text"
// //               placeholder="Bank Name"
// //               {...register("bankName")}
// //               className="border rounded px-2 flex-1"
// //             />
// //             <input
// //               type="text"
// //               placeholder="IFSC Code"
// //               {...register("ifsc")}
// //               className="border rounded px-2 flex-1"
// //             />
// //           </div>
// //           {errors.bankName && (
// //             <p className="text-red-500 text-sm">{errors.bankName.message}</p>
// //           )}
// //           {errors.ifsc && (
// //             <p className="text-red-500 text-sm">{errors.ifsc.message}</p>
// //           )}

// //           <div className="flex gap-2 mt-2">
// //             <select className="border rounded px-2">
// //               <option>Savings</option>
// //             </select>
// //             <input
// //               type="text"
// //               placeholder="Account Number"
// //               {...register("accountNumber")}
// //               className="border rounded px-2 flex-1"
// //             />
// //           </div>
// //           {errors.accountNumber && (
// //             <p className="text-red-500 text-sm">{errors.accountNumber.message}</p>
// //           )}
// //         </div>

// //         {/* Declaration */}
// //         <div className="form-section mb-5 flex items-center">
// //           <input type="checkbox" className="mr-2" /> I am an Indian Citizen and I
// //           have read & understood the{" "}
// //           <a
// //             onClick={() => setShowDeclaration(true)}
// //             className="text-purple-600 cursor-pointer"
// //           >
// //             declaration
// //           </a>
// //           .
// //         </div>

// //         <button
// //           type="submit"
// //           className="donate-btn px-4 py-2 bg-purple-600 text-white rounded"
// //         >
// //           Proceed to Verify Details
// //         </button>
// //       </form>

// //       {/* Declaration Popup */}
// //       {showDeclaration && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
// //           <div className="bg-white w-1/2 p-6 rounded-xl shadow-lg">
// //             <div className="flex justify-between items-center">
// //               <h2 className="text-xl font-bold">Declaration & Guidelines</h2>
// //               <button onClick={() => setShowDeclaration(false)}>✖</button>
// //             </div>
// //             <div className="mt-4 max-h-60 overflow-y-auto">
// //               <p>
// //                 Donations are accepted only from Indian citizens. Please ensure
// //                 details provided are correct.
// //               </p>
// //             </div>
// //             <div className="mt-4 flex justify-end">
// //               <button
// //                 onClick={() => setShowDeclaration(false)}
// //                 className="px-3 py-1 bg-purple-600 text-white rounded"
// //               >
// //                 I Agree
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Donate;
// // -----------------------------------------------------------------------------------------------------------------------------
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { donationSchema } from "./Validations/donateVal"; 
import axios from "axios";

const API_BASE = "http://localhost:8080/api";
function Donate() {
  const [frequency, setFrequency] = useState("monthly");
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [showDeclaration, setShowDeclaration] = useState(false);

  // OTP states
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otp, setOtp] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(donationSchema),
    mode: "onChange",
  });

  const sendOtp = async () => {
    const email = getValues("email");
    if (!email) return alert("Enter email first");

    try {
      await axios.post(`${API_BASE}/otp/request?email=${encodeURIComponent(email)}`);
      alert("OTP sent to your email ✅");
      setOtpSent(true);
    } catch (err) {
      console.error(err);
      alert("Failed to send OTP ❌");
    }
  };

  const verifyOtp = async () => {
   const email = getValues("email");
    if (!email || !otp) return alert("Enter OTP");

    try {
      await axios.post(
        `${API_BASE}/otp/verify?email=${encodeURIComponent(email)}&otp=${encodeURIComponent(otp)}`
      );
      setOtpVerified(true);
      alert("Email verified successfully ✅");
    } catch (err) {
      console.error(err);
      alert("Invalid OTP ❌");
    }
  };

  const onSubmit = async(data) => {
    if (!otpVerified) {
      alert("Please verify your email with OTP before proceeding");
      return;
    }
    const donationData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      mobile: data.mobile,
      dob: data.dob,
      idType: data.idType,
      uniqueId: data.uniqueId,
      address: data.address,
      frequency: frequency,
      amount: amount === "other" ? customAmount : amount,
      paymentMode: data.paymentMode,
      bankName: data.bankName,
      ifsc: data.ifsc,
      accountNumber: data.accountNumber,
    };
    try {
      await axios.post(`${API_BASE}/donors/save`, donationData);
      alert("Donation details saved successfully 🎉");
    } catch (err) {
      console.error(err);
      alert("Failed to save donation ❌");
    }
    
  };

  const amounts = {
    monthly: ["800", "1200", "1800"],
    onetime: ["2000", "5000", "10000"],
  };

  return (
    <div className="donate-container flex flex-col lg:flex-row gap-6 p-6 lg:p-10 bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="donate-form flex-1 bg-white p-6 rounded-xl shadow-md"
      >
        <h2 className="title">Donate</h2>

        {/* Frequency */}
        <div className="form-section">
          <h4>Choose the frequency of your donation</h4>
          {["monthly", "onetime"].map((f) => (
            <label key={f} className="mr-4">
              <input
                type="radio"
                value={f}
                checked={frequency === f}
                onChange={(e) => {
                  setFrequency(e.target.value);
                  setAmount("");
                  setCustomAmount("");
                }}
              />
              {f === "monthly" ? " Monthly" : " One Time"}
            </label>
          ))}
        </div>
        {/* amount */}
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
    

        {/* Donor Info */}
        <div className="form-section">
          <h4>Who is making this donation?</h4>
          <div className="input-row">
            <select className="border rounded px-2">
              <option>Mr.</option>
              <option>Ms.</option>
              <option>Mrs.</option>
            </select>
            <input
              type="text"
              placeholder="First Name *"
              {...register("firstName")}
              className="border rounded px-2 flex-1"
            />
            <input
              type="text"
              placeholder="Last Name *"
              {...register("lastName")}
              className="border rounded px-2 flex-1"
            />
          </div>
          {errors.firstName && (
            <p className="error">{errors.firstName.message}</p>
          )}
          {errors.lastName && (
            <p className="error">{errors.lastName.message}</p>
          )}

          {/* Email + OTP */}
          <div className="input-row mt-3">
            <input
              type="email"
              placeholder="Email ID *"
              {...register("email")}
              disabled={otpVerified}
              className="border rounded px-2 flex-1"
            />
            {!otpVerified && !otpSent && (
              <button
                type="button"
                onClick={sendOtp}
                className="otp-btn bg-purple-700 text-white px-3 rounded"
              >
                Send OTP
              </button>
            )}
          </div>
          {errors.email && <p className="error">{errors.email.message}</p>}
          {otpSent && !otpVerified && (
            <div className="input-row mt-2">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="border rounded px-2 flex-1"
              />
              <button
                type="button"
                onClick={verifyOtp}
                className="verify-btn bg-green-500 text-white px-3 rounded"
              >
                Verify
              </button>
            </div>
          )}
          {otpVerified && <p className="text-green-600">✅ Email Verified</p>}

          <input
            type="tel"
            placeholder="Mobile Number *"
            {...register("mobile")}
            className="border rounded px-2 mt-3 w-full"
          />
          {errors.mobile && <p className="error">{errors.mobile.message}</p>}

          <input
            type="date"
            {...register("dob")}
            className="border rounded px-2 mt-3 w-full"
          />
          {errors.dob && <p className="error">{errors.dob.message}</p>}
        </div>

        {/* Unique ID */}
        <div className="form-section">
          <h4>Unique Identification</h4>
          <div className="input-row">
            <select {...register("idType")} className="border rounded px-2">
          <option value="">Select ID Type</option>
          <option value="PAN Card">PAN Card</option>
          <option value="Aadhar">Aadhar</option>
          <option value="Driving license">Driving License</option>
          <option value="VoterID">Voter ID</option>
              </select>
            <input
              type="text"
              placeholder="Enter ID *"
              {...register("uniqueId")}
              className="border rounded px-2 flex-1"
            />
          </div>
      
          {errors.uniqueId && (
            <p className="error">{errors.uniqueId.message}</p>
          )}
          <textarea
            placeholder="Address *"
            {...register("address")}
            className="border rounded px-2 w-full mt-3"
          ></textarea>
          {errors.address && <p className="error">{errors.address.message}</p>}
        </div>

        {/* Payment Mode */}
        <div className="form-section">
          <h4>Please Select Donation Mode</h4>
          <select className="border rounded px-2 mb-2 w-full">
            <option>E-Mandate</option>
            <option>UPI</option>
          </select>
          <div className="input-row">
            <input
              type="text"
              placeholder="Bank Name"
              {...register("bankName")}
              className="border rounded px-2 flex-1"
            />
            <input
              type="text"
              placeholder="IFSC Code"
              {...register("ifsc")}
              className="border rounded px-2 flex-1"
            />
          </div>
          {errors.bankName && <p className="error">{errors.bankName.message}</p>}
          {errors.ifsc && <p className="error">{errors.ifsc.message}</p>}

          <div className="input-row mt-2">
            <select className="border rounded px-2">
              <option>Savings</option>
            </select>
            <input
              type="text"
              placeholder="Account Number"
              {...register("accountNumber")}
              className="border rounded px-2 flex-1"
            />
          </div>
          {errors.accountNumber && (
            <p className="error">{errors.accountNumber.message}</p>
          )}
        </div>

        {/* Declaration */}
        <div className="form-section flex items-center">
          <input type="checkbox" {...register("declaration")} className="mr-2" />{" "}
          I am an Indian Citizen and I have read & understood the{" "}
          <a
            onClick={() => setShowDeclaration(true)}
            className="text-purple-600 cursor-pointer"
          >
            declaration
          </a>
        </div>
        {errors.declaration && (
          <p className="error">{errors.declaration.message}</p>
        )}

        <button type="submit" className="donate-btn">
          Proceed to Verify Details
        </button>
      </form>

      {/* Declaration Popup */}
      {showDeclaration && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-1/2 p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Declaration & Guidelines</h2>
              <button onClick={() => setShowDeclaration(false)}>✖</button>
            </div>
            <div className="mt-4 max-h-60 overflow-y-auto">
              <p>
                Donations are accepted only from Indian citizens. Please ensure
                details provided are correct.
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowDeclaration(false)}
                className="bg-purple-600 text-white px-3 py-1 rounded"
              >
                I Agree
              </button>
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
// ------------------------------------------------------------------------------

