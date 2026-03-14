import { footerLinks } from "@/components/constant/footerLinks"
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className=" bg-[url('/images/footer-bg-img.svg')] bg-cover bg-center bg-no-repeat rounded-2xl">
      <div className="wrapper flex lg:flex-row flex-col text-center gap-8 lg:gap-3  py-8 w-full  justify-between items-center text-lg text-gray-300 rounded-3xl bg-[#232B33] p-8 border-4 border-white/10 ">
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
        <div className="flex items-center gap-3">
          <Image src="/images/facebook.svg" alt="logo" width={24} height={24} />
          <Image
            src="/images/instagram.svg"
            alt="logo"
            width={24}
            height={24}
          />
          <Image src="/images/linkedin.svg" alt="logo" width={24} height={24} />
        </div>
      </div>
    </footer>
  );
}

export default Footer
