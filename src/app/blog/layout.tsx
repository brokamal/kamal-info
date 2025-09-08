interface MDXPage { 
  children: React.ReactNode;
}

export default function layout({ children }: MDXPage){
  return <div className="text-gray-200">{children}</div>
}
