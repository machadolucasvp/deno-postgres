import Book from '../model/book.ts';


export default interface BookDAO {
    getAll() : Promise<Book[]>;
    get(id: number) : Promise<Book>;
    post(book: Book): Promise<Book>;
    delete(id: number): Promise<Book>;
}