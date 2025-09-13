import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
    };

    const contactInfo = [
        {
            icon: <MapPin className='h-6 w-6' />,
            title: 'Address',
            details: ['SLY Techno Solutions', 'No. 07, Karivabanahalli, Thigalrapalya Main Road,', 'Peenya 2nd Stage', 'Bangalore - 560058', 'Karnataka, India'],
        },
        {
            icon: <Phone className='h-6 w-6' />,
            title: 'Phone',
            details: ['+91 9902880945'],
        },
        {
            icon: <Mail className='h-6 w-6' />,
            title: 'Email',
            details: ['shivanna@slytechnosolutions.com'],
        },
        {
            icon: <Clock className='h-6 w-6' />,
            title: 'Business Hours',
            details: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
        },
    ];

    return (
        <div className='min-h-screen'>
            <HeroSection title='Contact Us' subtitle='Get in Touch for Your Precision Manufacturing Needs' />

            <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                        {/* Contact Information */}
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <h2 className='text-3xl font-bold text-slate-800 mb-8'>Get In Touch</h2>
                            <p className='text-lg text-slate-600 mb-8'>
                                Ready to discuss your precision manufacturing requirements? Our team is here to help you find the perfect solution for your project needs.
                            </p>

                            <div className='space-y-8'>
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className='flex items-start space-x-4'>
                                        <div className='text-yellow-500 mt-1'>{info.icon}</div>
                                        <div>
                                            <h3 className='text-lg font-semibold text-slate-800 mb-2'>{info.title}</h3>
                                            {info.details.map((detail, detailIndex) => (
                                                <p key={detailIndex} className='text-slate-600'>
                                                    {detail}
                                                </p>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Map Placeholder */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className='mt-8 bg-slate-100 rounded-lg p-8 text-center'>
                                <MapPin className='h-12 w-12 text-yellow-500 mx-auto mb-4' />
                                <h3 className='text-lg font-semibold text-slate-800 mb-2'>Visit Our Facility</h3>
                                <p className='text-slate-600'>Schedule a visit to see our state-of-the-art manufacturing facility</p>
                                <button className='mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg transition-colors duration-300'>Book a Tour</button>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className='bg-slate-50 rounded-lg p-8'>
                            <h2 className='text-3xl font-bold text-slate-800 mb-6'>Send us a Message</h2>

                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <div>
                                        <label className='block text-sm font-medium text-slate-700 mb-2'>Name *</label>
                                        <input
                                            type='text'
                                            name='name'
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300'
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-sm font-medium text-slate-700 mb-2'>Email *</label>
                                        <input
                                            type='email'
                                            name='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300'
                                        />
                                    </div>
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <div>
                                        <label className='block text-sm font-medium text-slate-700 mb-2'>Company</label>
                                        <input
                                            type='text'
                                            name='company'
                                            value={formData.company}
                                            onChange={handleChange}
                                            className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300'
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-sm font-medium text-slate-700 mb-2'>Phone</label>
                                        <input
                                            type='tel'
                                            name='phone'
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-slate-700 mb-2'>Subject *</label>
                                    <select
                                        name='subject'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300'>
                                        <option value=''>Select a subject</option>
                                        <option value='general'>General Inquiry</option>
                                        <option value='quote'>Request Quote</option>
                                        <option value='cnc'>CNC Machining Services</option>
                                        <option value='vmc'>VMC Operations</option>
                                        <option value='quality'>Quality Assurance</option>
                                        <option value='partnership'>Partnership Opportunities</option>
                                    </select>
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-slate-700 mb-2'>Message *</label>
                                    <textarea
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        required
                                        placeholder='Please describe your project requirements, specifications, and any other relevant details...'
                                        className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none'
                                    />
                                </div>

                                <motion.button
                                    type='submit'
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className='w-full bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300'>
                                    <Send className='h-5 w-5' />
                                    <span>Send Message</span>
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quick Contact Cards */}
            {/* <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Quick Contact Options</h2>
            <p className="text-xl text-slate-600">Multiple ways to reach us for your convenience</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Emergency Support',
                description: 'For urgent manufacturing requirements',
                contact: '+91 9876543210',
                action: 'Call Now',
                color: 'bg-red-500 hover:bg-red-600'
              },
              {
                title: 'Sales Inquiry',
                description: 'For new projects and quotations',
                contact: 'sales@slytechnosolutions.com',
                action: 'Email Us',
                color: 'bg-blue-500 hover:bg-blue-600'
              },
              {
                title: 'Technical Support',
                description: 'For technical specifications and support',
                contact: 'support@slytechnosolutions.com',
                action: 'Get Support',
                color: 'bg-green-500 hover:bg-green-600'
              }
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{option.title}</h3>
                <p className="text-slate-600 mb-4">{option.description}</p>
                <p className="text-slate-700 font-medium mb-4">{option.contact}</p>
                <button className={`${option.color} text-white px-6 py-2 rounded-lg transition-colors duration-300`}>
                  {option.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
        </div>
    );
};

export default Contact;
