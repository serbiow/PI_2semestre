'use client'

import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";

async function verSessao() {
    const session = await getServerSession()

    if (session) {
        return (
            <div className="flex gap-3">
                <img className="w-10 h-10 border-solid border-2 border-[#E7C7A1]" src={session.user?.image} />
                <h3 className="mt-auto my-auto">{session.user?.name}</h3>
                <form action={() => {
                    signOut()
                }}>
                    <button type="submit"
                        className="hover:bg-[#E7C7A1] hover:text-[#09172C] transition-all p-2 pr-5 pl-5 border-solid border-2 border-[#E7C7A1] ">
                        SAIR
                    </button>
                </form>
            </div>
        )
    }
    else {
        return (
            <a href="/login">
                <button
                    className="hover:bg-[#E7C7A1] hover:text-[#09172C] transition-all p-2 pr-5 pl-5 border-solid border-2 border-[#E7C7A1] ">
                    ENTRAR
                </button>
            </a>
        )
    }


}


export default function Home() {

    return (
        <main className="">
            <header>
                <nav className="bg-[#09172C] text-[#E7C7A1] flex list-none  h-24 transition-all">
                    <div className="mt-auto my-auto pl-5">
                        <a href="./"> <p >STUDIO TAILINE</p> </a>
                    </div>
                    <ul className=" ml-auto mt-auto my-auto  justify-center flex content-center gap-9">
                        <a href="./cursos"> <li >Cursos</li> </a>
                        <li>Quem sou Eu?</li>
                        <li>Serviços</li>
                    </ul>

                    <div className="ml-auto mt-auto my-auto mr-5 flex gap-5">


                        {verSessao()}

                    </div>

                </nav>


                <section className="text-2xl h-auto bg-[#09172C] text-[#E7C7A1] pt-24 py-24 justify-center text-center">
                    <h4 className="">CURSOS</h4>
                    <p className="text-white text-sm mt-6">Cursos ministrados por mim Tailine Oliveira</p>

                    <a href="#cursos"><button className="ml-auto mr-auto w-36 p-3 border-solid border hover:bg-[#E7C7A1] hover:text-[#09172C] transition-all  border-[#E7C7A1] text-sm  mt-6">SAIBA MAIS</button> </a>
                </section>
            </header>

            <section className="bg-[#09172C] py-20 pt-20">
                <div id="cursos" className="card max-w-90 shadow-xl bg-[#09172C]">
                    <figure className="px-12 pt-12">
                        <img src="https://blog.hanabeauty.com.br/wp-content/uploads/2021/12/Modelo-com-extensao-de-cilios.jpeg" alt="Demonstrativo" className="rounded-xl " />
                    </figure>
                    <div className="card-body items-center">
                        <h2 className="card-title font-cousine py-2 text-xl  md:text-4xl ">CURSO PRESENCIAL</h2>
                        <h1 className="card-title font-cousine py-3 text-2xl md:text-5xl text-[#E7C7A1]" >Brow Lamination & Lash Lifting</h1>
                        <div className="card-actions">
                            <div className="collapse bg-[#09172C] border-solid border-2 border-[#E7C7A1]">
                                <input type="radio" name="my-accordion-1" defaultChecked />
                                <div className="collapse-title  font-medium ">
                                    <h3 className="text-center items-center text-2xl md:text-3xl text-[#E7C7A1]"> Procedimentos
                                        ensinados:  </h3>

                                </div>
                                <div className="collapse-content pl-8 md:pl-10">
                                    <p className=" text-xl md:text-xl"> • COMO AGE O PRODUTO NOS FIOS </p>
                                    <p className="text-xl md:text-xl"> • MAPEAMENTO A MÃO LIVRE </p>
                                    <p className=" text-xl md:text-xl" > • TEXTURIZANDO O FIO NO TEMPO CERTO </p>
                                    <p className=" text-xl md:text-xl"> • TEMPO DE MANUTENÇÃO CORRETA </p>
                                    <p className=" text-xl md:text-xl"> • DIRECIONAMENTO DOS FIOS </p>
                                    <p className=" text-xl md:text-xl "> • FICHA DE ANAMNESE </p>
                                    <p className=" text-xl md:text-xl "> • QUÍMICA DOS FIOS </p>
                                    <p className="text-xl md:text-xl"> • LISTA DE MATERIAIS </p>
                                    <p className=" text-xl md:text-xl "> • BIOSEGURANÇA </p>
                                    <p className=" text-xl md:text-xl"> • CUIDADOS PÓS PROCEDIMENTO </p>
                                </div>
                            </div>
                            <div className="collapse bg-[#09172C] border-solid border  border-[#E7C7A1]">
                                <input type="radio" name="my-accordion-1" />
                                <div className="collapse-title text-xl font-medium">
                                    <h3 className="text-center items-center text-2xl md:text-3xl text-[#E7C7A1]"> E voce ainda ganha:  </h3>
                                </div>
                                <div className="collapse-content  pl-8 md:pl-10">
                                    <p className=" text-2xl md:text-2xl  text-center text-[#E7C7A1]">+ 2 BÔNUS E CERTIFICADO DE CONCLUSÃO!</p>
                                </div>
                            </div>
                            <div className="collapse bg-[#09172C] border-solid border  border-[#E7C7A1]">
                                <input type="radio" name="my-accordion-1" />
                                <div className="collapse-title font-medium">
                                    <h3 className="text-center items-center text-2xl md:text-3xl text-[#E7C7A1]"> Informações Adicionais </h3>
                                </div>
                                <div className="collapse-content  pl-8 md:pl-10">
                                    <p className=" text-2xl md:text-2xl "> • Curso totalmente presencial. </p>
                                    <p className=" text-xl md:text-xl text-[#E7C7A1]"> Coffee break, ambiente climatizado e
                                        aconchegante, curso individual. </p>
                                    <p className=" text-2xl md:text-2xl "> • 1 dia de curso (8 horas) </p>
                                    <p className=" text-2xl md:text-2xl "> • Aula teórica e prática com modelos
                                    </p>
                                    <p className=" text-2xl md:text-2xl "> • Certificado de conclusão e brindes! </p>
                                    <br></br>
                                    <p className=" text-2xl md:text-2xl  text-center text-[#E7C7A1]"> Domine as duas técnicas que estão
                                        bombando na estética e se torne uma
                                        profissional de sucesso! </p>
                                        <br></br>
                                    <p className=" text-2xl md:text-2xl text-center "> Valor de investimento:</p>
                                    <p className=" text-3xl md:text-3xl text-center"> R$ 650,00. à vista pix </p>
                                    <p className=" text-1xl md:text-1xl  text-end text-[#E7C7A1]"> parcelado em 2x sem juros e em mais vezes
                                        com acréscimo da maquininha (consultar
                                        juros)
                                       </p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>





            </section>



        </main>
    );
}