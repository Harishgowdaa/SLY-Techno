import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, Factory, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import Carousel from '../components/Carousel';

const Home = () => {
    const highlights = [
        { icon: <Award className='h-8 w-8' />, label: 'Established 2024', desc: 'Excellence from Day One' },
        { icon: <Factory className='h-8 w-8' />, label: 'Aerospace', desc: 'Precision Components' },
        { icon: <Globe className='h-8 w-8' />, label: 'Construction', desc: 'Heavy Machinery Parts' },
        { icon: <Users className='h-8 w-8' />, label: 'Earth Moving', desc: 'Robust Solutions' },
    ];

    const services = [
        {
            title: 'CNC Machining',
            description: 'High-precision CNC machining services for complex components with tight tolerances.',
            icon: <Factory className='h-12 w-12' />,
        },
        {
            title: 'VMC Operations',
            description: 'Vertical machining center operations for efficient and accurate manufacturing.',
            icon: <Award className='h-12 w-12' />,
        },
        {
            title: 'Quality Assurance',
            description: 'Comprehensive quality control with advanced measuring tools and inspection processes.',
            icon: <Globe className='h-12 w-12' />,
        },
    ];

    return (
        <div className='min-h-screen'>
            {/* Hero Section */}
            <section className='relative min-h-[90vh] flex items-center justify-center overflow-hidden'>
                <Carousel />
                <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white'>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <motion.div className='text-yellow-500 text-lg font-semibold mb-4' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
                            Precision at the Core
                        </motion.div>

                        <motion.h1 className='text-5xl md:text-7xl font-bold mb-6' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                            SLY TECHNO
                            <span className='block text-yellow-500'>SOLUTIONS</span>
                        </motion.h1>

                        <motion.p
                            className='text-xl md:text-2xl mb-8 text-slate-200 max-w-3xl mx-auto'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}>
                            Precision Components Manufacturer and Solution Provider
                        </motion.p>

                        <motion.div
                            className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-16'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}>
                            <Link
                                to='/facility'
                                className='bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105'>
                                <span>Explore Services</span>
                                <ArrowRight className='h-5 w-5' />
                            </Link>
                            <Link
                                to='/contact'
                                className='border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300'>
                                <Play className='h-5 w-5' />
                                <span>Contact Us</span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Animated Background Elements */}
                <motion.div
                    className='absolute bottom-10 left-10 w-20 h-20 border border-yellow-500/30 rounded-full'
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                        scale: { duration: 2, repeat: Infinity },
                    }}
                />
                <motion.div
                    className='absolute top-20 right-20 w-16 h-16 border border-yellow-500/20 rounded-full'
                    animate={{
                        rotate: -360,
                        scale: [1, 0.9, 1],
                    }}
                    transition={{
                        rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
                        scale: { duration: 3, repeat: Infinity },
                    }}
                />
            </section>

            {/* Highlights Section */}
            {/* <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Expertise</h2>
            <p className="text-xl text-slate-600">Serving Multiple Industries with Precision Excellence</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-yellow-500 mb-4 flex justify-center">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{highlight.label}</h3>
                <p className="text-slate-600">{highlight.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

            {/* Services Section */}
            <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='text-center mb-16'>
                        <h2 className='text-4xl font-bold text-slate-800 mb-4'>Our Services</h2>
                        <p className='text-xl text-slate-600'>Comprehensive Manufacturing Solutions</p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {services.map((service, index) => (
                            <Card key={index} title={service.title} description={service.description} icon={service.icon} delay={index * 0.2} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-20 bg-slate-800 text-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h2 className='text-4xl font-bold mb-6'>Ready to Get Started?</h2>
                        <p className='text-xl text-slate-200 mb-8'>Let's discuss your precision manufacturing needs</p>
                        <Link
                            to='/contact'
                            className='bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-all duration-300 transform hover:scale-105'>
                            <span>Contact Us Today</span>
                            <ArrowRight className='h-5 w-5' />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
