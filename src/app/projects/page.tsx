import "../globals.css";
import Link from "next/link"


export default function ProjectsPage() {
  return (
    <main>
      <h1 className="text-[#F9D094] text-5xl mb-4 font-helvetica font-bold tracking-tight">Projects</h1>
        <p className="mb-4 font-sans text-white">
          Here are some of my projects that I have worked on.
        </p>
      <Link href="https://github.com/brokamal/SundaScriptOCR" className="text-amber-500 hover:text-white underline text-xl">Sundanese Script OCR</Link> 
      <p></p>
      <Link href="https://github.com/brokamal/CuacaApp" className="text-amber-500 hover:text-white underline text-xl">CuacaApp</Link> 
      <p></p>
      <Link href="https://github.com/brokamal/nolimit-ds-test-mohammad-kamal" className="text-amber-500 hover:text-white underline text-xl">Rotten Tomatoes Review Sentiment Classifier</Link>



   </main>
  );
}
