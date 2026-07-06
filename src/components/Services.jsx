function Services() {
  return (
    <section
      id="services"
      className="min-h-screen px-6 py-16 bg-gradient-to-b from-blue-100 to-teal-200 ">
      <h1 className="text-center text-4xl mb-10 mt-10 font-bold">
        My Services
      </h1>

      <div className="flex flex-wrap justify-center gap-8">

        {/* CARD */}
        {[1,2,3,4].map((item) => (
          <div
            key={item}
            className="w-[300px] h-[300px] border border-black bg-teal-300 rounded-lg p-4 mt-5 text-center"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
              className="h-12 bg-blue-400 rounded-md mx-auto mb-4"
            />

            <h1 className="text-2xl mb-2 font-semibold">
              Service {item}
            </h1>

            <p>
              I provide high quality service for web development and UI design.
            </p>
          </div>
        ))}

      </div>

    </section>
  )
}

export default Services