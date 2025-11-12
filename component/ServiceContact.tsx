// "use client";

// import { submitFormData } from "@/lib/contact";
// import React, { useState } from "react";

// const ServiceContactSection: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     phone: "",
//     message: "",
//   });

//   const [successMsg, setSuccessMsg] = useState("");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     if (name === "phone") {
//       const numericValue = value.replace(/[^0-9]/g, "");
//       setFormData({ ...formData, [name]: numericValue });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }

//     setErrors({ ...errors, [name]: "" });
//     setSuccessMsg("");
//   };

//   const miniContact = () => {
//     let valid = true;
//     const newErrors = { name: "", phone: "", message: "" };

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//       valid = false;
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//       valid = false;
//     } else if (formData.phone.length < 10) {
//       newErrors.phone = "Enter a valid 10-digit number";
//       valid = false;
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//       valid = false;
//     }
//     try{
//       const formData = await submitFormData(
//         {},
//         "027feae6-fad4-44fe-be71-7724e9593d8d",
//         {name, phone, message},
//       )
//     }
//     // setTimeout(() => {
//     //   setErrors({ name: "", phone: "", message: "" });
//     // }, 3000);
//     if (!valid) {
//       setErrors(newErrors);
//       setSuccessMsg("");
//       return;
//     }

//     setErrors({ name: "", phone: "", message: "" });
//     setSuccessMsg("Your message has been sent successfully!");
//     setFormData({ name: "", phone: "", message: "" });
//     setTimeout(() => {
//       setSuccessMsg("");
//     }, 3000);
//   };

//   return (
//     <div className="details_contact privacy_contact">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-8">
//             <div className="contact_title">
//               <p>Connect with us to get a free quote</p>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="footer-form">
//               <form>
//                 <div className="row">
//                   <div className="from_text">
//                     <h4>Contact Us</h4>
//                   </div>

//                   {/* Name Field */}
//                   <div className="form-group col-lg-12 col-md-12 col-sm-12">
//                     <input
//                       type="text"
//                       placeholder="Name"
//                       id="name2"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                     />
//                     <span
//                       className="text-danger contact_gap"
//                       style={{
//                         margin: "25px",
//                         display: errors.name ? "block" : "none",
//                       }}>
//                       {errors.name}
//                     </span>
//                   </div>

//                   {/* Phone Field */}
//                   <div className="form-group col-lg-12 col-md-12 col-sm-12">
//                     <input
//                       type="tel"
//                       placeholder="Phone"
//                       id="phone2"
//                       name="phone"
//                       maxLength={10}
//                       value={formData.phone}
//                       onChange={handleChange}
//                       required
//                     />
//                     <span
//                       className="text-danger contact_gap"
//                       style={{
//                         margin: "25px",
//                         display: errors.phone ? "block" : "none",
//                       }}>
//                       {errors.phone}
//                     </span>
//                   </div>

//                   {/* Message Field */}
//                   <div className="form-group col-lg-12 col-md-12 col-sm-12">
//                     <textarea
//                       placeholder="Message"
//                       id="message2"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required></textarea>
//                     <span
//                       className="text-danger contact_gap"
//                       style={{
//                         margin: "25px",
//                         display: errors.message ? "block" : "none",
//                       }}>
//                       {errors.message}
//                     </span>
//                   </div>

//                   {/* Submit */}
//                   <div className="form-group col-lg-12 col-md-12 col-sm-12">
//                     <button
//                       className="submit_item"
//                       type="button"
//                       id="submit"
//                       onClick={miniContact}
//                       name="submit-form">
//                       Submit
//                     </button>

//                     {successMsg && (
//                       <div className="msgsSubmit text-info text-center contact_gap">
//                         {successMsg}
//                       </div>
//                     )}
//                     <div className="clearfix"></div>
//                   </div>
//                 </div>
//               </form>

//               <div
//                 className="text-danger text-center print-error-msg"
//                 style={{ display: "none" }}>
//                 <ul></ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceContactSection;

"use client";

import { submitFormData } from "@/lib/contact";
import { log } from "console";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ServiceContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

  // Input change handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/[^0-9]/g, "");

      if (numericValue.length !== 10) {
        setErrors((prev) => ({
          ...prev,
          [name]: "Enter a valid 10-digit number",
        }));
      } else {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }

      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    setSuccessMsg("");
  };

  // console.log("errors", errors);
  const miniContact = async () => {
    let valid = true;
    const newErrors = { name: "", phone: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (formData.phone.length < 10) {
      // newErrors.phone = "Enter a valid 10-digit number";
      toast.error("Enter a valid 10-digit number");
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }
    try {
      const response = await submitFormData(
        {},
        "e6f70313-5bc8-4774-969a-abf667491c9e",
        {
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
        }
      );

      if (response?.success) {
        // setSuccessMsg("Your message has been sent successfully!");
        toast.success("Your message has been sent successfully!");
        setFormData({ name: "", phone: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // setSuccessMsg("Something went wrong. Please try again later.");
      toast.error("Your message could not be sent. Please try again.");
    }
  };

  return (
    <div className="details_contact privacy_contact">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="contact_title">
              <p>Connect with us to get a free quote</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="footer-form">
              <form>
                <div className="row">
                  <div className="from_text">
                    <h4>Contact Us</h4>
                  </div>

                  {/* Name Field */}
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <input
                      type="text"
                      placeholder="Name"
                      id="name2"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <span
                      className="text-danger contact_gap"
                      style={{
                        margin: "25px",
                        display: errors.name ? "block" : "none",
                      }}>
                      {errors.name}
                    </span>
                  </div>

                  {/* Phone Field */}
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <input
                      type="tel"
                      placeholder="Phone"
                      id="phone2"
                      name="phone"
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <span
                      className="text-danger contact_gap"
                      style={{
                        margin: "25px",
                        display: errors.phone ? "block" : "none",
                      }}>
                      {errors.phone}
                    </span>
                  </div>

                  {/* Message Field */}
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <textarea
                      placeholder="Message"
                      id="message2"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required></textarea>
                    <span
                      className="text-danger contact_gap"
                      style={{
                        margin: "25px",
                        display: errors.message ? "block" : "none",
                      }}>
                      {errors.message}
                    </span>
                  </div>

                  {/* Submit */}
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <button
                      className="submit_item"
                      type="button"
                      id="submit"
                      onClick={miniContact}
                      name="submit-form">
                      Submit
                    </button>

                    {successMsg && (
                      <div className="msgsSubmit text-info text-center contact_gap">
                        {successMsg}
                      </div>
                    )}
                    <div className="clearfix"></div>
                  </div>
                </div>
              </form>

              <div
                className="text-danger text-center print-error-msg"
                style={{ display: "none" }}>
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContactSection;
