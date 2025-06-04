import React from 'react'

const Header = () => {
  return (
    <div>
<section className="relative w-full h-80 mt-10 bg-cover bg-center" style= {{ backgroundImage: 'https://images.unsplash.com/photo-1585144860106-998ca0f2922a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlbGNvbWluZyUyMGltYWdlJTIwZm9yJTIwc2hvcHBlcnN8ZW58MHx8MHx8fDA%3D' }}>
      <div className="absolute inset-0 bg-red-400 opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center w-full h-full text-center text-white px-6">
        <div>
          <h1 className="text-5xl font-extrabold">Enjoy our Boutique</h1>
          <p className="mt-4 text-xl">We are here to meet all of your fashion needs.</p>
          <div className="mt-8">
            <a href="#" className="inline-block px-8 py-3 text-lg font-semibold text-white bg-red-400 rounded-lg hover:bg-red-500">
              Let's Begin Shopping!
            </a>
          </div>
        </div>
      </div>
    </section>
    <header className="fixed top-0 left-0 w-full bg-red-400 shadow-md z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-red-200">
          My Fashion Boutique!
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#header" className="text-lg text-red-100 hover:text-red-300">Home</a></li>
            <li><a href="#main" className="text-lg text-red-100 hover:text-red-300">Our Store</a></li>
            <li><a href="#footer" className="text-lg text-red-100 hover:text-red-300">Services</a></li>
          </ul>
        </nav>
      </div>
    </header>
    </div>
  )
}
export default Header;