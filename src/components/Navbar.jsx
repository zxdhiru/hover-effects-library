import React, { useState, useEffect } from 'react';
import { FaGithub, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 p-4 px-32 transition-all duration-300 ${
        isScrolled
          ? 'bg-white bg-opacity-60 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo on the left */}
        <Link to="/" className="text-2xl font-bold text-gray-800">Hover effects Library</Link>
        {/* <div className="text-2xl font-bold text-gray-800">Logo</div> */}

        {/* Right side - Search Button and GitHub link */}
        <div className="flex items-center space-x-4">
          {/* Search Button
          <button className="text-gray-800 hover:text-gray-600">
            <FaSearch size={20} />
          </button> */}

          {/* GitHub Link */}
          <a
            href="https://github.com/your-username/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
