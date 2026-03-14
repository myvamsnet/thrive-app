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

const PricingCard = ({
  title,
  features,
  price,
  image,
  highlighted = false,
}: PricingCardProps) => {
  return (
    <div className="relative bg-[#232B33] p-8 border border-white/10 rounded-2xl overflow-hidden">
      {/* Glow background for highlighted card */}

      {highlighted && (
        <div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[320px] h-[90px] opacity-60 blur-xl"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(199,255,1,0.4) 0%, rgba(199,255,1,0.2) 60%, transparent 95%)",
          }}
        />
      )}
      {/* Card Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <Image
            src={image}
            alt={title}
            width={24}
            height={24}
            className="bg-[#C7FF011A] p-2 rounded-2xl w-[44px]"
          />
          <h3 className="text-white text-xl font-semibold">{title}</h3>
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-xl gap-3 text-gray-300"
            >
              <Check size={18} />
              {feature}
            </li>
          ))}
        </ul>

        <p className="text-2xl font-bold text-primary mb-6">{price}</p>

        <button
          className={`w-full py-3 rounded-lg font-medium transition-all duration-300
          ${
            highlighted
              ? "bg-white text-black"
              : "border border-white/20 text-white hover:bg-white/10"
          }`}
        >
          Book Package
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
