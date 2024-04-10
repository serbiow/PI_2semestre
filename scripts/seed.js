const { db } = require('@vercel/postgres');
const {
  users,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS USUARIO( 
        USU_INT_ID SERIAL PRIMARY KEY,
        USU_STR_NOME VARCHAR(100) NOT NULL,
        USU_STR_EMAIL VARCHAR(100) NOT NULL,
        USU_STR_SENHA VARCHAR(16) NOT NULL,
        USU_STR_TEL CHAR(11) NOT NULL,
        USU_STR_CPF CHAR(11) NOT NULL
    );
    `;

    console.log(`Created "USUARIO" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO USUARIO (USU_STR_NOME, USU_STR_EMAIL, USU_STR_SENHA, USU_STR_TEL, USU_STR_CPF)
        VALUES (${user.name}, ${user.email}, ${hashedPassword}, ${user.telefone}, ${user.cpf})
        ON CONFLICT (USU_STR_EMAIL) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});