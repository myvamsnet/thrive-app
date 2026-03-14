import Image from "next/image";

type CardProps = {
  image: string;
  title: string;
  items: string[];
};

const ProvenModelCards = ({ image, title, items }: CardProps) => {
  return (
    <div className="bg-[#232B33]  border border-white/10 rounded-2xl p-8 ">
      <div className="flex items-center mb-6 gap-3 ">
        <Image
          src={image}
          alt={title}
          width={24}
          height={24}
          className="bg-[#C7FF011A] p-2 rounded-2xl w-[44px]"
        />
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>
      <ul className="space-y-7 text-gray-400 text-xl font-bold">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="mt-[6px] w-1.5 h-1.5 bg-gray-500 rounded-full" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProvenModelCards;
