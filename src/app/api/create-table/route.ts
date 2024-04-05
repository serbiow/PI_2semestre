import { sql } from "@vercel/postgres";
import { NextResponse } from 'next/server';

export async function GET(){
    try{
        const result =
            await sql `CREATE TABLE USUARIO(
                USU_INT_ID SERIAL PRIMARY KEY,
                USU_STR_NOME VARCHAR(100) NOT NULL,
                USU_STR_EMAIL VARCHAR(100) NOT NULL,
                LOG_STR_SENHA VARCHAR(16) NOT NULL,
                USU_STR_TEL CHAR(11) NOT NULL,
                USU_STR_CPF CHAR(11) NOT NULL
              );`;
        return NextResponse.json({ result });
    }
    catch(error){
        return NextResponse.json({ error }, { status: 500 });
    }
}