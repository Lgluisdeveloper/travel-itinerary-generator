import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Acerca de Mí', path: '/acerca-de-mi' },
  ];

  return (
    <nav className="bg-white  shadow-lg sticky top-0 z-50 h-16">
      <div className="container mx-auto px-2 md:px-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center text-2xl font-bold text-gray-800">
            <span className="text-blue-500">Trip</span>Generator
          </NavLink>

          {/* Menú principal (escritorio) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `py-5 px-3 text-gray-700 font-medium hover:text-blue-500 transition-colors duration-300
                  ${isActive ? 'border-b-4 border-blue-500 text-blue-500' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Botón de menú móvil */}
          <div className="md:hidden flex items-center  z-50">
            <button onClick={toggleMenu} className="outline-none cursor-pointer mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-500 hover:text-blue-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`
        md:hidden bg-white h-screen w-screen -mt-16 pt-24 z-10 absolute
        transition-all ease-in-out duration-500 transform 
        ${isMenuOpen ? 'translate-x-0 opacity-100' : ' -translate-x-full opacity-0'}
      `}>
        <ul className="flex flex-col items-center gap-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-colors duration-300
                  ${isActive ? 'bg-gray-200 text-blue-500' : ''}`
                }
                onClick={toggleMenu}
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;