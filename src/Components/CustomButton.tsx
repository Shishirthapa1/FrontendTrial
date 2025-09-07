import { ButttonTypes } from "@/types/types";
import React from "react";

const CustomButton = ({ text, onClick, className = "" }: ButttonTypes) => {
    return (
        <button
            onClick={onClick}
            className={`relative md:px-5 px-4 lg:px-6 py-2 md:py-3 bg-[#e94290] text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-[#e94290] transition-all duration-300 uppercase ease-in-out cursor-pointer lg:text-base md:text-sm text-xs ${className}`}
        >
            {text}
        </button>
    );
};

export default CustomButton;
