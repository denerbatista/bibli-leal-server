import BookServices from "../book/book.service";
import { UpdateBookDto } from "./dto/update-book.dto";
import { NewBookDto } from "./dto/new-book.dto";
import { Request, Response } from "express";
import { Book } from "./entities/book.entity";

const bookServices = new BookServices

class BookControllers {
  async getAll(req: Request, res: Response) {
    const Books = await bookServices.getAll();

    res.send(Books);
  }

  async getForId(req: Request, res: Response) {
    const id = req.params.id as string;

    const Book = await bookServices.getForId(id);

    res.send(Book);
  }

  async newBook(req: Request, res: Response): Promise<void> {
    const body: NewBookDto = req.body;

    try {
      const book: Book | unknown = await bookServices.newBook(body);

      res.status(201).send(book);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async updateBook(req: Request, res: Response) {
    const id = req.params.id as string;
    const bookEdited: UpdateBookDto = req.body;

    try {
      const book: Book | unknown = await bookServices.updateBook(id, bookEdited);

      res.send(book);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async deleteBook(req: Request, res: Response) {
    const id = req.params.id as string;

    await bookServices.deleteBook(id);

    res.sendStatus(204);
  }
}

export default BookControllers;
