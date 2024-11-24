"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // State for modal visibility and message
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Prepare the data to send in the email template
    const emailData = {
      to_name: "Recipient Name", // Replace with the actual recipient's name
      from_name: formData.name,  // The sender's name from the form
      from_email: formData.email, // The sender's email from the form
      message: formData.message, // The message from the form
      phone: formData.phone,     // The sender's phone number from the form
    };
  
    // Sending the email using EmailJS
    emailjs
      .send(
        "service_1s6vkeb", // Replace with your service ID from EmailJS
        "template_9gbgpko", // Replace with your template ID from EmailJS
        emailData,          // Use the emailData object here
        "ITQ22pXztZtfAc42s" // Replace with your user ID from EmailJS
      )
      .then(
        (response) => {
          setModalMessage("Message sent successfully!");
          setIsModalVisible(true);
        },
        (error) => {
          setModalMessage("Message sending failed. Please try again later.");
          setIsModalVisible(true);
        }
      );
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center bg-white pb-28 py-10 px-5 md:px-20">
        {/* Left Side (Image/Illustration) */}
        <div className="md:w-1/2 flex justify-center items-center pb-8 md:mb-0">
          <img
            src="/images/contact.png"
            width={800}
            height={567}
            alt="Freelancer Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-1/2 p-8 border-2 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-center" id="contact">
            Hire Me!
          </h2>
          <p className="text-gray-600 mb-6">
            I am available for freelancing work. Please connect with me via phone:{" "}
            <span className="font-bold">+92 311 4449542</span> or email at:{" "}
            <span className="font-bold inline whitespace-nowrap">waleed.ahmad9902@gmail.com</span>.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4 max-sm:flex-col max-sm:w-full">
              <div className="w-1/2 max-sm:w-auto">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 rounded-lg bg-[#EEEEEE] hover:bg-white px-4 py-3 focus:outline-none focus:ring-[1px] focus:ring-[#F9004D]"
                />
              </div>

              <div className="w-1/2 max-sm:w-auto">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full border border-gray-300 rounded-lg bg-[#EEEEEE] hover:bg-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#F9004D]"
                />
              </div>
            </div>

            <div className="flex gap-4 max-sm:flex-col max-sm:w-full">
              <div className="w-1/2 max-sm:w-auto">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  pattern="\d{10}"
                  title="Please enter a valid 10-digit phone number"
                  required
                  className="w-full border border-gray-300 rounded-lg bg-[#EEEEEE] hover:bg-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#F9004D]"
                />
              </div>

              <div className="w-1/2 max-sm:w-auto">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full border border-gray-300 rounded-lg bg-[#EEEEEE] hover:bg-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#F9004D]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                required
                className="w-full border border-gray-200 rounded-lg bg-[#EEEEEE] hover:bg-white px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#F9004D]"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="relative px-8 py-3 text-[#F9004D] border-[1px] border-[#F9004D] font-semibold rounded-md group"
              >
                Send Message
                <div className="absolute inset-0 mx-auto w-full bg-gradient-to-r from-pink-500 to-orange-500 group-hover:w-0 rounded-md duration-700 flex justify-center items-center overflow-hidden text-white">
                  Send message
                </div>
              </button>
            </div>
          </form>
        </div>
      </section>
      <hr />

      {/* Modal Component */}
      {isModalVisible && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">{modalMessage}</h3>
            <button
              onClick={closeModal}
              className="bg-[#F9004D] text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
