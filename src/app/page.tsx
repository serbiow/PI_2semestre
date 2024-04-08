import Image from "next/image";


export default function Home() {
  return (
    <main className="p-0 h-screen w-screen m-0">
     <nav className=" flex list-none w-screen bg-[#010E21]  text-[#E7C7A1] pt-8 py-8  gap-5">
    <li> <Image
        className="ml-10"
        src=""
        width={30}
        height={30}
        alt="Tail_logo"
      /></li>
    <div className="flex list-none w-screen justify-center gap-5">
    <li className="hover:text-[#f1dabd] transition-all">Cursos</li>
    <li className="hover:text-[#f1dabd] transition-all">Quem sou eu?</li>
    <li className="hover:text-[#f1dabd] transition-all">Serviços</li>
    </div>
    <div className="text-[#E7C7A1] ml-auto mr-10 hover:text-[#f1dabd] transition-all border-b-[#E7C7A1] ">Login</div>
     </nav>
      
     
    </main>
  );
}
