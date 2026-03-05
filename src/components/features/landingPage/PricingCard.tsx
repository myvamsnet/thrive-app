"use client";


import { Check } from "lucide-react";
import Image from "next/image";

interface PricingCardProps {
  image: string;
  title: string;
  features: string[];
  price: string;
  highlighted?: boolean;
}

const  PricingCard = ({ title, features, price, image, highlighted = false,}: PricingCardProps) => {
  return (
    <div className="bg-[#232B33] p-8 border border-white/10 rounded-2xl">
      <div>
         <div className="bg-[#C7FF011A] p-2 rounded-2xl w-[44px]">
            <Image src={image} alt={title} width={24} height={24} />
            </div>
        <h3 className="text-white text-xl font-semibold mb-6">{title}</h3>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-xl gap-3 text-gray-300">
              <Check size={18} />
              {feature}
            </li>
          ))}
        </ul>
        <p
          className={`text-2xl font-bold mb-6 ${
            highlighted ? "text-primary" : "text-primary"
          }`}
        >
          {price}
        </p>
      </div>
      <button
        className={`
          w-full py-3 rounded-lg font-medium transition-all duration-300
          ${
            highlighted
              ? "bg-white text-black "
              : "border border-white/20 text-white hover:bg-white/10"
          }
        `}
      >
        Book Package
      </button>
    </div>
  );
}
export default PricingCard