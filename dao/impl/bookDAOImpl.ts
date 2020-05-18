import Book from "../../model/book.ts";
import Database from "../../database/database.ts";
import BookDAO from "../bookDAO.ts";

export default class BookDAOImpl implements BookDAO {
  async getAll(): Promise<Book[]> {
    const result = await Database.query("select id, title, isbn from books;");

    const books: Book[] = result.rowsOfObjects();

    return books;
  }

  async get(id: number): Promise<Book> {
    const result = await Database.query({
      text: `select id, title, isbn from books where id=$1;`,
      args: [id],
    });

    return result.rowsOfObjects()[0];
  }

  async post(book: Book): Promise<Book> {
    const result = await Database.query({
      text:
        "insert into books (id, title, isbn) values ($1, $2, $3) returning id, title, isbn;",
      args: [
        book.id,
        book.title,
        book.isbn
      ],
    });

    return result.rowsOfObjects()[0];
  }

  async delete(id: number): Promise<Book> {
    const result = await Database.query({
      text:
        "delete from books where id=$1 returning id, title, isbn;",
      args: [
        id
      ],
    });

    return result.rowsOfObjects()[0];
  }

}
