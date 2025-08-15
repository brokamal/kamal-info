import Link from "next/link";

export default function Home() {
  return (
      <section>
       <h1 className="text-[#F9D094] text-5xl mb-4 font-helvetica font-bold tracking-tight">About Me</h1>
        <p className="mb-4 font-helvetica font-bold text-white">
          My name is Mohammad Kamal, I am a software engineer from Indonesia with experience in mobile development, web development, computer vision, and natural language processing.
        </p>
        <p className="font-helvetica font-bold text-white">
          Previously, I worked as a Mobile Developer at{" "}
          <a
            href="https://www.linkedin.com/company/dptsi-its/"
            className="text-[#FF6969] hover:underline"
          >
            DPTSI
          </a>
          
        </p>
        <p className="font-bold font-helvetica text-white">
          Check out some of my{" "}
          <Link href="/portfolio" className="text-[#FF6969] hover:underline">
            Projects
          </Link>
        </p>
      <div className="flex gap-12 justify-center text-amber-500 sm:justify-start max-w-3xl mt-6">
        <a
          href="https://github.com/brokamal"
          className="flex items-center gap-1 font-bold hover:text-white hover:underline"
        >
            github
        </a>
        <a
          href="https://linkedin.com/in/mohammad-kamal-bdg"
          className="flex items-center gap-1 text-amber-500"
        >
           linkedin
        </a>
        <a
          href="#"
          className="text-xl flex items-center gap-1 text-gray-300 hover:text-white"
        >
           CV
        </a>
      </div>
      </section>

  );
}
