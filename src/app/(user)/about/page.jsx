import Section1 from '@/components/about/Section1'
import Section2 from '@/components/about/Section2'
import Section3 from '@/components/about/Section3'
import Section4 from '@/components/about/Section4'
import Section5 from '@/components/about/Section5'
import Section6 from '@/components/about/Section6'
import Section7 from '@/components/about/Section7'
import Navbar from '@/components/Navbar'
import React from 'react'

const About = () => {
  return (
    <div>
        <div className='w-full h-[50px] xl:h-[81px] bg-white '>
        <Navbar fontcolor='black' />
        </div>
       
        
        <Section1/>

        <Section2/>
        <div className='pt-16'>
        <Section3/>
        </div>
        <Section4/>
        <Section5/>
       <div className='pt-10 md:pt-16'>
       <Section6/>
       <div className='pt-10 md:pt-16'><Section7/></div>
       
       </div>
    </div>
  )
}

export default About