function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center gap-8 px-12 flex-col md:flex-row ">
      
      {/* LEFT */}
      <div className="w-full md:w-[40%] flex flex-col gap-4 max-w-xl">
        
        <h1 className="text-4xl font-bold mb-4">
          Hi, I'm <span className="text-orange-500">Harshwardhan</span>
        </h1>

        <h2 className="text-xl">Student</h2>

        <p className="text-lg leading-relaxed">
          A passionate student with interest in web development.
        </p>

        <div className="flex gap-5">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="w-8 h-8 rounded-full bg-white hover:bg-orange-500"/>
          <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" className="w-8 h-8 rounded-full bg-white hover:bg-orange-500"/>
        </div>

        <button className="bg-blue-500 text-white rounded-full h-8 w-32 mt-2">
          Contact Me
        </button>

      </div>

      {/* RIGHT */}
      <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] border-2 border-white rounded-full flex justify-center items-center mt-5">
        
        <img
          src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
          className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full"
        />

      </div>

    </section>
  )
}

export default Home