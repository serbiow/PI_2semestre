"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createUsuario } from "@/app/api/insert-user/actions";

const initialState = {
    message: "",
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button className="bg-[#010E21]  min-w-72 text-[#E7C7A1] rounded-xl pt-3 py-3 mt-5 hover:bg-[#445a7e] transition-all " type="submit" aria-disabled={pending}>
            CADASTRAR
        </button>
    );
}

export function AddForm() {
    const [state, formAction] = useFormState(createUsuario, initialState);

    return (
   
        <div className="bg-[#E7C7A1] flex rounded-2xl shadow-lg min-h-96 min-w-fit">
          <div className="px-16 pt-10 py-10">
            <h2 className="font-bold text-2xl ">Cadastro</h2>
            <p className=" py-3">Se ainda não é cliente cadastre-se</p>


        <form action={formAction}>
            {/* Nome */}

            <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                <input type="text" className="grow" id="nome" name="nome" placeholder="Nome" />
            </label>
            {/* CPF */}
            <label className="input input-bordered flex items-center gap-2 mt-2">
            <svg className="w-4 h-4 opacity-70" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"/>
</svg>
                <input type="text" className="grow" placeholder="CPF" id="cpf" name="cpf" />
            </label>
            {/* Email */}
            <label className="input input-bordered flex items-center gap-2 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input
                    type="text"
                    className="grow bg-slate-100"
                    placeholder="Email"
                    id="email"
                    name="email"
                />
            </label>
            {/* Telefone */}
            <label className="input input-bordered flex items-center gap-2 mt-2">
                <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" /></svg>
                <input type="text" className="grow" placeholder="Telefone" id="telefone" name="telefone" />
            </label>
            {/* Senha */}
            <label className="input input-bordered flex items-center gap-2 mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input
                    type="password"
                    className="grow"
                    placeholder="Senha"
                    id="senha"
                    name="senha"
                />
            </label>
            <SubmitButton />
            <p aria-live="polite" className="sr-only w-max" role="status">
                {state?.message}
            </p>
        </form>
        <div className=" py-4 text-xs flex justify-between">
              <p className="pt-3 py-3">Já possui uma conta?</p>
              <a href="login"><button className=" rounded-xl pt-3 p-5 py-3 justify-center bg-[#283242] hover:bg-[#526d99] transition-all text-[#b3a89b]">Entrar</button></a>
            </div>
        </div>
        </div>
    );
}