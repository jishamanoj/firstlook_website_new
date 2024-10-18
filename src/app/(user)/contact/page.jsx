import Navbar from "@/components/Navbar"
import Link from "next/link"

const Contact = () => {
    return (
        <>
            <Navbar fontcolor='black' />
            <div className='font-sans mt-20 md:mt-24 mb-10'>
                <div className="flex justify-center items-center">
                    <section className="bg-white px-7 py-12 sm:px-16 sm:py-16 md:px-20 md:py-16 xl:px-28 xl:py-16 h-fit rounded-3xl w-[95%] xl:w-[1150px]">
                        <p className='font-semibold text-[28px] sm:text-5xl mb-2 sm:mb-5'>
                            User Feedback
                        </p>
                        <p className='font-light w-3/4 text-[12px] sm:text-[21px]'>
                            We value your feedback and strive for continuous improvement. Share your thoughts on how we can enhance your experience—we're dedicated to prioritizing your needs.
                        </p>
                        <Link href='/feedback'>
                            <p className='w-3/4 text-[#FC3657] text-[12px] sm:text-[21px] font-medium'>
                                compose your feedback here
                            </p>
                        </Link>
                        <p className='font-semibold text-[28px] sm:text-5xl mt-6 sm:mt-14 mb-2 sm:mb-5'>
                            Business Contact
                        </p>
                        <p className='font-light w-3/4 text-[12px] sm:text-[21px]'>
                            715A, Spencer Plaza, Mount Road
                        </p>
                        <p className='font-light w-3/4 text-[12px] sm:text-[21px]'>
                            Anna Salai, Chennai
                        </p>
                        <p className='font-light w-3/4 text-[12px] sm:text-[21px]'>
                            Tamil Nadu, India - 600 002
                        </p>
                        <p className='font-light w-3/4 text-[12px] sm:text-[21px] mt-4'>
                            Mail - hello@firstlook.pro
                        </p>
                        <p className='font-light w-3/4 text-[12px] sm:text-[21px] mt-4'>
                            Tel - 91 9072208666, 91 9072205666
                        </p>
                        <p className='font-semibold text-[28px] sm:text-5xl mt-6 sm:mt-14 mb-2 sm:mb-5'>
                            About
                        </p>
                        <p className='font-light w-3/4 text-[12px] sm:text-[21px]'>
                            Connecting singles worldwide, effortlessly. For a comprehensive overview of our company and its mission, we invite you to explore our dedicated <span className='text-[#FC3657] font-medium'>company page.</span>
                        </p>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Contact