import BookDAOImpl from "./dao/impl/bookDAOImpl.ts";
import BookDAO from "./dao/bookDAO.ts";
import { Book } from "./model/book.ts";

const bookDAO: BookDAO = new BookDAOImpl();

console.log(
  await bookDAO.post(
    Book.builder()
      .withId(1).withIsbn("3128731")
      .withTitle("Typescript is the power!").build(),
  ),
);

console.log(
    await bookDAO.post(
      Book.builder()
        .withId(2).withIsbn("3124123")
        .withTitle("But needs coffe!").build(),
    ),
  );

console.log(await bookDAO.getAll());

console.log(await bookDAO.get(2));

console.log(await bookDAO.delete(2));

