import { HeadingTypes } from "@/types/types";
import React from "react";

const Heading = ({ subtitle, title, titleColor = "blue" }: HeadingTypes) => {
    return (
        <div className={`text-center my-6`}>
            {title && (
                <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold font-poppins uppercase text-[#6a9fcb] leading-snug ${titleColor === "blue" ? "text-[#6a9fcb]" : "text-white"}`}>
                    {title}
                </h2>
            )}
            {subtitle && (
                <p className={`${titleColor === "white" ? "text-white" : "text-black"} lg:text-base md:text-sm text-xs tracking-wide mb-2`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default Heading;
