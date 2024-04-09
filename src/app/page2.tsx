import { sql } from '@vercel/postgres';
import { AddForm } from '@/app/api/add-form';
import { DeleteForm } from './api/delete-form';

export default async function Home(){
    let data = await sql `SELECT * FROM usuario`;
    const { rows: usuarios } = data;

    return(
        <main>
            <h1>Usuários</h1>
            <AddForm/>
            <ul>
                {usuarios.map((usuario) => (
                    <li key = {usuario.id}>
                        {usuario.nome}
                        {usuario.email}
                        {usuario.senha}
                        {usuario.telefone}
                        {usuario.cpf}
                        <DeleteForm id={usuario.id} nome={usuario.nome}/>
                    </li>
                ))}
            </ul>
        </main>
    );
}