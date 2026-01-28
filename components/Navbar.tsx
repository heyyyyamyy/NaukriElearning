import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // 3D Button Utility Class
  const btn3d = "transform active:translate-y-1 transition-all duration-150 shadow-[0_4px_0_rgb(0,0,0,0.2)] active:shadow-none border-b-4 border-black/10 active:border-none";

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Catalog', path: '/courses' },
    { name: 'Process', path: '/process' },
    { name: 'Enterprise', path: '/enterprise' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'pt-2' : 'pt-4 md:pt-6'} px-4 sm:px-6 lg:px-8 pointer-events-none`}>
      <div className="max-w-7xl mx-auto pointer-events-auto relative">
        
        {/* Main Floating Bar */}
        <div className={`
            relative bg-white/80 backdrop-blur-xl border border-white/40 
            shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl 
            px-4 md:px-6 h-16 md:h-20 flex items-center justify-between
            transition-all duration-500 ease-out
            ${scrolled ? 'bg-white/95 shadow-xl' : 'hover:bg-white/90'}
        `}>
          
          {/* Logo Section */}
          <div className="flex items-center gap-4 lg:gap-8">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
              {/* 3D Cube Logo Representation */}
              <div className="relative w-8 h-8 lg:w-10 lg:h-10 group-hover:rotate-12 transition-transform duration-300 preserve-3d">
                <div className="absolute inset-0 bg-brand-600 rounded-lg transform translate-z-10 shadow-lg flex items-center justify-center">
                    <span className="text-white font-black text-lg lg:text-xl">N</span>
                </div>
                <div className="absolute inset-0 bg-brand-800 rounded-lg transform translate-x-1 translate-y-1 -z-10"></div>
              </div>
              <div className="flex flex-col">
                  <span className="font-extrabold text-lg lg:text-xl text-brand-900 tracking-tight leading-none">Naukri</span>
                  <span className="font-semibold text-[10px] lg:text-xs text-brand-500 tracking-widest leading-none">ELEARNING</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((item) => (
                  <Link 
                      key={item.name}
                      to={item.path} 
                      className={`
                          px-3 py-2 rounded-xl text-sm font-bold transition-all duration-200
                          ${isActive(item.path) 
                              ? 'bg-brand-50 text-brand-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]' 
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }
                      `}
                  >
                      {item.name}
                  </Link>
              ))}
            </div>
          </div>

          {/* Desktop Right Nav (Auth) */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="hidden xl:flex relative w-40 group mr-2">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full pl-9 pr-4 py-2 rounded-xl bg-gray-100/50 border-2 border-transparent focus:bg-white focus:border-brand-200 outline-none transition-all text-sm font-medium"
                />
                <Search size={16} className="absolute left-3 top-2.5 text-gray-400 group-hover:text-brand-500 transition-colors" />
            </div>

            <button className="text-gray-600 font-bold text-sm px-4 py-2 hover:text-brand-600 transition-colors">
                Log In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
             <button 
                className={`p-2 rounded-xl text-gray-600 hover:bg-gray-100 active:scale-90 transition-all ${isOpen ? 'bg-gray-100 text-brand-600' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>

        {/* Mobile Menu 3D Dropdown */}
        <div className={`
            absolute top-full left-0 right-0 pt-4 px-2 
            transition-all duration-300 ease-in-out origin-top z-40
            ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}
        `}>
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] border border-white/50 overflow-hidden p-4">
                 <div className="grid grid-cols-2 gap-3 mb-6">
                     {navLinks.map(item => (
                        <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 ${isActive(item.path) ? 'border-brand-200 bg-brand-50 text-brand-700' : 'border-gray-100 bg-white text-gray-600'}`}>
                            <span className="font-bold">{item.name}</span>
                        </Link>
                     ))}
                 </div>

                 <div className="space-y-3">
                     <button onClick={() => setIsOpen(false)} className="block w-full text-center py-3 rounded-xl font-bold text-gray-600 bg-gray-50 border border-gray-200 active:scale-95 transition-transform">
                         Log In
                     </button>
                 </div>
            </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;