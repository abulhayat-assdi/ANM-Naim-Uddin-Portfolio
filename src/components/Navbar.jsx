import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { smoothScrollTo } from '../utils/smoothScroll';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ activeSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'contact', label: 'Contact' },
    ];

    const handleNavClick = (id) => {
        setIsMobileMenuOpen(false);

        if (location.pathname !== '/') {
            navigate('/');
            // Small delay to allow navigation to complete before scrolling
            setTimeout(() => {
                smoothScrollTo(id);
            }, 100);
        } else {
            smoothScrollTo(id);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-default ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className={`text-xl md:text-2xl font-bold transition-default ${isScrolled ? 'text-primary-600' : 'text-white'
                        }`}>
                        A.N.M Nayeem Uddin
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleNavClick(link.id)}
                                className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-200 transform hover:scale-110 hover:font-bold hover:shadow-lg ${activeSection === link.id
                                    ? 'bg-white text-primary-600 shadow-md'
                                    : 'bg-white/90 text-gray-700 hover:bg-white hover:text-primary-600'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl text-gray-700 hover:text-primary-600 transition-default"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="container-custom py-4 space-y-4">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleNavClick(link.id)}
                            className={`block w-full text-left font-medium transition-default hover:text-primary-600 py-2 ${activeSection === link.id
                                ? 'text-primary-600'
                                : 'text-gray-700'
                                }`}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
