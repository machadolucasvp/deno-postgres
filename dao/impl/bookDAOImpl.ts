import Book from "../../model/book.ts";
import Database from '../../database/database.ts';
import BookDAO from "../bookDAO.ts";

export default class BookDAOImpl implements BookDAO {

  async getAll(): Promise<Book[]> {
      
    const result = await Database.query("select id, title, isbn from books;");
    
    const books: Book[] = result.rows.map((row: any): Book => {
      return {
        id: row[0],
        title: row[1],
        isbn: row[2],
      };
    });

    return books;
  }
}

