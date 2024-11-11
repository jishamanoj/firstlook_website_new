
"use client"
import React from "react";
import { motion } from "framer-motion";

function Section4() {
  return (
    <div className="w-full py-14 sm:py-28 px-10 sm:px-0">
      <motion.img
        initial={{ y: "10vw", opacity: 0 }}
        whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.15 } }}
        viewport={{ once: true, amount: 0.8 }}
        src="/asset/icon1.svg"
        className="sm:m-auto sm:pb-4 size-10 sm:size-auto"
      />
      <motion.h1
      
        initial={{ y: "10vw", opacity: 0 }}
        whileInView={{
          y: 1,
          opacity: 1,
          transition: { type: "spring", stiffness: 50, delay: 0.15 },
        }}
        viewport={{ once: true, amount: 0.8 }}
        className="text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[54px] font-medium text-[#202020] sm:font-semibold sm:px-[40px] xl:px-[226px] pt-[20px] sm:pt-[20px] sm:text-center leading-[120%]"
      >
        The Core Team Driving <br />
        Our Vision Forward
      </motion.h1>
      <motion.p 
        initial={{ y: "10vw", opacity: 0 }}
        whileInView={{
          y: 1,
          opacity: 1,
          transition: { type: "spring", stiffness: 50, delay: 0.25 },
        }}
        viewport={{ once: true, amount: 0.8 }}

      className="text-[14px] sm:text-[18px] lg:text-[26px] xl:text-[30px] text-[#202020] font-light sm:px-[40px] md:px-[150px] lg:px-[200px] xl:px-[240px]  py-[14px] xl:py-[40px] sm:text-center leading-[140%]">
        A dedicated team of tech professionals, passionately crafting an
        exceptional product and building a brand that stands out
      </motion.p>
    </div>
  );
}

export default Section4;
