'use client'

import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";

async function verSessao() {
    const session = await getServerSession()

    if (session) {
        return (
            <div>
                <img src={session.user?.image} />
                <h3>{session.user?.name}</h3>
                <button onClick={() => signOut()}
                    className="hover:bg-[#E7C7A1] hover:text-[#09172C] transition-all ml-auto mt-auto my-auto p-2 pr-5 pl-5 mr-5 border-solid border-2 border-[#E7C7A1] ">
                    SAIR
                </button>
            </div>
        )
    }
    else {
        return (
            <a href="/login">
                <button
                    className="hover:bg-[#E7C7A1] hover:text-[#09172C] transition-all ml-auto mt-auto my-auto p-2 pr-5 pl-5 mr-5 border-solid border-2 border-[#E7C7A1] ">
                    ENTRAR
                </button>
            </a>
        )
    }


}


export default function Home() {

    return (
        <main>
            <nav className="bg-[#09172C] text-[#E7C7A1] flex list-none w-screen h-24 transition-all">
                <div className="mt-auto my-auto pl-5">
                    <p >STUDIO TAILINE</p>
                </div>
                <ul className=" ml-auto mt-auto my-auto  justify-center flex content-center gap-9">
                    <li>Cursos</li>
                    <li>Quem sou Eu?</li>
                    <li>Serviços</li>
                </ul>
                {verSessao()}
            </nav>

            <section className="w-screen text-2xl h-auto bg-[#09172C] text-[#E7C7A1] pt-24 py-24 justify-center text-center">
                <h4 className="">O QUE É O STUDIO TAILINE?</h4>
                <p className="text-white text-sm mt-6">O Studio Tailene é um local especializado em design
                    de sobrancelhas e personalização de sobrancelhas.</p>

                <p className="ml-auto mr-auto w-36 p-3 border-solid border-2 hover:bg-[#E7C7A1] hover:text-[#09172C] transition-all  border-[#E7C7A1] text-sm  mt-6">SAIBA MAIS</p>
            </section>
        </main>
    );
}