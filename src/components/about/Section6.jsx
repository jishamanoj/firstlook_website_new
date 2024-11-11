"use client"
import React from 'react'
import { motion } from "framer-motion";


function Section6() {
  return (
    <div className='w-full flex justify-center items-center flex-col'>
       <div className='w-full px-6 md:px-14' >
       <img src="/asset/group.svg" alt="" className='w-full object-cover' />
       </div>
        <motion.p
            initial={{ y: "10vw", opacity: 0 }}
            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.25 } }}
            viewport={{ once: true, amount: 0.8 }}
        
        className='text-[14px] sm:text-[18px] lg:text-[26px] xl:text-[30px] text-[#202020] font-light px-6 md:px-[260px] text-center pt-5 md:pt-10'>A powerhouse of innovation and expertise. Our dedicated team crafts every aspect of our product from scratch, turning vision into reality.</motion.p>
        <motion.p 
            initial={{ y: "10vw", opacity: 0 }}
            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.25 } }}
            viewport={{ once: true, amount: 0.8 }}
        className='text-[14px] sm:text-[18px] lg:text-[26px] xl:text-[36px] text-black text-center py-7 md:py-10'>Love working with us? Join our team!</motion.p>
        <div className='w-full m-auto flex justify-center items-center'>
        <motion.button 
            initial={{ y: "10vw", opacity: 0 }}
            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.3 } }}
            viewport={{ once: true, amount: 0.8 }}
        className='w-[120px] md:w-[210px] h-[40px] md:h-[60px] rounded-[40px] bg-[#FE1940] text-white text-center font-semibold text-[14px] md:text-[21px]'>
        Explore
        </motion.button>
        </div>
    </div>
  )
}

export default Section6