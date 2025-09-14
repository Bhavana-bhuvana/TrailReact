// // src/validations/donateSchema.js
// import * as yup from "yup";

// export const donateSchema = yup.object().shape({
//   frequency: yup.string().required("Please select donation frequency"),

//   amount: yup.string().required("Please select an amount"),

//   customAmount: yup
//     .number()
//     .typeError("Enter a valid amount")
//     .when("amount", {
//       is: "other",
//       then: (schema) =>
//         schema.min(100, "Minimum donation ₹100").required("Custom amount required"),
//     }),

//   firstName: yup
//     .string()
//     .required("First Name is required")
//     .matches(/^[A-Za-z ]+$/, "Only alphabets allowed"),

//   lastName: yup.string().required("Last Name is required"),

//   email: yup.string().email("Invalid email").required("Email is required"),

//   mobile: yup
//     .string()
//     .matches(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number")
//     .required("Mobile number is required"),

//   dob: yup
//     .date()
//     .required("Date of Birth is required")
//     .test("age", "Must be at least 18 years old", (value) => {
//       const today = new Date();
//       const birthDate = new Date(value);
//       let age = today.getFullYear() - birthDate.getFullYear();
//       const m = today.getMonth() - birthDate.getMonth();
//       if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//       }
//       return age >= 18;
//     }),
//     idType: yup.string().required("Select ID type"),

//   idNumber: yup.string().when("idType", {
//     is: "PAN Card",
//     then: (schema) =>
//       schema
//         .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format (e.g., ABCDE1234F)")
//         .required("PAN number is required"),

//     otherwise: (schema) =>
//       schema.when("idType", {
//         is: "Aadhar",
//         then: (s) =>
//           s
//             .matches(/^[0-9]{12}$/, "Aadhar must be exactly 12 digits")
//             .required("Aadhar number is required"),

//         otherwise: (s) =>
//           s.when("idType", {
//             is: "Driving License",
//             then: (s2) =>
//               s2
//                 .matches(/^[A-Z]{2}[0-9]{2}[A-Z0-9]{11}$/, "Invalid Driving License format (e.g., MH12XXXXXXX)")
//                 .required("Driving License number is required"),

//             otherwise: (s3) =>
//               s3.when("idType", {
//                 is: "VoterID",
//                 then: (s4) =>
//                   s4
//                     .matches(/^[A-Z]{3}[0-9]{7}$/, "Invalid Voter ID format (e.g., ABC1234567)")
//                     .required("Voter ID number is required"),

//                 otherwise: s3.required("ID number is required"),
//               }),
//           }),
//       }),
//   }),

//   address: yup.string().required("Address is required"),

//   donationMode: yup.string().required("Select donation mode"),

//   bankName: yup.string().when("donationMode", {
//     is: "E-Mandate",
//     then: (schema) => schema.required("Bank name is required"),
//   }),

//   ifsc: yup.string().when("donationMode", {
//     is: "E-Mandate",
//     then: (schema) =>
//       schema
//         .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC Code")
//         .required("IFSC is required"),
//   }),

//   accountNumber: yup.string().when("donationMode", {
//     is: "E-Mandate",
//     then: (schema) => schema.required("Account number is required"),
//   }),

//   agree: yup.boolean().oneOf([true], "You must accept the declaration"),
// });
// ---------------------------------------------------------------------------------------
// src/validation/validationSchema.js
// import * as yup from "yup";

// // Helper for DOB: must be 18+
// const is18Plus = (date) => {
//   const today = new Date();
//   const dob = new Date(date);
//   const age = today.getFullYear() - dob.getFullYear();
//   const m = today.getMonth() - dob.getMonth();
//   return age > 18 || (age === 18 && m >= 0);
// };

// export const donationSchema = yup.object().shape({
//   firstName: yup
//     .string()
//     .required("First name is required")
//     .min(2, "Too short"),
//   lastName: yup.string().required("Last name is required"),
//   email: yup.string().email("Invalid email").required("Email is required"),
//   mobile: yup
//     .string()
//     .matches(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile")
//     .required("Mobile is required"),
//   dob: yup
//     .string()
//     .required("Date of Birth is required")
//     .test("is-18+", "You must be at least 18 years old", is18Plus),
//   uniqueId: yup.string().required("Unique ID is required"),
//   pan: yup
//     .string()
//     .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format")
//     .optional(),
//   aadhar: yup
//     .string()
//     .matches(/^\d{12}$/, "Invalid Aadhar number")
//     .optional(),
//   ifsc: yup
//     .string()
//     .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC Code")
//     .required("IFSC is required"),
//   bankName: yup.string().required("Bank name is required"),
//   accountNumber: yup
//     .string()
//     .matches(/^\d{9,18}$/, "Account number must be 9-18 digits")
//     .required("Account number is required"),
//   address: yup.string().required("Address is required"),
//   declaration: yup
//     .boolean()
//     .oneOf([true], "You must accept the declaration"),
// });
// ---------------------------------------------------------------------
import * as yup from "yup";

// Helper for DOB: must be 18+
const is18Plus = (date) => {
  const today = new Date();
  const dob = new Date(date);
  const age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  return age > 18 || (age === 18 && m >= 0);
};

export const donationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "Too short"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  mobile: yup
    .string()
    .matches(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile")
    .required("Mobile is required"),
  dob: yup
    .string()
    .required("Date of Birth is required")
    .test("is-18+", "You must be at least 18 years old", is18Plus),

  // Identification type selected from dropdown
  idType: yup.string().required("Select an ID type"),

  // ID number must follow the regex of selected idType
  uniqueId: yup
    .string()
    .required("ID number is required")
    .when("idType", {
      is: "PAN Card",
      then: (schema) =>
        schema.matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format"),
    })
    .when("idType", {
      is: "Aadhar",
      then: (schema) => schema.matches(/^\d{12}$/, "Invalid Aadhar number"),
    })
    .when("idType", {
      is: "Driving license",
      then: (schema) =>
        schema.matches(
          /^[A-Z]{2}[0-9]{2}\d{11}$/,
          "Invalid Driving License format"
        ),
    })
    .when("idType", {
      is: "VoterID",
      then: (schema) =>
        schema.matches(/^[A-Z]{3}[0-9]{7}$/, "Invalid Voter ID format"),
    }),

  ifsc: yup
    .string()
    .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC Code")
    .required("IFSC is required"),
  bankName: yup.string().required("Bank name is required"),
  accountNumber: yup
    .string()
    .matches(/^\d{9,18}$/, "Account number must be 9-18 digits")
    .required("Account number is required"),
  address: yup.string().required("Address is required"),
  declaration: yup
    .boolean()
    .oneOf([true], "You must accept the declaration"),
});

