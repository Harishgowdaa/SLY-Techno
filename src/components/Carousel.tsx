import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';

const images = [img1, img2, img3];

const Carousel: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setCurrent(prev => (prev + 1) % images.length);
        }, 2500);
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [current]);

    const goToPrev = () => {
        setCurrent(prev => (prev - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrent(prev => (prev + 1) % images.length);
    };

    return (
        <div className='absolute inset-0 w-full h-full z-0'>
            {images.map((img, idx) => (
                <img
                    key={idx}
                    src={img}
                    alt={`carousel-${idx}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${current === idx ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}
            <button className='absolute left-6 top-1/2 -translate-y-1/2 bg-slate-900/40 text-white rounded-full p-2 hover:bg-yellow-500 hover:text-slate-900 transition z-10' onClick={goToPrev}>
                <ChevronLeft className='w-8 h-8' />
            </button>
            <button className='absolute right-6 top-1/2 -translate-y-1/2 bg-slate-900/40 text-white rounded-full p-2 hover:bg-yellow-500 hover:text-slate-900 transition z-10' onClick={goToNext}>
                <ChevronRight className='w-8 h-8' />
            </button>
            <div className='absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 opacity-60 pointer-events-none' />
        </div>
    );
};

export default Carousel;
