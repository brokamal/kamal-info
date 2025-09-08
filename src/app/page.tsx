import Link from "next/link";


export default function Home() {
  return (
    <>
      <section>
       <h1 className="text-[#F9D094] text-5xl mb-4 font-helvetica font-bold tracking-tight">About Me</h1>
        <p className="mb-4 text-xl font-sans text-white">
          My name is Mohammad Kamal, I am a software engineer from Indonesia with experience in mobile development, web development, computer vision, and natural language processing.
        </p>
        <p className="font-sans text-xl text-white">
          Previously, I worked as a Mobile Developer at{" "}
          <a
            href="https://www.linkedin.com/company/dptsi-its/"
            className="text-[#FF6969] hover:underline"
          >
            DPTSI
          </a>
          
        </p>
        <p className="font-sans text-xl text-white">
          Check out some of my{" "}
          <Link href="/projects" className="text-[#FF6969] hover:underline">
            Projects
          </Link>
        </p>
     </section>
      </>
  );
}
