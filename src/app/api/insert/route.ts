import { sql } from "@vercel/postgres";
import { NextResponse } from 'next/server';

export async function GET(){
    try{
        const result =
            await sql `INSERT INTO USUARIO(USU_STR_NOME, USU_STR_EMAIL, USU_STR_SENHA, USU_STR_TEL, USU_STR_CPF) VALUES('Rogério Carlos', 'carlos@gmail.com', 'rog123', '11970507486', '53746187842');`;
        return NextResponse.json({ result });
    }
    catch(error){
        return NextResponse.json({ error }, { status: 500 });
    }
}