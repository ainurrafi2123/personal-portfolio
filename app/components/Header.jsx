import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";

const Header = () => {
  return (
    <div className='w-11/12 max-w-4xl mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-12'>
      {/* Logo dan Hi tidak terpengaruh oleh text-center */}
      <motion.div 
       initial={{scale: 0}}
       whileInView ={{scale: 1}}
       transition={{duration: 0.8, type:'spring', stiffness: 100}}
       className='text-center'
       priority="true">
        <Image src={assets.profile_img} alt="Profile" className='rounded-full w-32 ' />
      </motion.div>

      <motion.h3 
      initial={{y: -20, opacity: 0 }}
      whileInView ={{y: 0, opacity: 1 }}
      transition={{duration: 0.6, delay: 0.3}}
      className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi! I'm Ryfvv <Image src={assets.hand_icon} alt="Hand icon" className='w-6' />
      </motion.h3>

      {/* h1 dan paragraf diratakan tengah */}
      <div className='text-center'>
        <motion.h1 
        initial={{y: -30, opacity: 0 }}
        whileInView ={{y: 0, opacity: 1 }}
        transition={{duration: 0.8, delay: 0.5}}
        className='text-3xl sm:text-6xl lg:text-[77px] font-Ovo mb-4 '>
          frontend web developer based in Malang.
        </motion.h1>

        <motion.p 
        initial={{opacity: 0 }}
        whileInView ={{ opacity: 1 }}
        transition={{duration: 0.6, delay: 0.7}}
        className='max-w-2xl mx-auto font-Ovo mt-2'>
          I am a frontend developer from Malang, Indonesia with 1 years of
          experience at School and Learn in Neighbours.
        </motion.p>

      </div>

      {/* Tombol tidak terpengaruh oleh text-center */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{y: 30, opacity: 0 }}
          whileInView ={{y: 0, opacity: 1 }}
          transition={{duration: 0.6, delay: 1}}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full  bg-black text-white flex items-center gap-2 
          dark:bg-transparent"
        >
          contact me{" "}
          <Image src={assets.right_arrow_white} alt="Right arrow" className="w-4" />
        </motion.a>

        <motion.a
          initial={{y: 30, opacity: 0 }}
          whileInView ={{y: 0, opacity: 1 }}
          transition={{duration: 0.6, delay: 1.2}}
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          my resume{" "}
          <Image src={assets.download_icon} alt="Download icon" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
