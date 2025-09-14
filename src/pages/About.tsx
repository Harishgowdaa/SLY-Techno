import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, User } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const About = () => {
    return (
        <div className='min-h-screen'>
            <HeroSection title='About SLY Techno Solutions' subtitle='Your Trusted Partner in Precision Manufacturing' />

            <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <h2 className='text-4xl font-bold text-slate-800 mb-6'>Our Story</h2>
                            <div className='prose prose-lg text-slate-600'>
                                <p className='mb-4'>
                                    A Group Company, established in March 2024, is a leading company specializing in the manufacturing and supply of precision machined components, jigs & fixtures for
                                    the Aerospace Industry, construction and earth-moving equipment, as well as spare parts and special tooling solutions. With a strong commitment to quality and
                                    innovation, we have established ourselves as a trusted name in the industry.
                                </p>
                                <p className='mb-4'>
                                    Our state-of-the-art machinery and experienced technical staff enable us to deliver high-quality solutions to our clients. By combining advanced technology with
                                    expertise, we ensure reliable performance, precision, and customer satisfaction in every project we undertake.
                                </p>
                                {/* <p>
                                  At SLY Techno Solutions, we believe that precision is not just about measurements—it's about 
                                  understanding our clients' needs and delivering solutions that exceed expectations. Our 
                                  dedicated team of professionals works tirelessly to ensure every project meets our high 
                                  standards of excellence.
                                </p> */}
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className='bg-slate-100 rounded-lg p-8'>
                            <h3 className='text-2xl font-bold text-slate-800 mb-6'>Company Information</h3>
                            <div className='space-y-6'>
                                <div className='flex items-start space-x-4'>
                                    <MapPin className='h-6 w-6 text-yellow-500 mt-1' />
                                    <div>
                                        <h4 className='font-semibold text-slate-800'>Factory Address</h4>
                                        <p className='text-slate-600'>
                                            SLY Techno Solutions
                                            <br />
                                            No. 07, Karivabanahalli, Thigalrapalya Main Road,
                                            <br />
                                            Peenya 2nd Stage,
                                            Bangalore - 560058
                                            <br />
                                            Karnataka, India
                                        </p>
                                    </div>
                                </div>

                                <div className='flex items-center space-x-4'>
                                    <User className='h-6 w-6 text-yellow-500' />
                                    <div>
                                        <h4 className='font-semibold text-slate-800'>Contact Person</h4>
                                        <p className='text-slate-600'>Mr. Shivanna</p>
                                    </div>
                                </div>

                                <div className='flex items-center space-x-4'>
                                    <Phone className='h-6 w-6 text-yellow-500' />
                                    <div>
                                        <h4 className='font-semibold text-slate-800'>Phone</h4>
                                        <p className='text-slate-600'>+91 9902880945</p>
                                    </div>
                                </div>

                                <div className='flex items-center space-x-4'>
                                    <Mail className='h-6 w-6 text-yellow-500' />
                                    <div>
                                        <h4 className='font-semibold text-slate-800'>Email</h4>
                                        <p className='text-slate-600 font-bold'>sales@slytechnosolutions.com</p>
                                        <p className='text-slate-600'>shivanna@slytechnosolutions.com</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className='py-20 bg-slate-100'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='text-center mb-16'>
                        <h2 className='text-4xl font-bold text-slate-800 mb-4'>Our Values</h2>
                        <p className='text-xl text-slate-600'>The principles that guide everything we do</p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {[
                            {
                                title: 'Precision',
                                description: 'We maintain the highest standards of accuracy in every component we manufacture.',
                                color: 'bg-blue-100 text-blue-600',
                            },
                            {
                                title: 'Innovation',
                                description: 'We continuously invest in cutting-edge technology and innovative solutions.',
                                color: 'bg-yellow-100 text-yellow-600',
                            },
                            {
                                title: 'Reliability',
                                description: 'Our clients trust us to deliver consistent quality on time, every time.',
                                color: 'bg-green-100 text-green-600',
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className='bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300'>
                                <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                    <span className='text-2xl font-bold'>{value.title[0]}</span>
                                </div>
                                <h3 className='text-xl font-semibold text-slate-800 mb-3'>{value.title}</h3>
                                <p className='text-slate-600'>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
