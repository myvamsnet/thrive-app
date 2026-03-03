import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <nav className=" bg-[#232B33]">
      <div className="wrapper flex items-center justify-between gap-10 opacity-[88%] py-6">
        {/* Logo */}
        <Image src="/images/logo.svg" alt="logo" width={142} height={50} />

        {/* Links */}
        <div className="hidden md:flex gap-10 text-lg text-gray-300 ">
          <Link href="/" className="text-primary">
            Home
          </Link>
          <Link href="#">About</Link>
          <Link href="#">Why us?</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">FAQs</Link>
          <Link href="#">Portfolio</Link>
        </div>

        {/* Button */}
        <button className="bg-[#C6FF00] text-[#172028] px-5 py-3 rounded-md text-lg font-bold ">
          Chat Support
        </button>
      </div>
    </nav>
  );
}

export default Navbar
