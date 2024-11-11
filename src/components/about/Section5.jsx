"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";


function Section5() {
  return (
    <div className=" px-6 md:px-14">
      <div className="w-full flex rounded-[20px] flex-col sm:flex-row   ">
        <div className="sm:w-[30%] rounded-l-[20px]">
          <div className="w-full hidden sm:block sm:h-full rounded-l-[20px]  bg-white">
            <motion.img
              // initial={{ y: "10vw", opacity: 0 }}
              // whileInView={{
              //   y: 1,
              //   opacity: 1,
              //   transition: { type: "spring", stiffness: 50, delay: 0.15 },
              // }}
              // viewport={{ once: true, amount: 0.8 }}
              src="/asset/reason.svg"
              className="w-full h-full "
            />
          </div>
          <div className="w-full sm:hidden block ">
            <motion.img
              // initial={{ y: "10vw", opacity: 0 }}
              // whileInView={{
              //   y: 1,
              //   opacity: 1,
              //   transition: { type: "spring", stiffness: 50, delay: 0.15 },
              // }}
              // viewport={{ once: true, amount: 0.8 }}
              src="/asset/reason_small.svg"
              className=" w-full h-full object-top object-cover"
            />
          </div>
        </div>
        <div className="w-full sm:w-[70%] rounded-b-[20px] sm:rounded-b-[0px] sm:rounded-r-[20px] p-2  md:p-3 lg:p-8 xl:p-10 bg-white px-5 sm:px-0">
          <motion.h1 
               initial={{ y: "10vw", opacity: 0 }}
               whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.15 } }}
               viewport={{ once: true, amount: 0.8 }}
          className=" text-[24px] lg:text-[28px] xl:text-[38px] 2xl:text-[54px] text-[#202020] font-medium sm:font-semibold pb-4 sm:pb-1 md:pb-4 xl:pb-6 py-4 sm:py-0 ">
            The Reason
          </motion.h1>
          <motion.p
            initial={{ y: "10vw", opacity: 0 }}
            whileInView={{
              y: 1,
              opacity: 1,
              transition: { type: "spring", stiffness: 50, delay: 0.25 },
            }}
            viewport={{ once: true, amount: 0.8 }}
            className=" text-[14px] lg:text-[18px] xl:text-[24px] 2xl:text-[30px] text-[#202020] font-light leading-[140%] sm:leading-0"
          >
            In my early 30s, I used various matchmaking and dating apps to find
            a partner. While I encountered many profiles, the limited ways to
            interact didn’t resonate with me. Social media apps, with their
            enhanced communication features, allowed for better interaction.
            However, many users there might be married or not seeking a match.
            <br />
            This led to the idea of Firstlook—a social app with communication
            features like social media, but tailored for singles. It’s an
            ID-verified platform, ensuring every profile is authentic.
          </motion.p>
          <div>
            <motion.p
              initial={{ y: "10vw", opacity: 0 }}
              whileInView={{
                y: 1,
                opacity: 1,
                transition: { type: "spring", stiffness: 50, delay: 0.25 },
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="alex-brush-regular text-[24px] lg:text-[32px] xl:text-[42px] 2xl:text-[48px] text-black pt-3 sm:pt-1 md:pt-4 lg:pt-6"
            >
              Shibin Sebastian
            </motion.p>
            <motion.p
              initial={{ y: "10vw", opacity: 0 }}
              whileInView={{
                y: 1,
                opacity: 1,
                transition: { type: "spring", stiffness: 50, delay: 0.25 },
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="text-[12px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text-black font-light"
            >
              Shibin Sebastian, Founder & CEO
            </motion.p>
            <motion.div 
             initial={{ y: "10vw", opacity: 0 }}
             whileInView={{
               y: 1,
               opacity: 1,
               transition: { type: "spring", stiffness: 50, delay: 0.15 },
             }}
             viewport={{ once: true, amount: 0.8 }}
            className="w-6 sm:w-full h-full py-4 text-start sm:py-0 sm:mt-5">
              {/* <motion.img
                initial={{ y: "10vw", opacity: 0 }}
                whileInView={{
                  y: 1,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 50, delay: 0.15 },
                }}
                viewport={{ once: true, amount: 0.8 }}
                src="/asset/linkedin.svg"
                className="pt-4 size-9 lg:size-auto"
              /> */}
              
              <FaLinkedin className="size:4 lg:size-6"/>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
