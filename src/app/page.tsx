import Link from "next/link";

export default function Home() {
  return (
      <section>
       <h1 className="text-[#F9D094] text-5xl mb-4 font-helvetica font-bold tracking-tight">About Me</h1>
        <p className="mb-4 font-serif text-white">
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
          <Link href="/projects" className="text-[#FF6969] hover:underline">
            Projects
          </Link>
        </p>
      <p className="font-helvetica text-white">
        Stacks: C, C++, Python, Java, Kotlin, Javascript, gold.
      </p>
      <div className="flex font-helvetica gap-12 justify-center text-amber-500 sm:justify-start max-w-3xl mt-6">
        <a
          href="https://github.com/brokamal"
          className="flex items-center gap-1 font-helvetica font-bold hover:text-amber-100 hover:underline"
        >
            ↖︎ Github 
        </a>
        <a
          href="https://linkedin.com/in/mohammad-kamal-bdg"
          className="flex items-center gap-1 text-amber-500 font-helvetica font-bold hover:text-amber-100 hover:underline"
        >
           ↖︎ Linkedin
        </a>
        <a
          href="/CV.pdf"
          className="text-xl flex font-helvetica items-center gap-1 font-bold text-amber-500 hover:underline hover:text-amber-100"
        >
            ↖︎ CV
        </a>
      </div>
      </section>

  );
}
