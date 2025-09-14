import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Settings } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Vision & Mission', href: '/vision-mission' },
        { name: 'Our Team', href: '/team' },
        { name: 'Facility', href: '/facility' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Clients', href: '/clients' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className='bg-slate-800 text-white sticky top-0 z-50 shadow-lg'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    {/* Logo */}
                    <Link to='/' className='flex items-center space-x-2'>
                        <Settings className='h-8 w-8 text-yellow-500' />
                        <div>
                            <div className='text-xl font-bold'>SLY TECHNO</div>
                            <div className='text-xs text-slate-300'>SOLUTIONS</div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden lg:flex items-center space-x-1'>
                        {navigation.map(item => (
                            <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                    location.pathname === item.href ? 'bg-yellow-500 text-slate-900' : 'text-slate-200 hover:text-white hover:bg-slate-700'
                                }`}>
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden p-2 rounded-md hover:bg-slate-700 transition-colors duration-200'>
                        {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className='lg:hidden pb-4'>
                            {navigation.map(item => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    onClick={() => {
                                        setIsOpen(false);
                                        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                                    }}
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                                        location.pathname === item.href ? 'bg-yellow-500 text-slate-900' : 'text-slate-200 hover:text-white hover:bg-slate-700'
                                    }`}>
                                    {item.name}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
