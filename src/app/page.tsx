import postgres from "postgres";

import { AddForm } from "@/app/api/add-form";
import { DeleteForm } from "@/app/api/delete-form";

let sql = postgres(process.env.DATABASE_URL || process.env.POSTGRES_URL!, {
  ssl: "allow",
});

export default async function Home(){
    let usuarios = await sql`SELECT * FROM USUARIO`;

    return(
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <h1>Usuários</h1>
            <AddForm/>
            <ul>
                {usuarios.map((usuario) => (
                    <li key = {usuario.usu_int_id}>
                        {usuario.usu_str_nome}<br/>
                        {usuario.usu_str_email}<br/>
                        {usuario.usu_str_senha}<br/>
                        {usuario.usu_str_tel}<br/>
                        <DeleteForm id={usuario.usu_int_id} nome={usuario.usu_str_nome}/>
                        <br/>
                    </li>
                ))}
            </ul>
        </main>
    );
}