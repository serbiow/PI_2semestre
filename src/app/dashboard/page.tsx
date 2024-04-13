'use client'

import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { signOut } from "next-auth/react" 

export default async function Page(){
    const session = await getServerSession()

    if(!session){
        return redirect('/')
    }

    return (
        <div>
            <div>Nome: {session.user?.name}</div>
            <div>imagem: {session.user?.image}</div>
            <div>email: {session.user?.email}</div>
            <button onClick={() => signOut()}>Sair</button>
        </div>
    )
}