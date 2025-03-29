
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-serif text-2xl font-bold text-sage-700">Life's Journey</Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-sage-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-sage-600 transition-colors">About</Link>
            <Link to="/blog" className="text-gray-700 hover:text-sage-600 transition-colors">Blog</Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 py-2">
            <Link 
              to="/" 
              className="block text-gray-700 hover:text-sage-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block text-gray-700 hover:text-sage-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className="block text-gray-700 hover:text-sage-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
