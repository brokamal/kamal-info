import Link from "next/link";

export default function Home() {
  return (
      <section>
       <h1 className="text-[#FF6969] text-7xl mb-4 tracking-tight">About Me</h1>
        <p className="mb-4">
          My name is Mohammad Kamal, I am a software engineer from Indonesia with experience in mobile development, web development, computer vision, and natural language processing.
        </p>
        <p>
          Previously, I worked as a Mobile Developer in{" "}
          <a
            href="https://www.linkedin.com/company/dptsi-its/"
            className="hyperlink"
          >
            DPTSI
          </a>
          .
        </p>
        <p>
          Check out some of my{" "}
          <Link href="/portfolio" className="hyperlink">
            Projects
          </Link>
        </p>
      <div className="flex gap-12 justify-center sm:justify-start max-w-3xl mt-6">
        <a
          href="https://github.com/brokamal"
          className="flex items-center gap-1 font-bold text-amber-pink hover:text-white hover:underline"
        >
          🔗 github
        </a>
        <a
          href="https://linkedin.com/in/mohammad-kamal-bdg"
          className="flex items-center gap-1 text-gray-300 hover:text-white"
        >
          🔗 linkedin
        </a>
        <a
          href="place"
          className="text-xl flex items-center gap-1 text-gray-300 hover:text-white"
        >
          🔗 CV
        </a>
      </div>
      </section>

  );
}
