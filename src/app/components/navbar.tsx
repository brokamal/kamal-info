import { FC } from "react";
import Link from "next/link";

const Navbar: FC = () => {
  return (

<nav className="py-3 bg-[#3c3836] text-[#F9D094] w-full">
  {/* Left Links */}
  <div className="max-w-xl mx-4 lg:mx-auto flex md:flex-row gap-4 md:gap-6 mb-2 md:mb-0">
    <Link
      href="/"
      className="mx-2 hover:underline transition-colors font-bold text-xl font-helvetica"
    >
      About Me
    </Link>
    <Link
      href="/projects"
      className="mx-2 hover:underline transition-colors font-helvetica text-xl font-bold"
    >
      Projects
    </Link>
  </div>
</nav>
  );
};

export default Navbar;
