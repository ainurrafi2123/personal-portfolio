import React, { useState } from "react";
import { motion } from "motion/react";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";

const Work = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter data berdasarkan kategori yang dipilih
  const filteredData =
    selectedCategory === "All"
      ? workData
      : workData.filter((project) => project.category === selectedCategory);

  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Filter Dropdown */}
      <div>
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mb-2 text-lg font-Ovo"
        >
          Exploring My Journey
        </motion.h4>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-5xl font-Ovo"
        >
          Discover My Latest Creations
        </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
          >
            Check out my web development portfolio! Explore a variety of projects
            that showcase my skills in front-end development.
          </motion.p>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:shadow"
        >
          <option value="All">All</option>
          <option value="Web">Web</option>
          <option value="Mobile">Mobile</option>
          <option value="Backend">Backend</option>
          <option value="E-commerce">E-commerce</option>
        </select>
      </div>

      {/* Display Filtered Projects */}
      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {filteredData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Image src={assets.send_icon} alt="Link" className="w-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
