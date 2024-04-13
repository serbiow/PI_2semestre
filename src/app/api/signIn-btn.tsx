'use client'

import { signIn } from "next-auth/react";

export function LoginBtn() {
    return (
        <button onClick={() => signIn('google', { callbackUrl: "/"})}
        className="bg-[#010E21] text-[#E7C7A1] rounded-xl pt-3 py-3 mt-3 hover:bg-[#445a7e] transition-all">
            LOGIN COM O GOOGLE
        </button>
    );
}

