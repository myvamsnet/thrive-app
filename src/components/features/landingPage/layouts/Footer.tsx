import { footerLinks } from "@/components/constant/footerLinks"
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    
      
        <footer className="wrapper flex justify-between items-center gap-3 text-lg text-gray-300 rounded-3xl bg-[#232B33] p-8 ">
          <div>
            <Image src="/images/logo.svg" alt="logo" width={142} height={50} />
          </div>

          {footerLinks.map((link) => (
            <li key={link.name} className="list-none">
              <Link
                href={link.href}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div className="flex items-center gap-2">
            <Image
              src="/images/facebook.svg"
              alt="logo"
              width={24}
              height={24}
            />
            <Image
              src="/images/instagram.svg"
              alt="logo"
              width={24}
              height={24}
            />
            <Image
              src="/images/linkedin.svg"
              alt="logo"
              width={24}
              height={24}
            />
          </div>
        </footer>
    
  );
}

export default Footer
