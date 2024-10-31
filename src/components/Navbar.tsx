import { ShoppingBag, User2, Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-lexend tracking-wider font-light">ETHEREAL</Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/collections" className="text-gray-800 hover:text-gray-600 font-lexend text-sm">Collections</Link>
            <Link to="/new" className="text-gray-800 hover:text-gray-600 font-lexend text-sm">New Arrivals</Link>
            <Link to="/sale" className="text-gray-800 hover:text-gray-600 font-lexend text-sm">Sale</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingBag className="h-5 w-5" />
            </Link>
            <Link to="/account" className="p-2 hover:bg-gray-100 rounded-full">
              <User2 className="h-5 w-5" />
            </Link>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/collections" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 font-lexend text-sm">Collections</Link>
            <Link to="/new" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 font-lexend text-sm">New Arrivals</Link>
            <Link to="/sale" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 font-lexend text-sm">Sale</Link>
          </div>
        </div>
      )}
    </nav>
  );
}