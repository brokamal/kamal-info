import Link from "next/link"

const metadata = {
  title: 'Blog',
  description:'Reg blog',
}

export default function BlogPage() {
  return (
    <main>
      <h1 className="text-[#F9D094] text-5xl mb-4 font-helvetica font-bold tracking-tight">
        Blog
      </h1>
      <p className="mb-4 font-sans text-white">
        Just a regular blog I guess?
      </p>
    </main>
  );
}
