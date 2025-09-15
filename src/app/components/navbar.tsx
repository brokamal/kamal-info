import Link from "next/link";

const navItems = {
  '/':{
    name: 'About me',
  },
  'projects':{
    name: 'Projects',
  },
}

export default function NavBar () {
  return (
  <nav className="py-3 bg-[#3c3836] text-[#F9D094] w-full">
   <div className="max-w-xl mx-4 lg:mx-auto flex md:flex-row gap-4 md:gap-6 mb-2 md:mb-0">
        {Object.entries(navItems).map(([path, { name }]) =>{
          return (
            <Link
              key={path}
              href={path}
              className="mx-2 hover:underline transition-colors font-bold text-xl font-helvetica">
              {name}
              </Link>
          ); 
        }
        )}
   </div>
  </nav>
  );
}


