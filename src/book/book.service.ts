import BooksModel from "../book/book.model";
import { NewBookDto } from "./dto/new-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { Book } from "../book/entities/book.entity";
import { LoanBook } from "./dto/loan-book.dto";
import { DevolutionBook } from "./dto/devolution-book.dto";

class BookServices {
  async getAll(): Promise<Book[] | null> {
    const books: Book[] | null = await BooksModel.find();
    return books;
  }

  async getForId(id: string): Promise<Book | null> {
    const book: Book | null = await BooksModel.findById(id);
    return book;
  }

  async newBook(newBook: NewBookDto): Promise<Book | unknown> {
    try {
      const book: Book = await BooksModel.create(newBook);
      return book;
    } catch (error) {
      throw error;
    }
  }

  async updateBook(
    _id: string,
    UpdateBook: UpdateBookDto
  ): Promise<Book | unknown> {
    try {
      await BooksModel.updateOne({ _id }, UpdateBook);
      const bookEdited: Book | null = await BooksModel.findById(_id);
      return bookEdited;
    } catch (error) {
      throw error;
    }
  }

  async deleteBook(_id: string): Promise<void> {
    await BooksModel.findByIdAndDelete(_id);
  }

  async loan(_id: string, loan: LoanBook): Promise<void> {
    await BooksModel.updateOne({ _id }, { $push: { _historic: loan } });
  }

  async devolution(_id: string, devolution: DevolutionBook): Promise<void> {
    await BooksModel.updateOne(
      { _id, _historic: devolution._id },
      { $set: { "_historic.$._returnDate": devolution._returnDate } }
    );
  }
}

export default BookServices;
