import { Client } from "https://deno.land/x/postgres/mod.ts";
import Book from "../../model/book.ts";
import DatabaseConfig from "../../config/database.ts";
import BookDAO from "../bookDAO.ts";

export default class BookDAOImpl implements BookDAO {
  async getAll(): Promise<Book[]> {
    const client = new Client(DatabaseConfig);
    await client.connect();

    const result = await client.query("select id, title, isbn from books;");

    const books: Book[] = result.rows.map((row: any): Book => {
      return {
        id: row.id,
        title: row.title,
        isbn: row.isbn,
      };
    });

    return books;
  }
}

