"use client";

const Contact = () => {
  return (
    <>
    <section className="flex flex-col md:flex-row items-center justify-center
  bg-white pb-28 py-10 px-5 md:px-20">
      {/* Left Side (Image/Illustration) */}
      <div className=" md:w-1/2 flex justify-center items-center pb-8 md:mb-0" >
        <img
          src="/images/contact.png"
          width={800}
          height={567}
          alt="Freelancer Illustration"
          className=""
        />
      </div>

      {/* Right Side (Form) */}
      <div className="w-full md:w-1/2 p-8 border-2 rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center" id="contact">Hire Me!</h2>
<p className="text-gray-600 mb-6">
  I am available for freelancing work. Please connect with me via phone:{" "}
  <span className="font-bold">+92 311 4449542</span> or email at:{" "}
  <span className="font-bold inline whitespace-nowrap">waleed.ahmad9902@gmail.com</span>.
</p>

        <form className="space-y-4">
          <div className="flex gap-4 max-sm:flex-col max-sm:w-full">
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 max-sm:w-auto border border-gray-300 rounded-lg bg-[#EEEEEE] hover:bg-white px-4 py-3 focus:outline-none focus:ring-[1px] focus:ring-[#F9004D]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-1/2 max-sm:w-auto border border-gray-300 rounded-lg bg-[#EEEEEE] hover:bg-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#F9004D]"
            />
          </div>
          <div className="flex gap-4 max-sm:flex-col max-sm:w-full">
            <input
               type="tel"
               placeholder="Phone number"
               pattern="\d{10}" // Accepts exactly 10 digits
               title="Please enter a valid 10-digit phone number"
              className="w-1/2 max-sm:w-auto border border-gray-300 rounded-lg bg-[#EEEEEE] hover:bg-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#F9004D]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-1/2 max-sm:w-auto border border-gray-300 rounded-lg bg-[#EEEEEE] hover:bg-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#F9004D]"
            />
          </div>
          <div>
            <textarea
              placeholder="Write your message..."
              rows="5"
              className="w-full border border-gray-200 rounded-lg bg-[#EEEEEE] hover:bg-white px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#F9004D]"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="relative px-8 py-3 text-[#F9004D] border-[1px]  border-[#F9004D] font-semibold rounded-md group "
            > 
              Send Message
             <div className="absolute inset-0 mx-auto w-full bg-gradient-to-r  from-pink-500 to-orange-500 group-hover:w-0 rounded-md duration-700 flex justify-center 
             items-center overflow-hidden text-white text-nowrap">
            Send message</div>
            </button>
          </div>
        </form>
      </div>
    </section>
    <hr />
    </>
  );
};

export default Contact;
