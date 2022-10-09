import { Schema, model } from "mongoose";
import { Genre } from "./entities/genre.entity";

const GenreSchema = new Schema<Genre>(
  {
    _genre: { type: String, required: true },
  },
  { versionKey: false }
);

const GenresModel = model<Genre>("genres", GenreSchema);

export default GenresModel;
