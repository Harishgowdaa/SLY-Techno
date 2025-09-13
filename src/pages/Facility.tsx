import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Settings, Award, Zap } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';

const Facility = () => {
  const machinery = [
    {
      category: 'CNC Machines',
      items: [
        { name: 'CNC-01', model: 'JYOTHI–DX200-5B.', specs: 'Max Diameter: 250mm, Spindle Speed: 4000RPM' },
        { name: ' CNC-02', model: 'LMWLX20TL5', specs: 'Chuck Size: 200mm, Speed: 4000RPM' },
        // { name: 'CNC Mill-Turn', model: 'MAZAK INTEGREX i-100', specs: '4-Axis Simultaneous Machining' }
      ]
    },
    {
      category: 'VMC Machines',
      items: [
        { name: 'VMC-01', model: 'BFW-AGNI+V4TC24', specs: 'L*W: 900*450mm' },
        { name: 'VMC-02', model: 'MORISEIKI-MV65', specs: 'L*W: 1700*650mm' },
        { name: 'VMC-03', model: 'OKKMCV-1060', specs: 'L*W: 2500*1060mm' }
      ]
    },
    // {
    //   category: 'Precision Tools',
    //   items: [
    //     { name: 'Smart Tap Machine', model: 'Brother S500X1', specs: 'Tapping Range: M3-M20' },
    //     { name: 'CNC Drill Press', model: 'ALZMETALL AX3/S', specs: 'Drilling Capacity: 30mm' },
    //     { name: 'Threading Machine', model: 'EMCO E-Turn 120', specs: 'Thread Pitch: 0.2-6.0mm' }
    //   ]
    // },
    {
      category: 'Measuring Equipment & Gauges',
      items: [
        {  model: 'All Measuring Gauges', },
        {  model: 'Vernier calipers and surface table',  },
        {  model: ' External Support for Unique Measurement Solutions for VMM & CMM Measurement.',  },
      ]
    }
  ];

  const capabilities = [
    {
      title: 'Precision Machining',
      description: 'High-precision CNC machining with tolerances up to ±0.005mm',
      icon: <Settings className="h-8 w-8" />
    },
    {
      title: '5-Axis Manufacturing',
      description: 'Complex geometries and multi-sided machining in single setup',
      icon: <Factory className="h-8 w-8" />
    },
    {
      title: 'Quality Inspection',
      description: 'Comprehensive quality control with advanced measuring equipment',
      icon: <Award className="h-8 w-8" />
    },
    {
      title: 'Rapid Prototyping',
      description: 'Quick turnaround for prototype development and testing',
      icon: <Zap className="h-8 w-8" />
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection 
        title="Our Facility & Machinery"
        subtitle="State-of-the-art Equipment for Precision Manufacturing"
      />

      {/* Facility Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-slate-800 mb-6">World-Class Manufacturing Facility</h2>
              <p className="text-lg text-slate-600 mb-6">
                Our modern manufacturing facility spans over 15,000 square feet and houses 
                state-of-the-art CNC machines, VMC centers, and precision measurement equipment. 
                Located in the heart of Bangalore's industrial district, our facility is designed 
                to optimize workflow efficiency and maintain the highest quality standards.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                With climate-controlled environments, dedicated quality control areas, and 
                advanced material handling systems, we ensure consistent precision across 
                all manufacturing processes. Our facility operates with strict adherence to 
                industrial safety standards and environmental regulations.
              </p>
              {/* <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-100 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">15,000</div>
                  <div className="text-slate-600">Sq. Ft. Facility</div>
                </div>
                <div className="text-center p-4 bg-slate-100 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">20+</div>
                  <div className="text-slate-600">CNC Machines</div>
                </div>
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Key Features</h3>
              <ul className="space-y-4">
                {[
                  'Climate-controlled manufacturing environment',
                  '24/7 security and monitoring systems',
                  'Dedicated quality control laboratory',
                  'Advanced material storage and handling',
                  'CAD/CAM programming workstations',
                  'Tool crib and maintenance workshop',
                  'Employee training and safety facilities'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Capabilities */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Capabilities</h2>
            <p className="text-xl text-slate-600">Advanced manufacturing solutions for diverse industries</p>
          </motion.div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {capabilities.map((capability, index) => (
              <Card
                key={index}
                title={capability.title}
                description={capability.description}
                icon={capability.icon}
                delay={index * 0.1}
              />
            ))}
          </div> */}
        </div>
      </section>

      {/* Machinery Details */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Equipment Portfolio</h2>
            <p className="text-xl text-slate-600">Comprehensive range of precision manufacturing equipment</p>
          </motion.div>

          <div className="space-y-12">
            {machinery.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                  {category.category}
                </h3>
                <div className={`grid grid-cols-1 md:grid-cols-2 ${category?.category === 'CNC Machines' ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-6`}>
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                    >
                      <h4 className="text-lg font-semibold text-slate-800 mb-2">{item?.name ?? ''}</h4>
                      <p className="text-yellow-600 font-medium mb-3">{item?.model ?? ''}</p>
                      <p className="text-sm text-slate-600">{item?.specs ?? ''}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Quality Standards</h2>
            <p className="text-xl text-slate-600">Commitment to excellence through rigorous quality control</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'ISO 9001:2015',
                description: 'Quality Management System certification ensuring consistent quality delivery',
                status: 'In Progress'
              },
              {
                title: 'AS9100 Rev D',
                description: 'Aerospace quality management system for aviation, space, and defense',
                status: 'Planned'
              },
              {
                title: 'Six Sigma',
                description: 'Continuous improvement methodology for process optimization',
                status: 'Implemented'
              }
            ].map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 rounded-lg p-6 text-center border border-slate-200"
              >
                <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{standard.title}</h3>
                <p className="text-slate-600 mb-4">{standard.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  standard.status === 'Implemented' 
                    ? 'bg-green-100 text-green-800'
                    : standard.status === 'In Progress'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {standard.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facility;