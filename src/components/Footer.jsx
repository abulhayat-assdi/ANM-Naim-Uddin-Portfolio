import { smoothScrollTo } from '../utils/smoothScroll';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <footer className="bg-gray-900 text-white pt-48 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="text-3xl font-bold mb-4">
                            A.N.M Nayeem Uddin<span className="text-primary-400">.</span>
                        </div>
                        <p className="text-gray-400">
                            Marketing Professional
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <div className="space-y-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => smoothScrollTo(link.id)}
                                    className="block text-gray-400 hover:text-primary-400 transition-default"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact</h3>
                        <div className="space-y-2 text-gray-400">
                            <p>Flat: A8, House: 1B, Road: 12, Kollyanpur, Dhaka - 1207</p>
                            <p>nayeem0412@gmail.com</p>
                            <p>01614629336</p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-400">
                        © {currentYear} A.N.M Nayeem Uddin. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
