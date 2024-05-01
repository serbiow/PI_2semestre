import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-2xl w-full items-center justify-between font-cousine text-sm lg:flex">
        <div className="bottom-0 left-0 flex h-48 w-full justify-center dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >

            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
<<<<<<< Updated upstream
      </div>

<<<<<<< Updated upstream
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
=======
    return (
        <main className="">
            <header>
                <nav className="bg-[#09172C] text-[#E7C7A1] flex list-none  h-24 transition-all">
                    <div className="mt-auto my-auto pl-5">
                        <p >STUDIO TAILINE</p>
                    </div>
                    <ul className=" ml-auto mt-auto my-auto  justify-center flex content-center gap-9">
                        <a href="./cursos"> <li>Cursos</li> </a> 
                        <li>Quem sou Eu?</li>
                        <li>Serviços</li>
                    </ul>
>>>>>>> Stashed changes

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
=======
>>>>>>> Stashed changes
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl text-primary-100 font-cousine`}>
            Cursos{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">

            </span>
          </h2>

        </a>



        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl text-primary-100 font-cousine`}>
            Quem sou eu?{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">

            </span>
          </h2>

        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl text-primary-100 font-cousine`}>
            Serviços{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">

            </span>
          </h2>

        </a>


     </div>
   
    </main>
  );
}
