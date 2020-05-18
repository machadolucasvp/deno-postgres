export default interface IBook {
  id?: number;
  title?: string;
  isbn?: string;
}

export class Book implements IBook {
  id?: number;
  title?: string;
  isbn?: string;

  constructor(book: Book) {
    Object.assign(this, book);
  }
  
  static builder(): BookBuilder {
    return new BookBuilder();
  }
}

class BookBuilder {
  id?: number;
  title?: string;
  isbn?: string;

  build(): Book {
    return new Book(this);
  }

  withId(id: number): BookBuilder {
    this.id = id;
    return this;
  }
  withTitle(title: string): BookBuilder {
    this.title = title;
    return this;
  }
  withIsbn(isbn: string): BookBuilder {
    this.isbn = isbn;
    return this;
  }
}
