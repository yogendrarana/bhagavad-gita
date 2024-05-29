"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useMediaQuery } from 'react-responsive'
import { Brahma, Om, Shiva, Vishnu } from "@/assets/index"
import { useEffect, useState } from "react";

// orbiting-circles
function OrbitingCircles({
    className,
    children,
    reverse,
    duration = 20,
    delay = 10,
    radius = 50,
    path = true,
}: {
    className?: string;
    children?: React.ReactNode;
    reverse?: boolean;
    duration?: number;
    delay?: number;
    radius?: number;
    path?: boolean;
}) {
    return (
        <>
            {path && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                >
                    <circle
                        className="stroke-black/5 stroke-1 dark:stroke-white/10"
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="none"
                        strokeDasharray={"4 4"}
                    />
                </svg>
            )}

            <div
                style={
                    {
                        "--duration": duration,
                        "--radius": radius,
                        "--delay": -delay,
                    } as React.CSSProperties
                }
                className={cn(
                    "absolute flex h-full w-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10",
                    { "[animation-direction:reverse]": reverse },
                    className,
                )}
            >
                {children}
            </div>
        </>
    );
}

// orbiting-circles-demo
export default function OrbitingCirclesDemo() {
    const [innerRadius, setInnerRadius] = useState(50);
    const [outerRadius, setOuterRadius] = useState(150);
    const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' });
    const isMediumScreen = useMediaQuery({ query: '(min-width: 601px) and (max-width: 1024px)' });
    const isLargeScreen = useMediaQuery({ query: '(min-width: 1025px)' });
    
    useEffect(() => {
        if (isSmallScreen) {
            setInnerRadius(50);
            setOuterRadius(150);
        } else if (isMediumScreen) {
            setInnerRadius(70);
            setOuterRadius(175);
        } else if (isLargeScreen) {
            setInnerRadius(90);
            setOuterRadius(200);
        }
    }, [isLargeScreen, isMediumScreen, isSmallScreen])

    return (
        <div className="relative flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hiddenl">
            {/* Inner Circles */}
            <OrbitingCircles
                className="h-[30px] w-[30px] border-none bg-transparent"
                duration={20}
                delay={20}
                radius={innerRadius}
            >
                <Image src={Om} height={50} width={50} alt="om" />
            </OrbitingCircles>

            {/* Outer Circles (reverse) */}
            <OrbitingCircles
                className="h-[50px] w-[50px] border-none bg-transparent"
                reverse
                radius={outerRadius}
                delay={10}
                duration={30}
            >
                <Image src={Shiva} height={50} width={50} alt="shiva" />
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[50px] w-[50px] border-none bg-transparent"
                reverse
                radius={outerRadius}
                delay={20}
                duration={30}
            >
                <Image src={Vishnu} height={50} width={50} alt="vishnu" />
            </OrbitingCircles>
            <OrbitingCircles
                className="h-[50px] w-[50px] border-none bg-transparent"
                reverse
                radius={outerRadius}
                delay={30}
                duration={30}
            >
                <Image src={Brahma} height={50} width={50} alt="brahma" />
            </OrbitingCircles>
        </div>
    );
}