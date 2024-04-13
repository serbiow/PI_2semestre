'use client'

import { signIn } from "next-auth/react";

export function LoginBtnHome() {
    return (
        <button onClick={() => signIn('google', { callbackUrl: "/dashboard" })}
        className="hover:bg-[#E7C7A1] hover:text-[#09172C] transition-all ml-auto mt-auto my-auto p-2 pr-5 pl-5 mr-5 border-solid border-2 border-[#E7C7A1] ">
            ENTRAR
        </button>
    );
}

