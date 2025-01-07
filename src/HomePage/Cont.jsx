import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Cont = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm("service_05sixp9", "template_q1u0gdr", e.target, "nfWzNjvUw0gN832ix")
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          alert("Error sending message, please try again.");
        }
      );
  };

  return (
    <main className="p-8 flex-1 rounded-lg bg-white shadow-lg mt-5">
      <section className="mb-5">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Contact Me
          <span className="block mt-2 w-30 h-1 bg-orange-600"></span>
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </section>

      <section className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row justify-around items-center gap-6">
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg w-full md:w-2/5 flex items-center">
            <div className="p-4 bg-orange-200 rounded-full mr-4">
              <FaPhoneAlt className="text-orange-600 text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-600">Phone</h3>
              <p className="text-gray-800">+8126050903</p>
            </div>
          </div>

          <div className="bg-sky-100 p-6 rounded-lg shadow-lg w-full md:w-2/5 flex items-center">
            <div className="p-4 bg-sky-200 rounded-full mr-4">
              <FaEnvelope className="text-sky-600 text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-sky-600">Email</h3>
              <p className="text-gray-800">vreducation@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full md:w-[90%] flex flex-col ml-10">
          <h3 className="text-2xl font-semibold mb-4 text-orange-600 flex items-center">
            <FaPaperPlane className="mr-2 text-orange-600" /> Send a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-600 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-600 focus:outline-none"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-600 focus:outline-none"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-1/3 items-center bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white py-3 rounded-lg shadow-lg hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 transition duration-300 flex justify-center"
            >
              <FaPaperPlane className="mr-2" /> Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Cont;
