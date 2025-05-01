// import React from "react";

// const Contact = () => {
//   return (
//     <div
//       id="contact"
//       className="pb-8 w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
//     >
//       <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
//         <div className="md:pt-22 pb-2">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Contact
//           </p>
//           <p className="py-2">Submit the form below to get in touch with me</p>
//         </div>

//         <div className="flex justify-center items-center">
//           <form
//             action="https://getform.io/f/61b54c5e-a971-4c99-bd20-776e668cfb27"
//             method="POST"
//             className=" flex flex-col w-full md:w-1/2"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//             />
//             <input
//               type="text"
//               name="email"
//               placeholder="Enter your email"
//               className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//             />
//             <textarea
//               name="message"
//               placeholder="Enter your message"
//               rows="10"
//               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//             ></textarea>

//             <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
//               Let's talk
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  // Form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: "Please fill in all fields"
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        success: false,
        message: "Please enter a valid email address"
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Using the original form action
      const form = e.target;
      const formData = new FormData(form);
      
      await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      // Clear form on success
      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus({
        success: true,
        message: "Message sent successfully! I'll get back to you soon."
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Something went wrong. Please try again or email me directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="pb-8 w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="md:pt-22 pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            Contact
          </p>
          <p className="py-2">Submit the form below to get in touch with me</p>
        </div>
        
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/61b54c5e-a971-4c99-bd20-776e668cfb27"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
              required
            ></textarea>
            
            {submitStatus && (
              <div
                className={`p-3 rounded-md mt-4 ${
                  submitStatus.success 
                    ? "bg-green-500/20 text-green-300 border border-green-500/30" 
                    : "bg-red-500/20 text-red-300 border border-red-500/30"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center gap-2 rounded-md hover:scale-110 duration-300 disabled:opacity-70 disabled:hover:scale-100"
            >
              {isSubmitting ? "Sending..." : (
                <>
                  Let's talk
                  <FaPaperPlane className="ml-1" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;