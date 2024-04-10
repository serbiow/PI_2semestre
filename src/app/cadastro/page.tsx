import postgres from "postgres";

import { AddForm } from "@/app/api/add-form";
import { DeleteForm } from "@/app/api/delete-form";

let sql = postgres(process.env.DATABASE_URL || process.env.POSTGRES_URL!, {
  ssl: "allow",
});

export default function cadastro() {
  return (
    <main>
      <section className="bg-[#010E21] min-h-screen flex items-center justify-center">

        {/* Container */}
        <div className="bg-[#E7C7A1] flex rounded-2xl shadow-lg min-h-96 min-w-fit">
          <div className="px-16 pt-10 py-10">
            <h2 className="font-bold text-2xl ">Cadastro</h2>
            <p className="">Se ainda não é cliente cadastre-se</p>

            {/* Formulario */}

            <AddForm/>

            {/* Registro */}

            <div className="mt-7 grid grid-cols-3 items-center text-black">
              <hr className="border-black" />
              <p className="text-center">OU</p>
              <hr className="border-black" />
            </div>

            <div className=" py-4 text-xs flex justify-between">
              <p className="pt-3 py-3">Já possui uma conta?</p>
              <a><button className=" rounded-xl pt-3 p-5 py-3 justify-center bg-[#283242] hover:bg-[#526d99] transition-all text-[#b3a89b]">Entrar</button></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}