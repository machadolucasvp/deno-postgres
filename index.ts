import BookDAOImpl from './dao/impl/bookDAOImpl.ts';
import BookDAO from './dao/bookDAO.ts';

const bookDAO: BookDAO = new BookDAOImpl();

console.log(await bookDAO.getAll());
