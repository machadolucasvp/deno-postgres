import Book from '../model/book.ts';


export default interface BookDAO {
    getAll() : Promise<Book[]>;
}