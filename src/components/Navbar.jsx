function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-red-500 to-yellow-400 px-10 py-4 flex justify-between items-center gap-8 sticky top-0 w-full z-50">

      <div className="text-white text-2xl font-bold">
        Harshwardhan
      </div>

      <ul className="flex gap-6">
        <li><a href="#home" className="text-white text-lg hover:text-blue-500">Home</a></li>
        <li><a href="#about" className="text-white text-lg hover:text-blue-500">About</a></li>
        <li><a href="#services" className="text-white text-lg hover:text-blue-500">Services</a></li>
        <li><a href="#contact" className="text-white text-lg hover:text-blue-500">Contact</a></li>
      </ul>

      <button className="bg-blue-500 text-white px-5 py-2 rounded-full">
        Try Now
      </button>

    </nav>
  )
}

export default Navbar