import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Cont = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_05sixp9",
        "template_q1u0gdr",
        e.target,
        "nfWzNjvUw0gN832ix"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        () => {
          alert("Error sending message, please try again.");
        }
      );
  };

  return (
    <main className="p-6 md:p-12 flex-1 bg-white shadow-lg rounded-lg">
      {/* Header Section */}
      <section className="mb-10 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
          Contact Me
        </h2>
        <span className="block mx-auto w-20 md:w-24 h-1 bg-orange-600"></span>
        <p className="text-sm md:text-base lg:text-lg text-gray-700 mt-4">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </section>

      {/* Content Section */}
      <section className="flex flex-col lg:flex-row gap-10 justify-center items-start">
        {/* Contact Information */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg flex items-center gap-4">
            <div className="p-4 bg-orange-200 rounded-full">
              <FaPhoneAlt className="text-orange-600 text-lg md:text-xl lg:text-2xl" />
            </div>
            <div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-orange-600">
                Phone
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-gray-800">
                +8126050903
              </p>
            </div>
          </div>
          <div className="bg-sky-100 p-6 rounded-lg shadow-lg flex items-center gap-4">
            <div className="p-4 bg-sky-200 rounded-full">
              <FaEnvelope className="text-sky-600 text-lg md:text-xl lg:text-2xl" />
            </div>
            <div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-sky-600">
                Email
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-gray-800">
                vreducation@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg w-full lg:w-1/2">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-orange-600 mb-6 flex items-center">
            <FaPaperPlane className="mr-2" /> Send a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm md:text-base lg:text-lg text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none text-sm md:text-base"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm md:text-base lg:text-lg text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none text-sm md:text-base"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-sm md:text-base lg:text-lg text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none text-sm md:text-base"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-semibold rounded-lg shadow-lg hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 transition duration-300 flex items-center justify-center text-sm md:text-base"
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
