import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Mail } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';

const Team = () => {
    const teamMembers = [
        {
            name: 'Shailaja N',
            role: 'Proprietor',
            experience: '4+ Years of Experience in Accounts & Front-End Sales',
            // expertise: 'Strategic planning, business development, and quality management',
            // description: 'Visionary leader with extensive experience in manufacturing operations and client relationship management.',
        },
        {
            name: 'Shivanna M',
            role: '',
            experience: '18+ years of experience, contributes to Customer Visits, Technical Discussions, Process Management & Implementation.',
            // expertise: 'Advanced machining, process optimization, and technology integration',
            // description: 'Technology expert specializing in CNC programming and manufacturing process improvements.',
        },
        {
            name: 'Chetan V',
            role: '',
            experience: '3+ years of experience, contributes to our engineering and process improvement initiatives.',
            // expertise: 'Production planning, quality control, and team leadership',
            // description: 'Experienced production manager ensuring efficient operations and maintaining quality standards.',
        },
        {
            name: 'Munishyamireddy B N',
            role: '',
            experience: '5+ years of experience',
            expertise: 'Munishyami Reddy plays a crucial role in our production and Quality Control.',
            // description: 'Quality expert with PhD in Materials Engineering, ensuring precision and compliance.',
        },
        {
            name: 'K Santosh',
            role: '',
            experience: '16+ years of experience in two-wheeler sales in the automobile industry',
            expertise: 'Santosh brings valuable insights to our business development',
            // description: 'Skilled craftsman with expertise in handling complex machining projects with tight tolerances.',
        },
        // {
        //     name: 'Kavya Reddy',
        //     role: 'Business Development Manager',
        //     experience: '7+ years in B2B sales',
        //     // expertise: 'Client acquisition, relationship management, and market analysis',
        //     // description: 'Dynamic professional focused on expanding business relationships and identifying growth opportunities.',
        // },
    ];

    return (
        <div className='min-h-screen'>
            <HeroSection title='Our Team' subtitle='Meet the Experts Behind Our Success' />

            {/* Team Introduction */}
            <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-16'>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <h2 className='text-4xl font-bold text-slate-800 mb-6'>Experienced Professionals Driving Excellence</h2>
                            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
                                We pride ourselves on our highly skilled and experienced technical staff. Our team consists of dedicated professionals with a deep understanding of precision
                                engineering and the manufacturing industry. With 20+ years of expertise, our technical staff ensures that each product meets the highest quality standards and is
                                delivered on time.
                            </p>
                        </motion.div>
                    </div>

                    {/* Team Stats */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
                        {[
                            { icon: <Users className='h-8 w-8' />, stat: '15+', label: 'Team Members' },
                            { icon: <Award className='h-8 w-8' />, stat: '50+', label: 'Years Combined Experience' },
                            { icon: <Clock className='h-8 w-8' />, stat: '24/7', label: 'Production Support' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className='bg-slate-100 rounded-lg p-8 text-center'>
                                <div className='text-yellow-500 mb-4 flex justify-center'>{item.icon}</div>
                                <div className='text-3xl font-bold text-slate-800 mb-2'>{item.stat}</div>
                                <div className='text-slate-600'>{item.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Team Members */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-slate-100'>
                                <div className='text-center mb-4'>
                                    <div className='w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                                        <span className='text-2xl font-bold text-white'>
                                            {member.name
                                                .split(' ')
                                                .map(n => n[0])
                                                .join('')}
                                        </span>
                                    </div>
                                    <h3 className='text-xl font-semibold text-slate-800 mb-1'>{member.name}</h3>
                                    <p className='text-yellow-600 font-medium mb-2'>{member.role}</p>
                                    <p className='text-sm text-slate-500 mb-3'>{member.experience}</p>
                                </div>

                                <div className='mb-4 text-center'>
                                    {/* <h4 className='text-sm font-semibold text-slate-800 mb-2'>Expertise:</h4> */}
                                    <p className='text-sm text-slate-600 mb-3'>{member.expertise}</p>
                                </div>

                                {/* <p className='text-sm text-slate-600 mb-4'>{member.description}</p>  */}

                                {/* <div className='flex justify-center'>
                                    <button className='flex items-center space-x-1 text-yellow-600 hover:text-yellow-700 transition-colors duration-200'>
                                        <Mail className='h-4 w-4' />
                                        <span className='text-sm'>Contact</span>
                                    </button>
                                </div> */}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Culture */}
            <section className='py-20 bg-slate-100'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='text-center mb-16'>
                        <h2 className='text-4xl font-bold text-slate-800 mb-4'>Our Team Culture</h2>
                        <p className='text-xl text-slate-600'>Values that unite us and drive our success</p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {[
                            {
                                title: 'Collaboration',
                                description: 'We work together, sharing knowledge and supporting each other to achieve common goals.',
                                color: 'bg-blue-500',
                            },
                            {
                                title: 'Innovation',
                                description: 'We encourage creative thinking and embrace new ideas to solve complex challenges.',
                                color: 'bg-green-500',
                            },
                            {
                                title: 'Excellence',
                                description: 'We set high standards for ourselves and continuously strive to exceed expectations.',
                                color: 'bg-yellow-500',
                            },
                            {
                                title: 'Integrity',
                                description: 'We maintain honesty, transparency, and ethical practices in all our interactions.',
                                color: 'bg-purple-500',
                            },
                        ].map((culture, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className='bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300'>
                                <div className={`w-12 h-12 ${culture.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                                    <span className='text-white font-bold text-lg'>{culture.title[0]}</span>
                                </div>
                                <h3 className='text-lg font-semibold text-slate-800 mb-3'>{culture.title}</h3>
                                <p className='text-slate-600 text-sm'>{culture.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
