"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion"


function Section2() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const values = [
    {
      id: '01',
      title: 'Integrity',
      description: 'We are committed to honesty and transparency in our services.',
    },
    {
      id: '02',
      title: 'Inclusivity',
      description: 'We cater to users of all backgrounds, orientations, and identities.',
    },
    {
      id: '03',
      title: 'Compassion',
      description: 'We listen and respond with care and understanding.',
    },
    {
      id: '04',
      title: 'Courage',
      description: 'We embrace challenges and strive for continuous improvement.',
    },
  ];

  // Update the current slide based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const scrollPosition = sliderRef.current.scrollLeft;
        const slideWidth = sliderRef.current.offsetWidth;
        const newSlideIndex = Math.round(scrollPosition / slideWidth);
        setCurrentSlide(newSlideIndex);
      }
    };

    const sliderElement = sliderRef.current;
    sliderElement.addEventListener('scroll', handleScroll);

    return () => {
      sliderElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="px-5 sm:px-8 md:px-14">
      <div className="w-full bg-white rounded-[50px] px-5 sm:px-0 py-10">
        <motion.h1
        
        initial={{ y: "10vw", opacity: 0 }}
        whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.15 } }}
        viewport={{ once: true, amount: 0.8 }}
        className="text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[54px] font-semibold text-[#202020] sm:text-center">
          Our Values
        </motion.h1>
        <motion.p
         initial={{ y: "10vw", opacity: 0 }}
         whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.25 } }}
         viewport={{ once: true, amount: 0.8 }}
        className="text-[14px] sm:text-[20px] lg:text-[26px] xl:text-[30px] text-black font-semibold sm:text-center py-2 xl:pt-4">
          Our Commitment to Your Journey
        </motion.p>
        <motion.p 
         initial={{ y: "10vw", opacity: 0 }}
         whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.25 } }}
         viewport={{ once: true, amount: 0.8 }}
        className="text-[14px] sm:text-[20px] lg:text-[26px] xl:text-[30px] text-black font-light sm:text-center pt-2 xl:pt-4 sm:px-10 md:px-[75px]">
          We believe finding a relationship is a meaningful quest. While we can&apos;t find your perfect partner, we bridge the gap with global matches tailored to your preferences and offer secure, enhanced communication options to help you build meaningful connections.
        </motion.p>

        {/* Conditional rendering based on screen size */}
        <div className="lg:hidden">
          {/* Scrollable Container with Snap Scrolling for smaller screens */}
          {/* <div
            ref={sliderRef}
            className="relative w-full pt-10 lg:pt-0 overflow-x-auto snap-x snap-mandatory"
          >
            <div className="flex gap-5 snap-x snap-mandatory">
              {values.map((value) => (
                <div
                  key={value.id}
                  className="w-full snap-center sm:p-5"
                  style={{ flex: '0 0 100%' }}
                >
                  <p className="text-[20px] sm:text-[26px] xl:text-[30px] text-black font-semibold sm:text-center">
                    {value.id}
                  </p>
                  <h1 className="text-[24px] sm:text-[30px] lg:text-[40px] xl:text-[54px] text-black font-semibold sm:text-center">
                    {value.title}
                  </h1>
                  <p className="text-[14px] sm:text-[18px] lg:text-[26px] xl:text-[30px] text-black font-light sm:text-center pe-8 sm:px-3 xl:px-8 pt-3 sm:pt-7">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div> */}



<div
  ref={sliderRef}
  className="relative w-full pt-10 lg:pt-0 overflow-x-auto snap-x snap-mandatory no-scrollbar"
>
  <div className="flex gap-5 snap-x snap-mandatory">
    {values.map((value) => (
      <div
        key={value.id}
        className="w-full snap-center sm:p-5"
        style={{ flex: '0 0 100%' }}
      >
        <motion.p
         initial={{ y: "10vw", opacity: 0 }}
         whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.25 } }}
         viewport={{ once: true, amount: 0.8 }}
        className="text-[20px] sm:text-[26px] xl:text-[30px] text-black font-semibold sm:text-center">
          {value.id}
        </motion.p>
        <motion.h1
        // initial={{ y: "10vw", opacity: 0 }}
        // whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.15 } }}
        // viewport={{ once: true, amount: 0.8 }}
        className="text-[24px] sm:text-[30px] lg:text-[40px] xl:text-[54px] text-black font-semibold sm:text-center">
          {value.title}
        </motion.h1>
        <motion.p
        //  initial={{ y: "10vw", opacity: 0 }}
        //  whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.25 } }}
        //  viewport={{ once: true, amount: 0.8 }}
        className="text-[14px] sm:text-[18px] lg:text-[26px] xl:text-[30px] text-black font-light sm:text-center pe-8 sm:px-3 xl:px-8 pt-3 sm:pt-7">
          {value.description}
        </motion.p>
      </div>
    ))}
  </div>
</div>



          {/* Slide Indicators for small screens */}
          <div className="flex sm:justify-center gap-2 sm:gap-4 mt-8">
  {values.map((_, index) => (
    <div
      key={index}
      className={`h-1 sm:h-2 ${index === currentSlide ? 'w-4 sm:w-8 bg-red-600' : 'w-2 sm:w-4 bg-gray-400'} rounded-full`}
    />
  ))}
</div>
        </div>

        {/* Grid layout for larger screens */}
        <div className="hidden lg:grid grid-cols-2 gap-4 pt-16">
          {values.map((value) => (
            <div key={value.id} className="p-5">
              <motion.p 
               initial={{ y: "10vw", opacity: 0 }}
               whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.25 } }}
               viewport={{ once: true, amount: 0.8 }}
              className="text-[26px] xl:text-[30px] text-black font-semibold text-center">
                {value.id}
              </motion.p>
              <motion.h1
              initial={{ y: "10vw", opacity: 0 }}
              whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.15 } }}
              viewport={{ once: true, amount: 0.8 }}
              className="text-[40px] xl:text-[54px] text-black font-semibold text-center">
                {value.title}
              </motion.h1>
              <motion.p 
               initial={{ y: "10vw", opacity: 0 }}
               whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.25 } }}
               viewport={{ once: true, amount: 0.8 }}
              className="text-[26px] xl:text-[30px] text-black font-light text-center px-3 xl:px-8 pt-7">
                {value.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section2;