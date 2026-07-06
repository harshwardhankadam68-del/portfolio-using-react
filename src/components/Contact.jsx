function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center
      bg-gradient-to-b from-[rgb(234,242,247)] to-[rgba(190,225,220,0.834)]"
    >
      <h1 className="mb-6 mt-8 text-3xl font-bold">
        Contact <span className="text-[orangered]">Me</span>
      </h1>

      <form
        className="bg-[rgb(128,209,202)] p-[30px] rounded-[15px] w-[400px]
        shadow-[0_0_15px_rgba(8,8,8,0.2)]"
      >
        {/* Name */}
        <label className="block mb-[5px] font-bold">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-[10px] mb-[15px] border-2 border-[rgb(100,221,211)]
          rounded-[5px] bg-white outline-none"
        />

        {/* Email */}
        <label className="block mb-[5px] font-bold">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-[10px] mb-[15px] border-2 border-[rgb(100,221,211)]
          rounded-[5px] bg-white outline-none"
        />

        {/* Message */}
        <label className="block mb-[5px] font-bold">Message</label>
        <textarea
          placeholder="Enter your message"
          className="w-full p-[10px] mb-[15px] border-2 border-[rgb(100,221,211)]
          rounded-[5px] h-[100px] resize-none bg-white outline-none"
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="w-full h-[40px] mt-[10px] rounded-[30px]
          bg-blue-500 text-white"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;