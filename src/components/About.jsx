function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-6 py-16 bg-gradient-to-b from-blue-100 to-teal-200 ">
    

      {/* LEFT IMAGE */}
      <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] border-4 border-orange-500 rounded-full flex justify-center items-center shadow-[0_0_20px_orange]">
        
        <img
          src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
          className="w-[70%] h-[70%] hover:w-full hover:h-full transition-all duration-1000 rounded-full"
        />

      </div>

      {/* RIGHT TEXT */}
      <div className="max-w-xl">
        
        <h1 className="text-4xl mb-5 font-bold">
          About <span className="text-red-500">Me</span>
        </h1>

        <p className="text-lg leading-relaxed">
          I am a passionate student learning web development and building modern UI using React and Tailwind CSS.
        </p>

        <button className="bg-blue-500 text-white px-5 py-2 rounded-full mt-5">
          Read More
        </button>

      </div>

    </section>
  )
}

export default About