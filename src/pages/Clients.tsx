import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Star, HandHeart, TrendingUp } from 'lucide-react';
import HeroSection from '../components/HeroSection';

import avasarala from '../assets/clients/avasarala.jpg';
import fiyvi from '../assets/clients/fiyvi.jpg';
import gostolin from '../assets/clients/gostolin.jpg';
import indomim from '../assets/clients/indo-mim.jpg';
import innomac from '../assets/clients/innomac.jpg';
import slvr from '../assets/clients/slvr.jpg';

const Clients = () => {
    const industries = [
        {
            name: 'Aerospace',
            icon: <Building2 className='h-8 w-8' />,
            description: 'Precision components for aircraft engines and structural parts',
            projects: '15+ Projects',
            color: 'from-blue-500 to-blue-600',
        },
        {
            name: 'Construction',
            icon: <Building2 className='h-8 w-8' />,
            description: 'Heavy-duty components for construction machinery and equipment',
            projects: '25+ Projects',
            color: 'from-yellow-500 to-yellow-600',
        },
        {
            name: 'Earth Moving',
            icon: <Building2 className='h-8 w-8' />,
            description: 'Robust parts for excavators, bulldozers, and mining equipment',
            projects: '20+ Projects',
            color: 'from-green-500 to-green-600',
        },
        {
            name: 'Tooling',
            icon: <Building2 className='h-8 w-8' />,
            description: 'Custom tooling solutions for various manufacturing processes',
            projects: '30+ Projects',
            color: 'from-purple-500 to-purple-600',
        },
    ];

    const clientLogos = [
        { name: 'INDO-MIM', img: indomim, sector: 'Manufacturing' },
        { name: 'gostolin', img: gostolin, sector: 'Manufacturing' },
        { name: 'Flyvi', img: fiyvi, sector: 'Aviation and Aerospace' },
        { name: 'AVASARALA', img: avasarala, sector: 'Automation' },
        { name: 'INNOMAC', img: innomac, sector: 'Construction' },
        { name: 'SLVR', img: slvr, sector: 'Manufacturing' },
    ];

    const testimonials = [
        {
            quote: 'SLY Techno Solutions has consistently delivered precision components that exceed our quality standards. Their attention to detail and commitment to deadlines make them our preferred manufacturing partner.',
            author: 'Rajesh Gupta',
            position: 'Senior Procurement Manager',
            company: 'AeroTech Industries',
        },
        {
            quote: 'The quality of machined parts we receive from SLY Techno is exceptional. Their team understands our requirements perfectly and always delivers on time.',
            author: 'Priya Sharma',
            position: 'Production Director',
            company: 'BuildMax Corporation',
        },
        {
            quote: 'Working with SLY Techno Solutions has been a game-changer for our manufacturing operations. Their precision and reliability are unmatched in the industry.',
            author: 'Amit Kumar',
            position: 'Operations Head',
            company: 'TerraMove Solutions',
        },
    ];

    return (
        <div className='min-h-screen'>
            <HeroSection title='Our Esteemed Customers' subtitle='Trusted Partners Across Industries' />

            {/* Industries We Serve */}
            {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Industries We Serve</h2>
            <p className="text-xl text-slate-600">Delivering precision solutions across multiple sectors</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mx-auto mb-4 text-white`}>
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{industry.name}</h3>
                <p className="text-slate-600 mb-4">{industry.description}</p>
                <div className="bg-slate-100 rounded-full px-4 py-2 text-sm font-medium text-slate-700">
                  {industry.projects}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

            {/* Client Logos */}
            <section className='py-20 bg-slate-100'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='text-center mb-16'>
                        <h2 className='text-4xl font-bold text-slate-800 mb-4'>Our Valued Clients</h2>
                        <p className='text-xl text-slate-600'>Building lasting partnerships with industry leaders</p>
                    </motion.div>

                    <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
                        {clientLogos.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className='bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center'>
                                <div className='relative w-16 h-16 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg overflow-hidden mx-auto mb-3'>
                                    <img src={client?.img ?? ''} alt={client?.name ?? ''} className='absolute inset-0 w-full h-full object-cover' />
                                </div>

                                <h4 className='text-lg font-semibold text-slate-800 mb-2'>{client?.name ?? ''}</h4>
                                <span className='text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full'>{client?.sector ?? ''}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-slate-600">Testimonials from satisfied customers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-slate-50 rounded-lg p-6 relative"
              >
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-slate-800">{testimonial.author}</h4>
                  <p className="text-sm text-slate-600">{testimonial.position}</p>
                  <p className="text-sm text-yellow-600 font-medium">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

            {/* Statistics */}
            {/* <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-slate-300">Building success through partnership excellence</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <HandHeart className="h-8 w-8" />, number: '50+', label: 'Happy Clients' },
              { icon: <Star className="h-8 w-8" />, number: '200+', label: 'Projects Completed' },
              { icon: <TrendingUp className="h-8 w-8" />, number: '99%', label: 'Client Retention' },
              { icon: <Building2 className="h-8 w-8" />, number: '4', label: 'Industries Served' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-yellow-500 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

            {/* CTA Section */}
            <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h2 className='text-4xl font-bold text-slate-800 mb-6'>Ready to Join Our Success Stories?</h2>
                        <p className='text-xl text-slate-600 mb-8'>Let's discuss how we can help solve your precision manufacturing challenges</p>
                        <button className='bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105'>
                            Start Your Project Today
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Clients;
