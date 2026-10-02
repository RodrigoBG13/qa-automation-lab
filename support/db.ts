import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Função pra abrir o portal pro Banco de Dados
export async function getDbConnection() {
  return open({
    filename: './database.sqlite', // Ele vai criar esse arquivo fisicamente!
    driver: sqlite3.Database
  });
}

// Função pra "Semear" (Seed) o banco com dados de teste
export async function seedDb() {
  const db = await getDbConnection();
  
  // Cria a tabela se ela não existir
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      job TEXT
    );
  `);
  
  // Limpa a tabela pra não acumular lixo a cada teste
  await db.exec('DELETE FROM users;');
  
  // Insere um dado pra brincar
  await db.run('INSERT INTO users (name, job) VALUES ("Rody", "QA Automation Engineer");');
}
