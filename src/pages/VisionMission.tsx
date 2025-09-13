import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Zap } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const VisionMission = () => {
    return (
        <div className='min-h-screen'>
            <HeroSection title='Vision & Mission' subtitle='Driving Excellence Through Purpose and Direction' />

            <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
                        {/* Vision */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='text-center'>
                            <div className='bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6'>
                                <Eye className='h-10 w-10 text-white' />
                            </div>
                            <h2 className='text-3xl font-bold text-slate-800 mb-6'>Our Vision</h2>
                            <div className='bg-blue-50 rounded-lg p-8'>
                                <p className='text-lg text-slate-700 leading-relaxed'>
                                    Our vision is to become a global leader in precision manufacturing, setting new standards for quality, reliability, and customer satisfaction. 
                                    <br/>We aim to continuously innovate and expand our capabilities, providing solutions that empower industries and contribute to technological advancements.
                                </p>
                            </div>
                        </motion.div>

                        {/* Mission */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className='text-center'>
                            <div className='bg-gradient-to-br from-yellow-500 to-yellow-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6'>
                                <Target className='h-10 w-10 text-white' />
                            </div>
                            <h2 className='text-3xl font-bold text-slate-800 mb-6'>Our Mission</h2>
                            <div className='bg-yellow-50 rounded-lg p-8'>
                                <p className='text-lg text-slate-700 leading-relaxed'>
                                    Our mission is to deliver precision-engineered products that exceed customer expectations, foster long-term partnerships, and contribute to the growth and success
                                    of our clients' businesses. We strive to maintain the highest standards of manufacturing, provide a dynamic and fulfilling work environment for our employee and
                                    contribute positively to the communities we operate.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className='py-20 bg-slate-100'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='text-center mb-16'>
                        <h2 className='text-4xl font-bold text-slate-800 mb-4'>Our Core Values</h2>
                        <p className='text-xl text-slate-600'>The foundation of our success</p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {[
                            {
                                icon: <Award className='h-8 w-8' />,
                                title: 'Excellence',
                                description: 'Striving for perfection in every aspect of our operations',
                                color: 'from-blue-400 to-blue-600',
                            },
                            {
                                icon: <Zap className='h-8 w-8' />,
                                title: 'Innovation',
                                description: 'Embracing new technologies and creative solutions',
                                color: 'from-yellow-400 to-yellow-600',
                            },
                            {
                                icon: <Target className='h-8 w-8' />,
                                title: 'Precision',
                                description: 'Delivering accurate and reliable components consistently',
                                color: 'from-green-400 to-green-600',
                            },
                            {
                                icon: <Eye className='h-8 w-8' />,
                                title: 'Transparency',
                                description: 'Building trust through honest and open communication',
                                color: 'from-purple-400 to-purple-600',
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className='bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300'>
                                <div className={`bg-gradient-to-r ${value.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>{value.icon}</div>
                                <h3 className='text-xl font-semibold text-slate-800 mb-3'>{value.title}</h3>
                                <p className='text-slate-600'>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Goals Section */}
            {/* <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='text-center mb-16'>
                        <h2 className='text-4xl font-bold text-slate-800 mb-4'>Our Strategic Goals</h2>
                        <p className='text-xl text-slate-600'>Roadmap to achieving our vision</p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {[
                            {
                                title: 'Market Leadership',
                                description: 'Establish SLY Techno Solutions as a market leader in precision components manufacturing across targeted industry segments.',
                                timeline: '2024-2026',
                            },
                            {
                                title: 'Technology Advancement',
                                description: 'Continuously upgrade our manufacturing capabilities with the latest CNC and VMC technologies to maintain competitive edge.',
                                timeline: '2024-2025',
                            },
                            {
                                title: 'Quality Certification',
                                description: 'Achieve industry-standard certifications including ISO 9001:2015 and AS9100 for aerospace components.',
                                timeline: '2024-2025',
                            },
                            {
                                title: 'Global Expansion',
                                description: 'Expand our client base internationally while maintaining strong relationships with domestic partners.',
                                timeline: '2025-2027',
                            },
                        ].map((goal, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className='bg-slate-50 rounded-lg p-6 border-l-4 border-yellow-500'>
                                <div className='flex justify-between items-start mb-3'>
                                    <h3 className='text-xl font-semibold text-slate-800'>{goal.title}</h3>
                                    <span className='text-sm text-yellow-600 bg-yellow-100 px-2 py-1 rounded'>{goal.timeline}</span>
                                </div>
                                <p className='text-slate-600'>{goal.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default VisionMission;
