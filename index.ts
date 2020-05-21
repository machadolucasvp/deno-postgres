import BookDAOImpl from "./dao/impl/bookDAOImpl.ts";
import BookDAO from "./dao/bookDAO.ts";
import { Book } from "./model/book.ts";

const bookDAO: BookDAO = new BookDAOImpl();

const typescriptBook = Book.builder()
  .withId(1).withIsbn("3128731")
  .withTitle("Typescript is the power!").build();

const coffeBook = Book.builder()
  .withId(2).withIsbn("3124123")
  .withTitle("But needs coffe!").build();

console.log(await bookDAO.post(typescriptBook));

console.log(await bookDAO.post(coffeBook));

console.log(await bookDAO.getAll());

console.log(await bookDAO.get(2));

coffeBook.title='Coffe class'
console.log(await bookDAO.put(coffeBook))

console.log(await bookDAO.delete(2));

console.log(await bookDAO.delete(1));



