import { signOut } from "next-auth/react"

export function SairBtn(){
    return(
        <button onClick={() => signOut()}>Sair</button>
    )
}