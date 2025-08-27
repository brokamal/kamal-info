import "../globals.css";
import Link from "next/link"

const projectItems = {
  'https://github.com/brokamal/SundaScriptOCR':{
    name: 'Sundanese Script OCR',
    },
  'https://github.com/brokamal/CuacaApp':{
    name: 'CuacaApp',
    },
  'https://github.com/brokamal/nolimit-ds-test-mohammad-kamal':{
    name: 'Rotten Tomatoes Review Sentiment Classifier',
    },
  }


export default function ProjectsPage() {
  return (
    <>
      <h1 className="text-[#F9D094] text-5xl mb-4 font-helvetica font-bold tracking-tight">
        Projects
      </h1>
      <p className="mb-4 font-sans text-white">
        Here are some of my projects that I have worked on.
      </p>
      <div className="flex-col flex gap-2">
        {Object.entries(projectItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className="text-pink-300 hover:text-white underline text-xl"
            >
              {name}
            </Link>
          );
        })}
      </div>
    </>
  );
}

