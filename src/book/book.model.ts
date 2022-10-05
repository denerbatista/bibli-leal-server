import { Schema, model } from "mongoose";
import { Book } from "./entities/book.entity";

const BookSchema = new Schema<Book>(
  {
    _register: { type: Number, required: true },
    _title: { type: String, required: true },
    _publishingCompany: { type: String, required: true },
    _ilustrator: { type: String, required: true },
    _picture: { type: String, required: false },
    _registrationDate: { type: Date, required: true },
    _status: { type: String, required: true },
    _historic: [
      {
        _user: {
          _name: { type: String, required: true },
          _gang: { type: String, required: true },
          _teacher: { type: Boolean, required: true },
        },
        _loanDate: { type: Date, required: true },
        _returnDate: { type: Date, required: false },
      },
    ],
  },
  { versionKey: false }
);

const BooksModel = model<Book>("books", BookSchema);

export default BooksModel;
