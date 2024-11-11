"use client"
import React from "react";
import { motion } from "framer-motion"


function Section1() {
  return (
    <div className="w-full font-antonia">
      <motion.h1
       initial={{ y: "10vw", opacity: 0 }}
       whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.15 } }}
       viewport={{ once: true, amount: 0.8 }}
      className="font-antonia text-[24px] font-medium sm:text-[30px] lg:text-[40px] xl:text-[54px] text-[#202020] sm:font-semibold px-[40px] sm:px-[60px] lg:px-[150px] xl:px-[226px] pt-[40px] sm:pt-[50px] xl:pt-[90px] sm:text-center">
        Revolutionizing How Singles Find Meaningful Connections
      </motion.h1>
      < motion.p 
       initial={{ y: "10vw", opacity: 0 }}
       whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.25 } }}
       viewport={{ once: true, amount: 0.8 }}
      className="text-[14px] sm:text-[20px] lg:text-[24px] xl:text-[30px] text-[#202020] font-light px-[40px] sm:px-[60px]  xl:px-[181px]  py-[14px] sm:py-[40px] sm:text-center leading-[140%]">
        We recognize that no existing platform fully grasps the unique needs and
        emotions of individuals searching for a meaningful connection.
        <br /> Our vision is to create the most interactive platform for
        singles, dedicated to connecting hearts and fostering relationships that
        matter.
      </motion.p>
    </div>
  );
}

export default Section1;
