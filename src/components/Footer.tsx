import React from 'react';
import { Settings, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='bg-slate-900 text-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    {/* Company Info */}
                    <div className='md:col-span-2'>
                        <div className='flex items-center space-x-2 mb-4'>
                            <Settings className='h-8 w-8 text-yellow-500' />
                            <div>
                                <div className='text-xl font-bold'>SLY TECHNO SOLUTIONS</div>
                                <div className='text-sm text-slate-400'>Precision at the Core</div>
                            </div>
                        </div>
                        <p className='text-slate-300 mb-4 max-w-md'>
                            Leading precision components manufacturer and solution provider, serving aerospace, construction, earth moving, and tooling industries since 2024.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                        <ul className='space-y-2'>
                            <li>
                                <a href='/about' className='text-slate-300 hover:text-yellow-500 transition-colors'>
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href='/facility' className='text-slate-300 hover:text-yellow-500 transition-colors'>
                                    Facility
                                </a>
                            </li>
                            <li>
                                <a href='/gallery' className='text-slate-300 hover:text-yellow-500 transition-colors'>
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href='/contact' className='text-slate-300 hover:text-yellow-500 transition-colors'>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Contact Info</h3>
                        <div className='space-y-3'>
                            <div className='flex items-start space-x-3'>
                                <MapPin className='h-5 w-5 text-yellow-500 mt-0.5' />
                                <div className='text-slate-300 text-sm'>
                                    No. 07, Karivabanahalli, <br /> Thigalrapalya Main Road,
                                    <br />
                                    Peenya 2nd Stage,
                                    <br />
                                    Bengaluru, Karnataka 560058
                                </div>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <Phone className='h-5 w-5 text-yellow-500' />
                                <span className='text-slate-300'>+91 9902880945</span>
                            </div>
                            <div className='flex items-center space-x-3 min-w-0'>
                                <Mail className='h-5 w-5 text-yellow-500 flex-shrink-0' />
                                <span className='text-slate-300 font-bold'>sales@slytechnosolutions.com</span>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <Mail className='h-5 w-5 text-yellow-500' />
                                <span className='text-slate-300'>shivanna@slytechnosolutions.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-t border-slate-800 mt-8 pt-8 text-center text-slate-400'>
                    <p>&copy; {new Date().getFullYear()} SLY Techno Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
