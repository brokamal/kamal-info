import { FC } from "react";
import Link from "next/link";

const Navbar: FC = () => {
  return (

<nav className="py-3 bg-[#3c3836] text-white">
  {/* Left Links */}
  <div className="md:flex-row gap-4 md:gap-6 mb-2 md:mb-0">
    <Link
      href="/"
      className="mx-2 hover:text-pink-400 transition-colors font-bold font-mono"
    >
      About Me
    </Link>
    <Link
      href="/portfolio"
      className="mx-2 hover:text-pink-400 transition-colors"
    >
      Portfolio
    </Link>

    <Link
      href="/"
      className="font-bold text-lg hover:text-pink-400 transition-colors"
    >
      Kamal’s Info
    </Link>
    </div>
</nav>
  );
};

export default Navbar;
