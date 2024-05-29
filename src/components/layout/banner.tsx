"use client";

import React from 'react'
import { motion } from 'framer-motion'
import OrbitingCirclesDemo from '../util/orbiting-circles';

const Banner = () => {
    const banner_text = "One stop for HINDU religious books.";
    return (
        <div className="h-[75vh] rounded-lg flex flex-col md:flex-row justify-center items-center gap-2">
            {/* {banner_text.split(" ").map((letter, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="cursor-pointer text-4xl"
                >
                    {letter}
                </motion.div>
            ))} */}

            <OrbitingCirclesDemo />
        </div>
    )
}

export default Banner;