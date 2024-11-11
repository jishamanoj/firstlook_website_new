"use client";
import React from "react";
import { motion } from "framer-motion";

function Section7() {
  return (
    <div className="px-6 sm:px-14 lg:px-[200px] xl:px-[250px] 2xl:px-[350px] ">
      <motion.p
        initial={{ y: "10vw", opacity: 0 }}
        whileInView={{
          y: 1,
          opacity: 1,
          transition: { type: "spring", stiffness: 50, delay: 0.25 },
        }}
        viewport={{ once: true, amount: 0.8 }}
        className="text-[18px] sm:text-[20px] xl:text-[24px] 2xl:text-[36px] text-[#202020] text-center pb-6"
      >
        Discover what sets us apart
      </motion.p>
      <div className="w-full bg-white flex justify-center items-center py-5 sm:py-14 rounded-[20px] gap-10">
        <div className="flex justify-center items-center ">
          <img src="/asset/gov.svg" className="size-28 sm:size-36 lg:size-56" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[10px] sm:text-[16px] md:text-[16px] lg:text-[28px] text-[#202020]">
            a proud member of
          </p>
          <div>
            <img src="/asset/startup.svg" className="w-[100px] sm:w-[150px] md:w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
