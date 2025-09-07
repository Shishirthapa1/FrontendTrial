import { ServiceCardProps } from "@/types/types";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const ServiceCard = ({ image, title }: ServiceCardProps) => {
    return (
        <div className="bg-white rounded-lg hover:shadow-sm cursor-pointer border border-gray-200 overflow-hidden text-center p-4">
            <Image
                src={image}
                alt={title}
                height={500}
                width={500}
                className="w-full h-56 object-cover rounded-md"
            />

            <h3 className="mt-4 text-sm md:text-base lg:text-lg font-semibold text-gray-700 uppercase">
                {title}
            </h3>

            <CustomButton text="READ MORE" className="mt-3">
            </CustomButton>
        </div>
    );
};

export default ServiceCard;
