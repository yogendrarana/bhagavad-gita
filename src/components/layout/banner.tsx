"use client";

import React from 'react'
import OrbitingCirclesDemo from '../util/orbiting-circles';

const Banner = () => {
    return (
        <div className="h-[75vh] rounded-lg flex flex-col md:flex-row justify-center items-center gap-2">
            <OrbitingCirclesDemo />
        </div>
    )
}

export default Banner;