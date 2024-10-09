import React, { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Zap className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-800">DigitalPulse</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Services</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Case Studies</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">About</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Services</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Case Studies</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">About</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</a>
        </div>
      )}
    </header>
  )
}

export default Header