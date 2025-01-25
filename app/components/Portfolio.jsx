import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";

const Portfolio = ({isDarkMode}) => {
  return (
    <div className="w-11/12 max-w-4xl mx-auto h-screen flex flex-col items-center justify-center gap-4 ">
      <div className="text-center mb-12 text-lg font-Ovo">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl sm:text-6xl lg:text-[88px] font-Ovo -mt-4"
        >
          Welcome to My Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-2xl mx-auto font-Ovo mt-4"
        >
          Explore my web development portfolio and discover a collection 
          of projects showcasing my expertise in front-end development.
        </motion.p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="https://github.com/ainurrafi2123"
          className="px-10 py-3 border border-white rounded-full  bg-black text-white flex items-center gap-2 
                dark:bg-transparent"
        >
          My Github{" "}
          <Image
            src={assets.github }
            alt="Github"
            className="w-8"
          />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My Linkedin{" "}
          <Image
            src={assets.linkedin}
            alt="Linkedin"
            className="w-8"
          />
        </motion.a>
      </div>

      {/* Tombol tidak terpengaruh oleh text-center */}
    </div>
  );
};

export default Portfolio;
