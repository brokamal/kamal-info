import Link from "next/link";

const footItems = {
  'https://github.com/brokamal':{
    name: '↖︎ Github',
  },
  'https://linkedin.com/in/mohammad-kamal-bdg':{
    name: '↖︎ Linkedin',
  },
  '/CV.pdf':{
    name: '↖︎ CV',
  },
}



export default function Footer() {
  return (
    <div className="flex font-helvetica gap-12 justify-center text-amber-500 sm:justify-start max-w-3xl mt-6">
      {Object.entries(footItems).map(([path, { name }]) => (
        <Link
          key={path}
          href={path}
          className="flex items-center gap-1 font-sans font-bold hover:text-amber-100 hover:underline"
        >
          {name}
        </Link>
      ))}
    </div>
  );
}
