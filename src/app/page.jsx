"use client"
import Image from "next/image";
import img1 from '../../public/asset/verified_img.png'
import reel1 from '../../public/asset/reel_1.png'
import proposal from '../../public/asset/propose_img.png'
import chat1 from '../../public/asset/chat_img.png'
import chat2 from '../../public/asset/chat_2.png'
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [loading, setLoading] = useState(true); // State for preloader

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const targetElement = document.getElementById('firstlook-section');

      if (targetElement && scrollPosition > targetElement.offsetTop) {
        setShowDownloadButton(true);
      } else {
        setShowDownloadButton(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Simulate loading time
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time as needed
  }, []);

  if (loading) {
    return <Preloader />; // Show preloader while loading
  }
  return (
    <>
      <div className="absolute z-50">
        <Navbar fontcolor='white' percent={90} />
      </div>
      <div className='font-antonia'>
        <div className="flex justify-center">
          <section className="w-[100%] h-screen relative">
            <video
              src="https://customer-szhp4q62skv7ggqy.cloudflarestream.com/b4c854847e789b7d1d0abf101ddb1048/downloads/default.mp4"
              autoPlay
              loop
              muted
              className="absolute sm:block hidden top-0 left-0 w-full h-full object-cover" />

            <video
              src="https://customer-szhp4q62skv7ggqy.cloudflarestream.com/b65eba711ff0bb252fd838a3a476349a/downloads/default.mp4"
              autoPlay
              loop
              muted
              className="absolute sm:hidden block top-0 left-0 w-full h-full object-cover" />

            <div className="relative z-10 mx-auto max-w-screen-xl px-6 sm:px-20 py-28 lg:py-36 lg:flex lg:items-center lg:px-16">
              <div className="max-w-2xl text-left mt-72 sm:mt-40 md:mt-54 lg:mt-36">
                <motion.h1
                  initial={{ y: "10vw", opacity: 0 }}
                  whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.15 } }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="text-3xl sm:text-5xl md:text-6xl text-white lg:text-7xl"
                >
                  Making Connections
                </motion.h1>
                <motion.h1
                  initial={{ y: "10vw", opacity: 0 }}
                  whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.2 } }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="text-3xl sm:text-5xl md:text-6xl text-white lg:text-7xl sm:mt-3"
                >
                  Effortless
                </motion.h1>

                <motion.p
                  initial={{ y: "10vw", opacity: 0 }}
                  whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.25 } }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="mt-2 lg:mt-5 max-w-xl text-base sm:text-xl md:text-2xl lg:text-3xl font-light text-white"
                >
                  Marriage &nbsp;.&nbsp; Relationship &nbsp;.&nbsp; Dating &nbsp;.&nbsp; Friendship
                </motion.p>

                <motion.div
                  initial={{ y: "10vw", opacity: 0 }}
                  whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.3 } }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="mt-4 lg:mt-7 flex flex-wrap gap-4 text-center"
                >
                  <Link href='/download'>
                    <button className='flex items-center bg-white sm:px-7 py-3 px-5 text-[14px] sm:text-[21px] text-black rounded-3xl gap-4'>
                      Download
                      <div className="sm:hidden block">
                        <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.777778 12.4444H10.1111C10.5407 12.4444 10.8889 12.7927 10.8889 13.2222C10.8889 13.616 10.5963 13.9414 10.2167 13.9929L10.1111 14H0.777778C0.348223 14 0 13.6518 0 13.2222C0 12.8285 0.292604 12.503 0.672238 12.4515L0.777778 12.4444ZM5.33891 0.00710025L5.44445 0C5.8382 0 6.16362 0.292604 6.21512 0.672238L6.22222 0.777778V8.75052L8.56095 6.41318C8.83708 6.13705 9.26918 6.11195 9.57366 6.33787L9.6609 6.41318C9.93703 6.68931 9.96213 7.1214 9.7362 7.42589L9.6609 7.51312L5.99442 11.1796C5.71829 11.4557 5.28619 11.4808 4.98171 11.2549L4.89447 11.1796L1.22799 7.51312C0.924252 7.20938 0.924252 6.71692 1.22799 6.41318C1.50412 6.13705 1.93622 6.11195 2.2407 6.33787L2.32794 6.41318L4.66667 8.75259V0.777778C4.66667 0.384019 4.95927 0.058602 5.33891 0.00710025Z" fill="#202020" />
                        </svg>
                      </div>
                      <div className="sm:block hidden">
                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 16H13C13.5523 16 14 16.4477 14 17C14 17.5063 13.6238 17.9247 13.1357 17.9909L13 18H1C0.447715 18 0 17.5523 0 17C0 16.4937 0.376205 16.0753 0.864306 16.0091L1 16ZM6.86431 0.00912889L7 0C7.50626 0 7.92465 0.376205 7.99087 0.864306L8 1V11.2507L11.0069 8.24551C11.362 7.89049 11.9175 7.85822 12.309 8.14869L12.4212 8.24551C12.7762 8.60054 12.8084 9.15609 12.518 9.54757L12.4212 9.65973L7.70711 14.3738C7.35208 14.7288 6.79653 14.7611 6.40505 14.4706L6.29289 14.3738L1.57885 9.65973C1.18832 9.2692 1.18832 8.63604 1.57885 8.24551C1.93387 7.89049 2.48942 7.85822 2.8809 8.14869L2.99306 8.24551L6 11.2533V1C6 0.493739 6.37621 0.0753454 6.86431 0.00912889Z" fill="#202020" />
                        </svg>
                      </div>
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex justify-center flex-col items-center lg:mt-16 mt-9 mb-9 lg:mb-16 px-8">
          <motion.h2 initial={{ y: "10vw", opacity: 0 }}
            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
            viewport={{ once: true, amount: 0.8 }} className="text-2xl sm:text-5xl lg:text-5xl xl:text-6xl md:max-w-4xl text-start sm:text-center font-medium">
            Where connections thrive and loneliness fades.
          </motion.h2>
          <motion.p initial={{ y: "10vw", opacity: 0 }}
            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
            viewport={{ once: true, amount: 0.8 }} className="font-light text-sm sm:text-xl xl:text-2xl md:max-w-[90%] lg:max-w-[80%] xl:max-w-4xl text-start sm:text-center mt-4 lg:mt-8">
            Offering a seamless journey from search to connection, chat, and beyond.
            With verified accounts and a trusted platform, finding your match is easier than ever. Welcome to a new era of matchmaking, where simplicity meets security, and love is just a click away. <br />Say goodbye to complexities and hello to simplicity.
          </motion.p>
        </div>

        <div className="flex-col lg:flex-row bg-white rounded-3xl w-[95%] xl:w-[1150px] mx-auto">
          <div className="flex relative">
            <div className="p-6 sm:p-16">
              <div className="mb-12 sm:block hidden">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.577 3.95424C29.9501 1.34859 34.0498 1.34859 36.4229 3.95424L39.4745 7.30498C40.6736 8.62189 42.3974 9.33587 44.1768 9.25271L48.7039 9.04115C52.2241 8.87661 55.1234 11.7757 54.9589 15.2962L54.7471 19.8232C54.664 21.6025 55.378 23.3262 56.6949 24.5255L60.0456 27.577C62.6515 29.9501 62.6515 34.0498 60.0456 36.4229L56.6949 39.4745C55.378 40.6736 54.664 42.3974 54.7471 44.1768L54.9589 48.7039C55.1234 52.2241 52.2241 55.1234 48.7039 54.9589L44.1768 54.7471C42.3974 54.664 40.6736 55.378 39.4745 56.6949L36.4229 60.0456C34.0498 62.6515 29.9501 62.6515 27.577 60.0456L24.5255 56.6949C23.3262 55.378 21.6025 54.664 19.8232 54.7471L15.2961 54.9589C11.7757 55.1234 8.87661 52.2241 9.04115 48.7039L9.25271 44.1768C9.33587 42.3974 8.62189 40.6736 7.30498 39.4745L3.95424 36.4229C1.34859 34.0498 1.34859 29.9501 3.95424 27.577L7.30498 24.5255C8.62189 23.3262 9.33587 21.6025 9.25271 19.8232L9.04115 15.2961C8.87661 11.7757 11.7757 8.87661 15.2962 9.04115L19.8232 9.25271C21.6025 9.33587 23.3262 8.62189 24.5255 7.30498L27.577 3.95424Z" stroke="#444444" stroke-width="4" />
                  <path d="M23.0266 31.9979L29.0089 37.9801L40.9733 26.0156" stroke="#444444" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className="mb-5 sm:hidden block">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.7885 1.97712C14.9751 0.674293 17.0249 0.674293 18.2115 1.97712L19.7372 3.65249C20.3368 4.31094 21.1987 4.66793 22.0884 4.62636L24.3519 4.52058C26.1121 4.4383 27.5617 5.88785 27.4794 7.64808L27.3736 9.91162C27.332 10.8012 27.689 11.6631 28.3475 12.2627L30.0228 13.7885C31.3257 14.9751 31.3257 17.0249 30.0228 18.2115L28.3475 19.7372C27.689 20.3368 27.332 21.1987 27.3736 22.0884L27.4794 24.3519C27.5617 26.1121 26.1121 27.5617 24.3519 27.4794L22.0884 27.3736C21.1987 27.332 20.3368 27.689 19.7372 28.3475L18.2115 30.0228C17.0249 31.3257 14.9751 31.3257 13.7885 30.0228L12.2627 28.3475C11.6631 27.689 10.8012 27.332 9.91162 27.3736L7.64806 27.4794C5.88785 27.5617 4.4383 26.1121 4.52058 24.3519L4.62636 22.0884C4.66793 21.1987 4.31094 20.3368 3.65249 19.7372L1.97712 18.2115C0.674293 17.0249 0.674293 14.9751 1.97712 13.7885L3.65249 12.2627C4.31094 11.6631 4.66793 10.8012 4.62636 9.91162L4.52058 7.64806C4.4383 5.88785 5.88785 4.4383 7.64808 4.52058L9.91162 4.62636C10.8012 4.66793 11.6631 4.31094 12.2627 3.65249L13.7885 1.97712Z" stroke="#444444" stroke-width="2" />
                  <path d="M11.5133 15.9989L14.5044 18.9901L20.4866 13.0078" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <motion.h1 initial={{ y: "10vw", opacity: 0 }}
                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                viewport={{ once: true, amount: 0.8 }} className="sm:block hidden text-2xl sm:text-5xl lg:text-5xl xl:text-6xl font-medium">Verified profiles, genuine <br className="md:block hidden" /> connections !
              </motion.h1>
              <motion.h1 initial={{ y: "10vw", opacity: 0 }}
                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                viewport={{ once: true, amount: 0.8 }} className="sm:hidden block text-2xl font-medium">Verified profiles, <br /> genuine connections !
              </motion.h1>
              <motion.p initial={{ y: "10vw", opacity: 0 }}
                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                viewport={{ once: true, amount: 0.8 }} className="mt-4 mb-6 sm:mt-10 sm:mb-12 text-sm sm:text-xl xl:text-2xl lg:max-w-[60%] xl:max-w-[38rem] font-light">Experience peace of mind with our stringent verification process. We require a valid government ID for every account, ensuring only genuine, active profiles can connect.</motion.p>
              <motion.div initial={{ y: "10vw", opacity: 0 }}
                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                viewport={{ once: true, amount: 0.8 }} className="flex justify-start sm:mb-0 mb-1.5">
                <div className="sm:block hidden">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12C1.5 14.7848 2.60625 17.4555 4.57538 19.4246C6.54451 21.3938 9.21523 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6 12C6 12.1989 6.07902 12.3896 6.21967 12.5303C6.36032 12.671 6.55109 12.75 6.75 12.75H15.4395L12.219 15.969C12.1493 16.0387 12.094 16.1215 12.0562 16.2126C12.0185 16.3037 11.9991 16.4014 11.9991 16.5C11.9991 16.5986 12.0185 16.6962 12.0562 16.7873C12.094 16.8785 12.1493 16.9612 12.219 17.031C12.2887 17.1007 12.3715 17.156 12.4626 17.1938C12.5537 17.2315 12.6514 17.2509 12.75 17.2509C12.8486 17.2509 12.9463 17.2315 13.0374 17.1938C13.1285 17.156 13.2113 17.1007 13.281 17.031L17.781 12.531C17.8508 12.4613 17.9063 12.3785 17.9441 12.2874C17.9819 12.1963 18.0013 12.0986 18.0013 12C18.0013 11.9013 17.9819 11.8036 17.9441 11.7125C17.9063 11.6214 17.8508 11.5386 17.781 11.469L13.281 6.96897C13.2113 6.89924 13.1285 6.84392 13.0374 6.80619C12.9463 6.76845 12.8486 6.74902 12.75 6.74902C12.6514 6.74902 12.5537 6.76845 12.4626 6.80619C12.3715 6.84392 12.2887 6.89924 12.219 6.96897C12.1493 7.0387 12.094 7.12149 12.0562 7.2126C12.0185 7.3037 11.9991 7.40136 11.9991 7.49997C11.9991 7.59859 12.0185 7.69624 12.0562 7.78735C12.094 7.87846 12.1493 7.96124 12.219 8.03097L15.4395 11.25H6.75C6.55109 11.25 6.36032 11.329 6.21967 11.4696C6.07902 11.6103 6 11.8011 6 12Z" fill="black" />
                  </svg>
                </div>
                <div className="sm:hidden block">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12C1.5 14.7848 2.60625 17.4555 4.57538 19.4246C6.54451 21.3938 9.21523 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6 12C6 12.1989 6.07902 12.3896 6.21967 12.5303C6.36032 12.671 6.55109 12.75 6.75 12.75H15.4395L12.219 15.969C12.1493 16.0387 12.094 16.1215 12.0562 16.2126C12.0185 16.3037 11.9991 16.4014 11.9991 16.5C11.9991 16.5986 12.0185 16.6962 12.0562 16.7873C12.094 16.8785 12.1493 16.9612 12.219 17.031C12.2887 17.1007 12.3715 17.156 12.4626 17.1938C12.5537 17.2315 12.6514 17.2509 12.75 17.2509C12.8486 17.2509 12.9463 17.2315 13.0374 17.1938C13.1285 17.156 13.2113 17.1007 13.281 17.031L17.781 12.531C17.8508 12.4613 17.9063 12.3785 17.9441 12.2874C17.9819 12.1963 18.0013 12.0986 18.0013 12C18.0013 11.9013 17.9819 11.8036 17.9441 11.7125C17.9063 11.6214 17.8508 11.5386 17.781 11.469L13.281 6.96897C13.2113 6.89924 13.1285 6.84392 13.0374 6.80619C12.9463 6.76845 12.8486 6.74902 12.75 6.74902C12.6514 6.74902 12.5537 6.76845 12.4626 6.80619C12.3715 6.84392 12.2887 6.89924 12.219 6.96897C12.1493 7.0387 12.094 7.12149 12.0562 7.2126C12.0185 7.3037 11.9991 7.40136 11.9991 7.49997C11.9991 7.59859 12.0185 7.69624 12.0562 7.78735C12.094 7.87846 12.1493 7.96124 12.219 8.03097L15.4395 11.25H6.75C6.55109 11.25 6.36032 11.329 6.21967 11.4696C6.07902 11.6103 6 11.8011 6 12Z" fill="black" />
                  </svg>
                </div>
              </motion.div>
            </div>
            <div className="hidden lg:block absolute bottom-0 right-0">
              <motion.div
                initial={{ y: "10vw", opacity: 0 }}
                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.2 } }}
                viewport={{ once: true, amount: 0.8 }}
                className="lg:h-[24rem] xl:h-[25.5rem]"
              >
                <Image
                  src={img1}
                  alt="verified-profile"
                  className="object-contain lg:h-[24rem] xl:h-[25.5rem]" />
              </motion.div>
            </div>
          </div>
          <div className="lg:hidden block bottom-0 mt-5">
            <motion.div
              initial={{ y: "10vw", opacity: 0 }}
              whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.2 } }}
              viewport={{ once: true, amount: 0.8 }}
              className="h-64 sm:h-96 flex justify-center items-center w-full"
            >
              <Image
                src={img1}
                alt="verified-profile"
                className="object-contain h-64 sm:h-96" />
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <section className="w-[95%] xl:w-[1150px]">
            <div className="lg:hidden block">
              <motion.div initial={{ y: "10vw", opacity: 0 }}
                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.2 } }}
                viewport={{ once: true, amount: 0.8 }} className="flex items-center justify-center p-6 mt-12 lg:mt-0 h-96">
                <Image src={reel1} alt="reel" className="object-contain h-96" />
              </motion.div>
            </div>
            <div className="container flex flex-col justify-center  xl:p-6 mx-auto sm:py-12 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center pl-8 lg:p-10 xl:p-10 rounded-sm lg:max-w-2xl xl:max-w-3xl text-left">
                <div className="mb-5 sm:hidden block mt-5">
                  <motion.svg initial={{ y: "10vw", opacity: 0 }}
                    whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                    viewport={{ once: true, amount: 0.8 }} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31 20.5V11.5C31 4 28 1 20.5 1H11.5C4 1 1 4 1 11.5V20.5C1 28 4 31 11.5 31H20.5C28 31 31 28 31 20.5Z" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.77734 8.66602H30.2173" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.7812 1.16602V8.45602" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.2227 1.16602V7.78101" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.625 19.6752V17.8752C12.625 15.5652 14.26 14.6202 16.255 15.7752L17.815 16.6752L19.375 17.5752C21.37 18.7302 21.37 20.6202 19.375 21.7752L17.815 22.6752L16.255 23.5752C14.26 24.7302 12.625 23.7852 12.625 21.4752V19.6752Z" stroke="#444444" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </div>
                <div className="mb-12 sm:block hidden">
                  <motion.svg initial={{ y: "10vw", opacity: 0 }}
                    whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                    viewport={{ once: true, amount: 0.8 }} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M62 41V23C62 8 56 2 41 2H23C8 2 2 8 2 23V41C2 56 8 62 23 62H41C56 62 62 56 62 41Z" stroke="#444444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.55859 17.3311H60.4385" stroke="#444444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.5586 2.33105V16.9111" stroke="#444444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M42.4414 2.33105V15.5611" stroke="#444444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M25.25 39.3503V35.7503C25.25 31.1303 28.52 29.2403 32.51 31.5503L35.63 33.3503L38.75 35.1503C42.74 37.4603 42.74 41.2403 38.75 43.5503L35.63 45.3503L32.51 47.1503C28.52 49.4603 25.25 47.5703 25.25 42.9503V39.3503Z" stroke="#444444" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </div>
                <motion.h1 initial={{ y: "10vw", opacity: 0 }}
                  whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                  viewport={{ once: true, amount: 0.8 }} className="text-2xl sm:text-5xl lg:text-5xl xl:text-6xl">Video Reels <br />
                  bring your profile to life !
                </motion.h1>
                <motion.p initial={{ y: "10vw", opacity: 0 }}
                  whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                  viewport={{ once: true, amount: 0.8 }} className="mt-4 mb-6 sm:mt-10 sm:mb-12 text-sm sm:text-xl xl:text-2xl font-light">Showcase your personality like never before with video intros and show reels. Let your charisma shine through movements, background music, and even your own voice.</motion.p>
                <motion.div initial={{ y: "10vw", opacity: 0 }}
                  whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                  viewport={{ once: true, amount: 0.8 }} className="flex items-center font-light flex-row space-y-1 space-x-2 justify-start sm:mb-0 mb-1.5">
                  <div className="sm:block hidden">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12C1.5 14.7848 2.60625 17.4555 4.57538 19.4246C6.54451 21.3938 9.21523 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z" fill="black" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M6 12C6 12.1989 6.07902 12.3896 6.21967 12.5303C6.36032 12.671 6.55109 12.75 6.75 12.75H15.4395L12.219 15.969C12.1493 16.0387 12.094 16.1215 12.0562 16.2126C12.0185 16.3037 11.9991 16.4014 11.9991 16.5C11.9991 16.5986 12.0185 16.6962 12.0562 16.7873C12.094 16.8785 12.1493 16.9612 12.219 17.031C12.2887 17.1007 12.3715 17.156 12.4626 17.1938C12.5537 17.2315 12.6514 17.2509 12.75 17.2509C12.8486 17.2509 12.9463 17.2315 13.0374 17.1938C13.1285 17.156 13.2113 17.1007 13.281 17.031L17.781 12.531C17.8508 12.4613 17.9063 12.3785 17.9441 12.2874C17.9819 12.1963 18.0013 12.0986 18.0013 12C18.0013 11.9013 17.9819 11.8036 17.9441 11.7125C17.9063 11.6214 17.8508 11.5386 17.781 11.469L13.281 6.96897C13.2113 6.89924 13.1285 6.84392 13.0374 6.80619C12.9463 6.76845 12.8486 6.74902 12.75 6.74902C12.6514 6.74902 12.5537 6.76845 12.4626 6.80619C12.3715 6.84392 12.2887 6.89924 12.219 6.96897C12.1493 7.0387 12.094 7.12149 12.0562 7.2126C12.0185 7.3037 11.9991 7.40136 11.9991 7.49997C11.9991 7.59859 12.0185 7.69624 12.0562 7.78735C12.094 7.87846 12.1493 7.96124 12.219 8.03097L15.4395 11.25H6.75C6.55109 11.25 6.36032 11.329 6.21967 11.4696C6.07902 11.6103 6 11.8011 6 12Z" fill="black" />
                    </svg>
                  </div>
                  <div className="sm:hidden block">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12C1.5 14.7848 2.60625 17.4555 4.57538 19.4246C6.54451 21.3938 9.21523 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z" fill="black" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M6 12C6 12.1989 6.07902 12.3896 6.21967 12.5303C6.36032 12.671 6.55109 12.75 6.75 12.75H15.4395L12.219 15.969C12.1493 16.0387 12.094 16.1215 12.0562 16.2126C12.0185 16.3037 11.9991 16.4014 11.9991 16.5C11.9991 16.5986 12.0185 16.6962 12.0562 16.7873C12.094 16.8785 12.1493 16.9612 12.219 17.031C12.2887 17.1007 12.3715 17.156 12.4626 17.1938C12.5537 17.2315 12.6514 17.2509 12.75 17.2509C12.8486 17.2509 12.9463 17.2315 13.0374 17.1938C13.1285 17.156 13.2113 17.1007 13.281 17.031L17.781 12.531C17.8508 12.4613 17.9063 12.3785 17.9441 12.2874C17.9819 12.1963 18.0013 12.0986 18.0013 12C18.0013 11.9013 17.9819 11.8036 17.9441 11.7125C17.9063 11.6214 17.8508 11.5386 17.781 11.469L13.281 6.96897C13.2113 6.89924 13.1285 6.84392 13.0374 6.80619C12.9463 6.76845 12.8486 6.74902 12.75 6.74902C12.6514 6.74902 12.5537 6.76845 12.4626 6.80619C12.3715 6.84392 12.2887 6.89924 12.219 6.96897C12.1493 7.0387 12.094 7.12149 12.0562 7.2126C12.0185 7.3037 11.9991 7.40136 11.9991 7.49997C11.9991 7.59859 12.0185 7.69624 12.0562 7.78735C12.094 7.87846 12.1493 7.96124 12.219 8.03097L15.4395 11.25H6.75C6.55109 11.25 6.36032 11.329 6.21967 11.4696C6.07902 11.6103 6 11.8011 6 12Z" fill="black" />
                    </svg>
                  </div>
                </motion.div>
              </div>
              <div className="lg:block hidden">
                <motion.div initial={{ y: "10vw", opacity: 0 }}
                  whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.2 } }}
                  viewport={{ once: true, amount: 0.8 }} className="flex items-center w-[95%] mt-8 lg:mt-14 xl:mt-20 h-72 lg:h-96 xl:-ml-5">
                  <Image src={reel1} alt="" className="" />
                </motion.div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex justify-center items-center">
          <section className="bg-white rounded-3xl w-[95%] xl:w-[1150px]">
            <div className="container flex flex-col justify-center p-6 lg:p-8 mx-auto lg:flex-row lg:justify-between">
              <motion.div initial={{ y: "10vw", opacity: 0 }}
                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.2 } }}
                viewport={{ once: true, amount: 0.8 }} className="flex items-center justify-center p-6 mt-8 lg:mt-28 xl:mt-6 h-full">
                <Image src={proposal} alt="" className="object-cover h-full w-[100vw] lg:w-[60vw] xl:w-[50vw]" />
              </motion.div>
              <div className="flex flex-col justify-center sm:p-6 rounded-sm lg:max-w-3xl xl:max-w-4xl text-right">
                <div className="sm:hidden block mt-10">
                  <div className="flex justify-end mb-5">
                    <motion.svg initial={{ y: "10vw", opacity: 0 }}
                      whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                      viewport={{ once: true, amount: 0.8 }} width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8008 22.8547L1.13523 1.29688L5.8187 27.4094L18.8008 22.8547Z" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5128 21.4001L20.2362 31L18.5935 22.631L0.999929 1L23.5128 21.4001Z" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M33.0685 17.7064L1.21756 1.11133L23.4159 21.3501L33.0685 17.7064Z" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.037 30.6393L13.6242 24.6681L18.6544 22.9258L20.037 30.6393Z" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </motion.svg>
                  </div>
                </div>
                <div className="sm:block hidden">
                  <div className="flex justify-end mb-10">
                    <motion.svg initial={{ y: "10vw", opacity: 0 }}
                      whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                      viewport={{ once: true, amount: 0.8 }} width="68" height="64" viewBox="0 0 68 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M37.6011 45.7113L2.26997 2.5957L11.6369 54.8208L37.6011 45.7113Z" stroke="#444444" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M47.0254 42.8003L40.4721 62L37.1868 45.2619L1.99961 2L47.0254 42.8003Z" stroke="#444444" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M66.1367 35.4128L2.43475 2.22266L46.8315 42.7001L66.1367 35.4128Z" stroke="#444444" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M40.0737 61.2786L27.2482 49.3361L37.3086 45.8516L40.0737 61.2786Z" stroke="#444444" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </motion.svg>
                  </div>
                </div>
                <motion.h1 initial={{ y: "10vw", opacity: 0 }}
                  whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                  viewport={{ once: true, amount: 0.8 }} className="text-xl sm:text-5xl lg:text-5xl xl:text-5xl">Elevate your connections with circle’s and proposals!</motion.h1>
                <motion.p initial={{ y: "10vw", opacity: 0 }}
                  whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                  viewport={{ once: true, amount: 0.8 }} className="mt-4 mb-6 sm:mt-10 sm:mb-12 text-sm sm:text-xl xl:text-2xl max-w-xl flex ml-auto font-light">Stay connected with your circle for regular updates, or explore features like proposals, communities, and conversations about common interests.</motion.p>
                <motion.div initial={{ y: "10vw", opacity: 0 }}
                  whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                  viewport={{ once: true, amount: 0.8 }} className="flex items-center font-light flex-row space-y-0 space-x-2 justify-end sm:mb-0 mb-5">
                  <div className="sm:block hidden">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12C1.5 14.7848 2.60625 17.4555 4.57538 19.4246C6.54451 21.3938 9.21523 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z" fill="black" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M6 12C6 12.1989 6.07902 12.3896 6.21967 12.5303C6.36032 12.671 6.55109 12.75 6.75 12.75H15.4395L12.219 15.969C12.1493 16.0387 12.094 16.1215 12.0562 16.2126C12.0185 16.3037 11.9991 16.4014 11.9991 16.5C11.9991 16.5986 12.0185 16.6962 12.0562 16.7873C12.094 16.8785 12.1493 16.9612 12.219 17.031C12.2887 17.1007 12.3715 17.156 12.4626 17.1938C12.5537 17.2315 12.6514 17.2509 12.75 17.2509C12.8486 17.2509 12.9463 17.2315 13.0374 17.1938C13.1285 17.156 13.2113 17.1007 13.281 17.031L17.781 12.531C17.8508 12.4613 17.9063 12.3785 17.9441 12.2874C17.9819 12.1963 18.0013 12.0986 18.0013 12C18.0013 11.9013 17.9819 11.8036 17.9441 11.7125C17.9063 11.6214 17.8508 11.5386 17.781 11.469L13.281 6.96897C13.2113 6.89924 13.1285 6.84392 13.0374 6.80619C12.9463 6.76845 12.8486 6.74902 12.75 6.74902C12.6514 6.74902 12.5537 6.76845 12.4626 6.80619C12.3715 6.84392 12.2887 6.89924 12.219 6.96897C12.1493 7.0387 12.094 7.12149 12.0562 7.2126C12.0185 7.3037 11.9991 7.40136 11.9991 7.49997C11.9991 7.59859 12.0185 7.69624 12.0562 7.78735C12.094 7.87846 12.1493 7.96124 12.219 8.03097L15.4395 11.25H6.75C6.55109 11.25 6.36032 11.329 6.21967 11.4696C6.07902 11.6103 6 11.8011 6 12Z" fill="black" />
                    </svg>
                  </div>
                  <div className="sm:hidden block">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12C1.5 14.7848 2.60625 17.4555 4.57538 19.4246C6.54451 21.3938 9.21523 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z" fill="black" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M6 12C6 12.1989 6.07902 12.3896 6.21967 12.5303C6.36032 12.671 6.55109 12.75 6.75 12.75H15.4395L12.219 15.969C12.1493 16.0387 12.094 16.1215 12.0562 16.2126C12.0185 16.3037 11.9991 16.4014 11.9991 16.5C11.9991 16.5986 12.0185 16.6962 12.0562 16.7873C12.094 16.8785 12.1493 16.9612 12.219 17.031C12.2887 17.1007 12.3715 17.156 12.4626 17.1938C12.5537 17.2315 12.6514 17.2509 12.75 17.2509C12.8486 17.2509 12.9463 17.2315 13.0374 17.1938C13.1285 17.156 13.2113 17.1007 13.281 17.031L17.781 12.531C17.8508 12.4613 17.9063 12.3785 17.9441 12.2874C17.9819 12.1963 18.0013 12.0986 18.0013 12C18.0013 11.9013 17.9819 11.8036 17.9441 11.7125C17.9063 11.6214 17.8508 11.5386 17.781 11.469L13.281 6.96897C13.2113 6.89924 13.1285 6.84392 13.0374 6.80619C12.9463 6.76845 12.8486 6.74902 12.75 6.74902C12.6514 6.74902 12.5537 6.76845 12.4626 6.80619C12.3715 6.84392 12.2887 6.89924 12.219 6.96897C12.1493 7.0387 12.094 7.12149 12.0562 7.2126C12.0185 7.3037 11.9991 7.40136 11.9991 7.49997C11.9991 7.59859 12.0185 7.69624 12.0562 7.78735C12.094 7.87846 12.1493 7.96124 12.219 8.03097L15.4395 11.25H6.75C6.55109 11.25 6.36032 11.329 6.21967 11.4696C6.07902 11.6103 6 11.8011 6 12Z" fill="black" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-8 sm:mt-10 px-20 md:px-44 xl:px-72">
          <Image src={chat2} className="h-8 w-16 sm:h-14 sm:w-24" alt="chat" />
        </div>

        <div className="flex justify-center items-center">
          <section className="bg-[#1C1C1C] text-white rounded-3xl w-[95%] xl:w-[1150px] lg:block hidden">
            <div className="flex">
              <motion.div initial={{ y: "10vw", opacity: 0 }}
                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.2 } }}
                viewport={{ once: true, amount: 0.8 }} className="h-full pt-32 pl-12 pb-1">
                <Image src={chat1} alt="" className="object-contain h-full" />
              </motion.div>
              <div className="container mx-auto p-14">
                <div className="lg:max-w-3xl xl:max-w-4xl text-right">
                  <div className="sm:hidden block mt-10">
                    <div className="flex justify-end mb-5">
                      <motion.svg initial={{ y: "10vw", opacity: 0 }}
                        whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                        viewport={{ once: true, amount: 0.8 }} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/motion.">
                        <path d="M10 13H16H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 18.3867H13H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 31C24.2842 31 31 24.2842 31 16C31 7.71572 24.2842 1 16 1C7.71572 1 1 7.71572 1 16C1 18.7321 1.73046 21.2936 3.00673 23.5L1.75 30.25L8.5 28.9933C10.7063 30.2695 13.2679 31 16 31Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </motion.svg>
                    </div>
                  </div>
                  <div className="sm:block hidden sm:mt-10 lg:mt-6">
                    <div className="flex justify-end mb-10">
                      <motion.svg initial={{ y: "10vw", opacity: 0 }}
                        whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                        viewport={{ once: true, amount: 0.8 }} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.002 25.999H32.002H44.002" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20.0039 36.7734H26.0039H32.0039" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M32 62C48.5684 62 62 48.5684 62 32C62 15.4314 48.5684 2 32 2C15.4314 2 2 15.4314 2 32C2 37.4642 3.46091 42.5873 6.01346 47L3.5 60.5L17 57.9866C21.4126 60.539 26.5358 62 32 62Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      </motion.svg>
                    </div>
                  </div>
                  <motion.h1 initial={{ y: "10vw", opacity: 0 }}
                    whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                    viewport={{ once: true, amount: 0.8 }} className="text-2x md:text-5xl lg:text-5xl xl:text-5xl">Chat beyond <br /> words !
                  </motion.h1>
                  <motion.p initial={{ y: "10vw", opacity: 0 }}
                    whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                    viewport={{ once: true, amount: 0.8 }} className="mt-4 mb-6 sm:mt-6 sm:mb-8 text-sm md:text-base lg:text-lg max-w-md flex ml-auto font-light">Stay connected with your circle for regular updates, or explore features like proposals, communities, and conversations about common interests.</motion.p>
                  <motion.div initial={{ y: "10vw", opacity: 0 }}
                    whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                    viewport={{ once: true, amount: 0.8 }} className="flex items-center font-light flex-row space-y-0 space-x-2 justify-end sm:mb-0 mb-2.5">
                    <div className="sm:block hidden">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12C1.5 14.7848 2.60625 17.4555 4.57538 19.4246C6.54451 21.3938 9.21523 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12.0009C6 12.1999 6.07902 12.3906 6.21967 12.5313C6.36032 12.6719 6.55109 12.7509 6.75 12.7509H15.4395L12.219 15.9699C12.1493 16.0397 12.094 16.1225 12.0562 16.2136C12.0185 16.3047 11.9991 16.4023 11.9991 16.5009C11.9991 16.5996 12.0185 16.6972 12.0562 16.7883C12.094 16.8794 12.1493 16.9622 12.219 17.0319C12.2887 17.1017 12.3715 17.157 12.4626 17.1947C12.5537 17.2325 12.6514 17.2519 12.75 17.2519C12.8486 17.2519 12.9463 17.2325 13.0374 17.1947C13.1285 17.157 13.2113 17.1017 13.281 17.0319L17.781 12.5319C17.8508 12.4623 17.9063 12.3795 17.9441 12.2884C17.9819 12.1973 18.0013 12.0996 18.0013 12.0009C18.0013 11.9023 17.9819 11.8046 17.9441 11.7135C17.9063 11.6224 17.8508 11.5396 17.781 11.4699L13.281 6.96995C13.2113 6.90022 13.1285 6.8449 13.0374 6.80716C12.9463 6.76942 12.8486 6.75 12.75 6.75C12.6514 6.75 12.5537 6.76942 12.4626 6.80716C12.3715 6.8449 12.2887 6.90022 12.219 6.96995C12.1493 7.03968 12.094 7.12246 12.0562 7.21357C12.0185 7.30468 11.9991 7.40233 11.9991 7.50095C11.9991 7.59956 12.0185 7.69721 12.0562 7.78832C12.094 7.87943 12.1493 7.96222 12.219 8.03195L15.4395 11.2509H6.75C6.55109 11.2509 6.36032 11.33 6.21967 11.4706C6.07902 11.6113 6 11.802 6 12.0009Z" fill="white" />
                      </svg>
                    </div>
                    <div className="sm:hidden block">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12C1.5 14.7848 2.60625 17.4555 4.57538 19.4246C6.54451 21.3938 9.21523 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12.0009C6 12.1999 6.07902 12.3906 6.21967 12.5313C6.36032 12.6719 6.55109 12.7509 6.75 12.7509H15.4395L12.219 15.9699C12.1493 16.0397 12.094 16.1225 12.0562 16.2136C12.0185 16.3047 11.9991 16.4023 11.9991 16.5009C11.9991 16.5996 12.0185 16.6972 12.0562 16.7883C12.094 16.8794 12.1493 16.9622 12.219 17.0319C12.2887 17.1017 12.3715 17.157 12.4626 17.1947C12.5537 17.2325 12.6514 17.2519 12.75 17.2519C12.8486 17.2519 12.9463 17.2325 13.0374 17.1947C13.1285 17.157 13.2113 17.1017 13.281 17.0319L17.781 12.5319C17.8508 12.4623 17.9063 12.3795 17.9441 12.2884C17.9819 12.1973 18.0013 12.0996 18.0013 12.0009C18.0013 11.9023 17.9819 11.8046 17.9441 11.7135C17.9063 11.6224 17.8508 11.5396 17.781 11.4699L13.281 6.96995C13.2113 6.90022 13.1285 6.8449 13.0374 6.80716C12.9463 6.76942 12.8486 6.75 12.75 6.75C12.6514 6.75 12.5537 6.76942 12.4626 6.80716C12.3715 6.8449 12.2887 6.90022 12.219 6.96995C12.1493 7.03968 12.094 7.12246 12.0562 7.21357C12.0185 7.30468 11.9991 7.40233 11.9991 7.50095C11.9991 7.59956 12.0185 7.69721 12.0562 7.78832C12.094 7.87943 12.1493 7.96222 12.219 8.03195L15.4395 11.2509H6.75C6.55109 11.2509 6.36032 11.33 6.21967 11.4706C6.07902 11.6113 6 11.802 6 12.0009Z" fill="white" />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="lg:hidden block bg-[#1C1C1C] text-white rounded-3xl w-[95%] xl:w-[1150px] mx-auto text-right">
          <div className="flex relative">
            <div className="p-6 sm:p-16">
              <div className="flex justify-end">
                <div className="mb-12 sm:block hidden">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0027 26H32.0027H44.0027" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20.0042 36.7734H26.0042H32.0042" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M32 62C48.5684 62 62 48.5684 62 32C62 15.4314 48.5684 2 32 2C15.4314 2 2 15.4314 2 32C2 37.4642 3.46091 42.5873 6.01346 47L3.5 60.5L17 57.9866C21.4126 60.539 26.5358 62 32 62Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div className="mb-5 sm:hidden block">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.002 13H16.002H22.002" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.002 18.3867H13.002H16.002" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16 31C24.2842 31 31 24.2842 31 16C31 7.71572 24.2842 1 16 1C7.71572 1 1 7.71572 1 16C1 18.7321 1.73046 21.2936 3.00673 23.5L1.75 30.25L8.5 28.9933C10.7063 30.2695 13.2679 31 16 31Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <motion.h1 initial={{ y: "10vw", opacity: 0 }}
                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                viewport={{ once: true, amount: 0.8 }} className="text-2xl sm:text-5xl lg:text-5xl xl:text-6xl font-medium">Chat beyond <br /> words !
              </motion.h1>
              <motion.p initial={{ y: "10vw", opacity: 0 }}
                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                viewport={{ once: true, amount: 0.8 }} className="mt-4 mb-6 sm:mt-10 sm:mb-12 text-sm sm:text-xl font-light">Experience peace of mind with our stringent verification process. Connect confidently with active and authentic profiles, ensuring meaningful connections every time. </motion.p>
              <motion.div initial={{ y: "10vw", opacity: 0 }}
                whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
                viewport={{ once: true, amount: 0.8 }} className="flex justify-end sm:mb-0 mb-1.5">
                <div className="sm:block hidden">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12C1.5 14.7848 2.60625 17.4555 4.57538 19.4246C6.54451 21.3938 9.21523 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12.0009C6 12.1999 6.07902 12.3906 6.21967 12.5313C6.36032 12.6719 6.55109 12.7509 6.75 12.7509H15.4395L12.219 15.9699C12.1493 16.0397 12.094 16.1225 12.0562 16.2136C12.0185 16.3047 11.9991 16.4023 11.9991 16.5009C11.9991 16.5996 12.0185 16.6972 12.0562 16.7883C12.094 16.8794 12.1493 16.9622 12.219 17.0319C12.2887 17.1017 12.3715 17.157 12.4626 17.1947C12.5537 17.2325 12.6514 17.2519 12.75 17.2519C12.8486 17.2519 12.9463 17.2325 13.0374 17.1947C13.1285 17.157 13.2113 17.1017 13.281 17.0319L17.781 12.5319C17.8508 12.4623 17.9063 12.3795 17.9441 12.2884C17.9819 12.1973 18.0013 12.0996 18.0013 12.0009C18.0013 11.9023 17.9819 11.8046 17.9441 11.7135C17.9063 11.6224 17.8508 11.5396 17.781 11.4699L13.281 6.96995C13.2113 6.90022 13.1285 6.8449 13.0374 6.80716C12.9463 6.76942 12.8486 6.75 12.75 6.75C12.6514 6.75 12.5537 6.76942 12.4626 6.80716C12.3715 6.8449 12.2887 6.90022 12.219 6.96995C12.1493 7.03968 12.094 7.12246 12.0562 7.21357C12.0185 7.30468 11.9991 7.40233 11.9991 7.50095C11.9991 7.59956 12.0185 7.69721 12.0562 7.78832C12.094 7.87943 12.1493 7.96222 12.219 8.03195L15.4395 11.2509H6.75C6.55109 11.2509 6.36032 11.33 6.21967 11.4706C6.07902 11.6113 6 11.802 6 12.0009Z" fill="white" />
                  </svg>
                </div>
                <div className="sm:hidden block">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12C1.5 14.7848 2.60625 17.4555 4.57538 19.4246C6.54451 21.3938 9.21523 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12.0009C6 12.1999 6.07902 12.3906 6.21967 12.5313C6.36032 12.6719 6.55109 12.7509 6.75 12.7509H15.4395L12.219 15.9699C12.1493 16.0397 12.094 16.1225 12.0562 16.2136C12.0185 16.3047 11.9991 16.4023 11.9991 16.5009C11.9991 16.5996 12.0185 16.6972 12.0562 16.7883C12.094 16.8794 12.1493 16.9622 12.219 17.0319C12.2887 17.1017 12.3715 17.157 12.4626 17.1947C12.5537 17.2325 12.6514 17.2519 12.75 17.2519C12.8486 17.2519 12.9463 17.2325 13.0374 17.1947C13.1285 17.157 13.2113 17.1017 13.281 17.0319L17.781 12.5319C17.8508 12.4623 17.9063 12.3795 17.9441 12.2884C17.9819 12.1973 18.0013 12.0996 18.0013 12.0009C18.0013 11.9023 17.9819 11.8046 17.9441 11.7135C17.9063 11.6224 17.8508 11.5396 17.781 11.4699L13.281 6.96995C13.2113 6.90022 13.1285 6.8449 13.0374 6.80716C12.9463 6.76942 12.8486 6.75 12.75 6.75C12.6514 6.75 12.5537 6.76942 12.4626 6.80716C12.3715 6.8449 12.2887 6.90022 12.219 6.96995C12.1493 7.03968 12.094 7.12246 12.0562 7.21357C12.0185 7.30468 11.9991 7.40233 11.9991 7.50095C11.9991 7.59956 12.0185 7.69721 12.0562 7.78832C12.094 7.87943 12.1493 7.96222 12.219 8.03195L15.4395 11.2509H6.75C6.55109 11.2509 6.36032 11.33 6.21967 11.4706C6.07902 11.6113 6 11.802 6 12.0009Z" fill="white" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="bottom-0 mt-5">
            <motion.div
              initial={{ y: "10vw", opacity: 0 }}
              whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.2 } }}
              viewport={{ once: true, amount: 0.8 }}
              className="h-64 sm:h-96 flex justify-center items-center w-full"
            >
              <Image
                src={chat1}
                alt="verified-profile"
                className="object-contain h-64 sm:h-96" />
            </motion.div>
          </div>
        </div>

        <div className="mt-16">
          <motion.p initial={{ y: "10vw", opacity: 0 }}
            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
            viewport={{ once: true, amount: 0.8 }} className="mx-auto text-center text-2xl sm:text-5xl lg:text-5xl xl:text-6xl font-medium">
            Get Started in Just 3 Minutes <br />
            Discover Connections Instantly!
          </motion.p>
          <div className="">
            <motion.p initial={{ y: "10vw", opacity: 0 }}
              whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
              viewport={{ once: true, amount: 0.8 }} className="mx-auto text-center text-sm sm:text-xl xl:text-2xl font-light mt-4 sm:mt-10">
              Sign up quickly and dive into the community. <br />
              For a more personalized experience, we&apos;ll gather a few extra details as you go.
            </motion.p>
            <motion.p initial={{ y: "10vw", opacity: 0 }}
              whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
              viewport={{ once: true, amount: 0.8 }} className="mx-auto text-center text-[18px] sm:text-2xl md:text-3xl lg:text-4xl mt-4 sm:mt-10">
              Download now and start building your path to <br className="sm:block hidden"/>
              happily ever after!
            </motion.p>
          </div>
          <motion.div initial={{ y: "10vw", opacity: 0 }}
            whileInView={{ y: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.4 } }}
            viewport={{ once: true, amount: 0.8 }} className='flex justify-center mt-5 sm:mt-14 sm:mb-12 lg:mb-0'>
            <Link href='/download'>
              <button className='flex items-center text-[14px] sm:text-[21px] bg-[#FE1940] px-5 py-3 text-white rounded-3xl gap-4'>
                Download
                <div className="sm:block hidden">
                  <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 16H13C13.5523 16 14 16.4477 14 17C14 17.5063 13.6238 17.9247 13.1357 17.9909L13 18H1C0.447715 18 0 17.5523 0 17C0 16.4937 0.376205 16.0753 0.864306 16.0091L1 16ZM6.86431 0.00912889L7 0C7.50626 0 7.92465 0.376205 7.99087 0.864306L8 1V11.2507L11.0069 8.24551C11.362 7.89049 11.9175 7.85822 12.309 8.14869L12.4212 8.24551C12.7762 8.60054 12.8084 9.15609 12.518 9.54757L12.4212 9.65973L7.70711 14.3738C7.35208 14.7288 6.79653 14.7611 6.40505 14.4706L6.29289 14.3738L1.57885 9.65973C1.18832 9.2692 1.18832 8.63604 1.57885 8.24551C1.93387 7.89049 2.48942 7.85822 2.8809 8.14869L2.99306 8.24551L6 11.2533V1C6 0.493739 6.37621 0.0753454 6.86431 0.00912889Z" fill="white" />
                  </svg>
                </div>
                <div className="sm:hidden block">
                  <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.777778 12.4444H10.1111C10.5407 12.4444 10.8889 12.7927 10.8889 13.2222C10.8889 13.616 10.5963 13.9414 10.2167 13.9929L10.1111 14H0.777778C0.348223 14 0 13.6518 0 13.2222C0 12.8285 0.292604 12.503 0.672238 12.4515L0.777778 12.4444ZM5.33891 0.00710025L5.44445 0C5.8382 0 6.16362 0.292604 6.21512 0.672238L6.22222 0.777778V8.75052L8.56095 6.41318C8.83708 6.13705 9.26918 6.11195 9.57366 6.33787L9.6609 6.41318C9.93703 6.68931 9.96213 7.1214 9.7362 7.42589L9.6609 7.51312L5.99442 11.1796C5.71829 11.4557 5.28619 11.4808 4.98171 11.2549L4.89447 11.1796L1.22799 7.51312C0.924252 7.20938 0.924252 6.71692 1.22799 6.41318C1.50412 6.13705 1.93622 6.11195 2.2407 6.33787L2.32794 6.41318L4.66667 8.75259V0.777778C4.66667 0.384019 4.95927 0.058602 5.33891 0.00710025Z" fill="white" />
                  </svg>
                </div>
              </button>
            </Link>
          </motion.div>
        </div>

        {showDownloadButton && (
          <div className="md:hidden block fixed bottom-5 right-5 animate-bounce z-50">
            <Link href="/download">
              <div className="bg-[#FE1940] text-white flex items-center gap-2 px-3.5 py-3 rounded-full shadow-lg hover:bg-[#fe193fec] focus:outline-none">
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7 0C7.55228 0 8 0.447715 8 1V11.5858L10.2929 9.29289C10.6834 8.90237 11.3166 8.90237 11.7071 9.29289C12.0976 9.68342 12.0976 10.3166 11.7071 10.7071L7.70711 14.7071C7.31658 15.0976 6.68342 15.0976 6.29289 14.7071L2.29289 10.7071C1.90237 10.3166 1.90237 9.68342 2.29289 9.29289C2.68342 8.90237 3.31658 8.90237 3.70711 9.29289L6 11.5858V1C6 0.447715 6.44772 0 7 0ZM1 16C1 15.4477 1.44772 15 2 15H12C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17H2C1.44772 17 1 16.5523 1 16Z" fill="currentColor" />
                </svg>
              </div>
            </Link>
          </div>
        )}
      </div></>
  );
}
